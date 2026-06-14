function conveneCourt() {

    const question =
        document.getElementById("question").value;

    const result =
        document.getElementById("result");

    const loading =
        document.getElementById("loading");

    if(question.trim()===""){
        alert("Please enter a question.");
        return;
    }

    const selected = [];

    document
        .querySelectorAll(
            '.advisors input[type="checkbox"]:checked'
        )
        .forEach(box=>{
            selected.push(box.value);
        });

    if(selected.length===0){
        alert("Select at least one advisor.");
        return;
    }

    loading.innerHTML =
        "⚖️ The Court is Deliberating...";

    result.innerHTML = "";

    setTimeout(()=>{

        let output =
`CASE PRESENTED

${question}

━━━━━━━━━━━━━━━━━━

`;

        selected.forEach(advisor=>{

            output += advisor.toUpperCase() + "\n\n";

            if(advisor==="Philosopher"){
                output +=
                "Reflect on long-term meaning and personal values.\n\n";
            }

            if(advisor==="Strategist"){
                output +=
                "Evaluate risks, rewards and future opportunities.\n\n";
            }

            if(advisor==="Entrepreneur"){
                output +=
                "Take action quickly and learn through execution.\n\n";
            }

            output += "━━━━━━━━━━━━━━━━━━\n\n";

        });

        output +=
`FINAL VERDICT

The Court recommends balancing thoughtful reflection with decisive action. Choose the path that best supports your long-term goals.`;

        loading.innerHTML = "";
        result.innerHTML = output;

    },1500);
}