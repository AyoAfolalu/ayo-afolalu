/**
 * @jest-environment jsdom
 */

// This test is to ensure that the text defined in the "my_name" element is displayed when the button is clicked.

 // Import the function to test
function toggleName() {
  const output = document.getElementById("my_name");
  output.style.visibility =
    output.style.visibility === "hidden" ? "visible" : "hidden";
}

describe("toggleName function", () => {
  beforeEach(() => {
    // Reset DOM before each test
    document.body.innerHTML = `
      <button onclick="toggleName()">Click to reveal name</button>
      <div id="my_name" style="visibility: hidden;">Ayo Afolalu</div>
    `;
  });

  // Test to see if name shows when the button is clicked
  test("name is displayed after button click", () => {
    const button = document.querySelector("button");
    const output = document.getElementById("my_name");

    // Simulate button click
    button.onclick = toggleName;
    button.click();

    expect(output.style.visibility).toBe("visible");
  });
});
