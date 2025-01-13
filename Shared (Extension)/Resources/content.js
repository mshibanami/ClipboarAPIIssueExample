const copyButton = document.createElement('button');
const text = "Hello";
copyButton.textContent = `Copy '${text}' to clipboard`;

copyButton.addEventListener('click', async () => {
  await chrome.runtime.sendMessage({});
  try {
    await navigator.clipboard.writeText(text);
    alert(`✅ Copied '${text}' to clipboard!`);
  } catch (err) {
    alert(err + '\n\n' + `navigator.userActivation.isActive: ${navigator.userActivation.isActive}`);
  }
});
document.body.appendChild(copyButton);
