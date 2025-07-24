import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Dragonair"
    },
    illustrator: "Shinya Komatsu",
    category: "Pokemon",
    hp: 100,
    types: [
        "Dragon"
    ],
    stage: "Stage1",
    evolveFrom: {
        en: "Dratini"
    },
    attacks: [
        {
            cost: [
                "Colorless"
            ],
            name: {
                en: "Shed Skin"
            },
            effect: {
                en: "Heal 30 damage from this Pokémon."
            }
        }
    ],
    description: {
        en: "They say that if it emits an aura from its whole body, the weather will begin to change instantly."
    },
    weaknesses: [
        {
            type: "none",
            value: "+20"
        }
    ],
    retreat: 2,
    rarity: "One Diamond",
    boosters: []
}

export default card
