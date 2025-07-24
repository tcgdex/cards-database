import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Jolteon"
    },
    illustrator: "Mizue",
    category: "Pokemon",
    hp: 90,
    types: [
        "Lightning"
    ],
    stage: "Stage1",
    evolveFrom: {
        en: "Eevee"
    },
    attacks: [
        {
            cost: [
                "Lightning"
            ],
            name: {
                en: "Beginning Bolt"
            },
            effect: {
                en: "If this Pokémon evolved during this turn, this attack does 20 more damage."
            },
            damage: "40+"
        }
    ],
    description: {
        en: "It concentrates the weak electric charges emitted by its cells and launches wicked lightning bolts."
    },
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    rarity: "Three Diamond",
    boosters: []
}

export default card
