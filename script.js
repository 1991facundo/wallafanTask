document.addEventListener("DOMContentLoaded", () => {
    const monthlyButton = document.querySelector(".monthly");
    const annuallyButton = document.querySelector(".annually");

    const prices = {
        free: { monthly: 0, annually: 0 },
        basic: { monthly: 25, annually: 12 },
        pro: { monthly: 38, annually: 24 },
        enterprise: { monthly: "Get in touch with us to let you know the benefits", annually: "Get in touch with us to let you know the benefits" }
    };

    function updatePrices(planType) {
        document.querySelector(".free .price").innerHTML = `$${prices.free[planType]} / mo.`;
        if (planType === "monthly") {
            document.querySelector(".basic .price").innerHTML = `$${prices.basic.monthly} / mo.`;
            document.querySelector(".pro .price").innerHTML = `$${prices.pro.monthly} / mo.`;
            document.querySelector(".basic .billing").innerHTML = '';
            document.querySelector(".pro .billing").innerHTML = '';
        } else {
            document.querySelector(".basic .price").innerHTML = `<span class="old-price">$${prices.basic.monthly}</span> $${prices.basic.annually} / mo.`;
            document.querySelector(".pro .price").innerHTML = `<span class="old-price">$${prices.pro.monthly}</span> $${prices.pro.annually} / mo.`;
            document.querySelector(".basic .billing").innerHTML = `Billed $${prices.basic.annually * 12} per user annually`;
            document.querySelector(".pro .billing").innerHTML = `Billed $${prices.pro.annually * 12} per user annually`;
        }
        document.querySelector(".enterprise .price").innerHTML = `${prices.enterprise[planType]}`;
        document.querySelector(".enterprise .billing").innerHTML = '';
    }

    function toggleActive(button) {
        document.querySelectorAll(".pricingType button").forEach(btn => btn.style.color = "black");
        button.style.color = "rgb(0, 128, 213)";
    }

    monthlyButton.addEventListener("click", () => {
        updatePrices("monthly");
        toggleActive(monthlyButton);
    });

    annuallyButton.addEventListener("click", () => {
        updatePrices("annually");
        toggleActive(annuallyButton);
    });

    
    updatePrices("annually");
    toggleActive(annuallyButton);
});
