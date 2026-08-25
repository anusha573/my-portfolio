<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <!-- Name -->
    <div class="form-group">
      <label for="name"> Name <span>*</span> </label>

      <input
        id="name"
        v-model.trim="name"
        name="name"
        type="text"
        placeholder="Your name"
        :class="{ 'input-error': nameError }"
        :disabled="isSubmitting"
        @blur="validateName"
      />

      <p v-if="nameError" class="error">
        {{ nameError }}
      </p>
    </div>

    <!-- Email -->
    <div class="form-group">
      <label for="email"> Email <span>*</span> </label>

      <input
        id="email"
        v-model.trim="email"
        name="email"
        type="email"
        placeholder="your@email.com"
        :class="{ 'input-error': emailError }"
        :disabled="isSubmitting"
        @blur="validateEmail"
      />

      <p v-if="emailError" class="error">
        {{ emailError }}
      </p>
    </div>

    <!-- Subject -->
    <div class="form-group">
      <label for="subject"> Subject <span>*</span> </label>

      <input
        id="subject"
        v-model.trim="subject"
        name="subject"
        type="text"
        placeholder="How can I help?"
        :class="{ 'input-error': subjectError }"
        :disabled="isSubmitting"
        @blur="validateSubject"
      />

      <p v-if="subjectError" class="error">
        {{ subjectError }}
      </p>
    </div>

    <!-- Message -->
    <div class="form-group">
      <label for="message"> Message <span>*</span> </label>

      <textarea
        id="message"
        v-model.trim="message"
        name="message"
        rows="6"
        placeholder="Write your message..."
        :class="{ 'input-error': messageError }"
        :disabled="isSubmitting"
        @blur="validateMessage"
      ></textarea>

      <p v-if="messageError" class="error">
        {{ messageError }}
      </p>
    </div>

    <!-- Success Message -->
    <p v-if="successMessage" class="success-message">
      {{ successMessage }}
    </p>

    <!-- Submit Error -->
    <p v-if="submitError" class="submit-error">
      {{ submitError }}
    </p>

    <!-- Submit -->
    <button type="submit" :disabled="isSubmitting">
      <span v-if="isSubmitting"> Sending... </span>

      <span v-else>
        Send Message
        <span>→</span>
      </span>
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const nameError = ref("");
const emailError = ref("");
const subjectError = ref("");
const messageError = ref("");

const isSubmitting = ref(false);

const successMessage = ref("");
const submitError = ref("");

/* ========================================
   FORMSPREE
======================================== */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvkpjqne";

/* ========================================
   VALIDATION
======================================== */

const validateName = () => {
  if (!name.value) {
    nameError.value = "Name is required.";
    return false;
  }

  nameError.value = "";
  return true;
};

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.value) {
    emailError.value = "Email is required.";
    return false;
  }

  if (!emailPattern.test(email.value)) {
    emailError.value = "Please enter a valid email address.";
    return false;
  }

  emailError.value = "";
  return true;
};

const validateSubject = () => {
  if (!subject.value) {
    subjectError.value = "Subject is required.";
    return false;
  }

  subjectError.value = "";
  return true;
};

const validateMessage = () => {
  if (!message.value) {
    messageError.value = "Message is required.";
    return false;
  }

  messageError.value = "";
  return true;
};

/* ========================================
   RESET FORM
======================================== */

const resetForm = () => {
  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";

  nameError.value = "";
  emailError.value = "";
  subjectError.value = "";
  messageError.value = "";
};

/* ========================================
   SUBMIT
======================================== */

const handleSubmit = async () => {
  successMessage.value = "";
  submitError.value = "";

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isSubjectValid = validateSubject();
  const isMessageValid = validateMessage();

  if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
    return;
  }

  isSubmitting.value = true;

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify({
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data?.errors?.[0]?.message || "Something went wrong. Please try again.",
      );
    }

    successMessage.value = "Thanks! Your message has been sent successfully.";

    resetForm();
  } catch (error) {
    console.error("Form submission error:", error);

    submitError.value =
      "Sorry, your message could not be sent. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* ========================================
   FORM
======================================== */

.contact-form {
  width: 100%;

  max-width: 560px;

  padding: 28px;

  border: 1px solid var(--border-color);

  border-radius: 20px;

  background: var(--bg-card);

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.05);

  transition:
    background 0.3s ease,
    border-color 0.3s ease;
}

/* ========================================
   FORM GROUP
======================================== */

.form-group {
  margin-bottom: 20px;
}

/* ========================================
   LABEL
======================================== */

label {
  display: block;

  margin-bottom: 8px;

  color: var(--text-primary);

  font-size: 0.82rem;

  font-weight: 700;
}

label span {
  color: #dc2626;
}

/* ========================================
   INPUTS
======================================== */

input,
textarea {
  width: 100%;

  box-sizing: border-box;

  padding: 12px 14px;

  border: 1px solid var(--border-color);

  border-radius: 10px;

  outline: none;

  background: var(--bg-primary);

  color: var(--text-primary);

  font: inherit;

  font-size: 0.88rem;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.3s ease,
    color 0.3s ease;
}

input::placeholder,
textarea::placeholder {
  color: var(--text-muted);
}

input:focus,
textarea:focus {
  border-color: var(--text-primary);

  box-shadow: 0 0 0 3px rgba(128, 128, 128, 0.12);
}

input:disabled,
textarea:disabled {
  opacity: 0.6;

  cursor: not-allowed;
}

/* ========================================
   ERROR INPUT
======================================== */

input.input-error,
textarea.input-error {
  border-color: #dc2626;
}

input.input-error:focus,
textarea.input-error:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.08);
}

/* ========================================
   TEXTAREA
======================================== */

textarea {
  min-height: 140px;

  resize: vertical;
}

/* ========================================
   ERROR MESSAGE
======================================== */

.error {
  margin: 6px 0 0;

  color: #dc2626;

  font-size: 0.75rem;

  line-height: 1.4;
}

/* ========================================
   SUCCESS MESSAGE
======================================== */

.success-message {
  margin: 0 0 18px;

  padding: 12px 14px;

  border: 1px solid #86efac;

  border-radius: 10px;

  background: #f0fdf4;

  color: #166534;

  font-size: 0.82rem;

  font-weight: 600;

  line-height: 1.5;
}

/* ========================================
   SUBMIT ERROR
======================================== */

.submit-error {
  margin: 0 0 18px;

  padding: 12px 14px;

  border: 1px solid #fecaca;

  border-radius: 10px;

  background: #fef2f2;

  color: #b91c1c;

  font-size: 0.82rem;

  line-height: 1.5;
}

/* ========================================
   BUTTON
======================================== */

button {
  width: 100%;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  padding: 13px 20px;

  border: none;

  border-radius: 10px;

  background: var(--button-bg);

  color: var(--button-text);

  font-size: 0.88rem;

  font-weight: 700;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease,
    opacity 0.25s ease;
}

button:hover:not(:disabled) {
  transform: translateY(-2px);

  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.15);
}

button:disabled {
  opacity: 0.6;

  cursor: not-allowed;

  transform: none;
}

button span {
  font-size: 1rem;

  transition: transform 0.2s ease;
}

button:hover:not(:disabled) span {
  transform: translateX(3px);
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {
  .contact-form {
    padding: 20px;

    border-radius: 16px;
  }
}
</style>
