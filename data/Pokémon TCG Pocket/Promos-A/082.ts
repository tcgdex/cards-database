import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Poipole"
    },
    illustrator: "Megumi Mizutani",
    category: "Pokemon",
    hp: 60,
    types: [
        "Darkness"
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Darkness"
            ],
            name: {
                en: "2-Step"
            },
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads."
            },
            damage: "20x"
        }
    ],
    description: {
        en: "This Ultra Beast is well enough liked to be chosen as a first partner in its own world."
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
