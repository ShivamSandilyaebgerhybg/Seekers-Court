function conveneCourt() {

    const question = document.getElementById("question").value;
    const result = document.getElementById("result");
    const loading = document.getElementById("loading");
    const agentStatus = document.getElementById("agentStatus");

    if (question.trim() === "") {
        alert("Please enter a question.");
        return;
    }

    const selected = [];

    document
        .querySelectorAll('.advisors input[type="checkbox"]:checked')
        .forEach(box => {
            selected.push(box.value);
        });

    if (selected.length === 0) {
        alert("Select at least one advisor.");
        return;
    }

    loading.innerHTML = "⚖️ Initializing Agents...";
    result.innerHTML = "";

    agentStatus.innerHTML =
        "🧠 Philosopher Agent | ⚔️ Strategist Agent | 🚀 Entrepreneur Agent Active";

    setTimeout(() => {

        loading.innerHTML = "⚖️ Agents Deliberating...";

    }, 700);

    setTimeout(() => {

        let output = `CASE PRESENTED

${question}

━━━━━━━━━━━━━━━━━━

`;

        selected.forEach(advisor => {

            output += advisor.toUpperCase() + "\n\n";

            if (advisor === "Philosopher") {

                output += `As the Philosopher Agent, I examine this dilemma through ethics, values, and long-term meaning.

Consider which option aligns most closely with your personal purpose and the future you wish to create.

Think beyond immediate rewards and evaluate whether this choice contributes to lasting fulfillment and personal growth.

`;

            }

            if (advisor === "Strategist") {

                output += `As the Strategist Agent, I focus on risk assessment, opportunity analysis, and long-term positioning.

Evaluate the probability of success, potential rewards, and future opportunities unlocked by each option.

The strongest decision is usually the one that creates sustainable advantages over time.

`;

            }

            if (advisor === "Entrepreneur") {

                output += `As the Entrepreneur Agent, I prioritize execution, adaptability, and practical learning.

Action creates momentum. The best choice is often the one that develops skills, generates experience, and opens new doors.

Progress frequently comes from experimentation and continuous improvement.

`;

            }

            output += "━━━━━━━━━━━━━━━━━━\n\n";

        });

        output += `FINAL VERDICT

After synthesizing the perspectives of all active agents, the Court recommends choosing the path that best balances:

• Long-term purpose and fulfillment
• Strategic opportunities and future growth
• Practical execution and skill development

The ideal decision is one that aligns with your goals while maximizing learning, growth, and future possibilities.

⚖️ Verdict Delivered by Seekers Court
`;

        loading.innerHTML = "";
        agentStatus.innerHTML =
            "⚖️ Verdict Synthesized Successfully";

        result.innerText = output;

    }, 2000);
}
