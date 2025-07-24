import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Alcremie"
    },
    illustrator: "Tika Matsuno",
    category: "Pokemon",
    hp: 80,
    types: [
        "Psychic"
    ],
    stage: "Stage1",
    evolveFrom: {
        en: "Milcery"
    },
    attacks: [
        {
            cost: [
                "Colorless"
            ],
            name: {
                en: "Sweets Overload"
            },
            effect: {
                en: "This attack does 40 damage for each time your Pokémon used Sweets Relay during this game."
            },
            damage: "40x"
        }
    ],
    description: {
        en: "When it trusts a Trainer, it will treat them to berries it’s decorated with cream."
    },
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1,
    rarity: "One Star",
    boosters: []
}

export default card
