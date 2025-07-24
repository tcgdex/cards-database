import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Blacephalon"
    },
    illustrator: "Hasuno",
    category: "Pokemon",
    hp: 100,
    types: [
        "Fire"
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Fire",
                "Fire",
                "Colorless"
            ],
            name: {
                en: "Beat Punk"
            },
            effect: {
                en: "This Pokémon also does 70 damage to itself."
            },
            damage: "130"
        }
    ],
    description: {
        en: "It slithers toward people. Then, without warning, it triggers the explosion of its own head. It’s apparently one kind of Ultra Beast."
    },
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2,
    rarity: "One Diamond",
    boosters: []
}

export default card
