import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Audino"
    },
    illustrator: "MAHOU",
    category: "Pokemon",
    hp: 100,
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
                en: "Drain Slap"
            },
            effect: {
                en: "Heal 10 damage from this Pokémon."
            },
            damage: "40"
        }
    ],
    description: {
        en: "This Pokémon has a kind heart. By touching with its feelers, Audino can gauge other creatures’ feelings and physical conditions."
    },
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2,
    rarity: "One Diamond",
    boosters: []
}

export default card
