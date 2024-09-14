const contentCont = document.querySelector("#content");

export function createHome(){
    const homeDiv = document.createElement("div");
    homeDiv.className = "home";
    contentCont.appendChild(homeDiv);

    const head1 = document.createElement("h1");
    head1.textContent = "Where Magic Meets Flavor";
    const p1 = document.createElement("p");
    p1.textContent = `Step inside The Enchanted Elixir Tavern, a mystical hideaway where
        mages, adventurers, and curious souls gather to sample the finest
        magical potions and artisanal dishes. Our tavern offers more than just
        nourishment – it's an experience that delights the senses and enchants
        the spirit.`;
    homeDiv.appendChild(head1);
    homeDiv.appendChild(p1);

    const head2 = document.createElement("h1");
    head2.textContent = "Our Potions and Brews";
    const p2 = document.createElement("p");
    p2.textContent = `At the heart of The Enchanted Elixir Tavern is our collection of
        handcrafted potions and enchanted beverages, created by master mages
        from across the realms. Whether you're seeking a boost in vitality, a
        dash of courage, or simply a drink that sparkles with otherworldly
        flavors, you'll find it in our ever-changing selection.`;
    homeDiv.appendChild(head2);
    homeDiv.appendChild(p2);

    const head3 = document.createElement("h1");
    head3.textContent = "Visit Us and Begin Your Adventure";
    const p3 = document.createElement("p");
    p3.innerHTML = `<span>Elixir Emporium</span><br>
        1 Mystic Moonlight Lane,<br>
Arcane Alley,<br>
Whispering Woods,<br>
Kingdom of Eldoria,<br>
Realm of Eterna`;
    homeDiv.appendChild(head3);
    homeDiv.appendChild(p3);
}