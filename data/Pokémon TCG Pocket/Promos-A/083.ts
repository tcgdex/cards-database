import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Stufful"
    },
    illustrator: "Kanako Eo",
    category: "Pokemon",
    hp: 70,
    types: [
        "Colorless"
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Ram"
            },
            damage: "40"
        }
    ],
    description: {
        en: "Its fluffy fur is a delight to pet, but carelessly reaching out to touch this Pokémon could result in painful retaliation."
    },
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2,
    rarity: "Three Diamond",
    boosters: []
}

export default card
