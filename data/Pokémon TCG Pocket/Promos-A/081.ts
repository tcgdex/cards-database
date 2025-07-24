import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Ultra Necrozma ex"
    },
    illustrator: "PLANETA Tsuji",
    category: "Pokemon",
    hp: 150,
    types: [
        "Dragon"
    ],
    stage: "Basic",
    suffix: "EX",
    attacks: [
        {
            cost: [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Photon Claw"
            },
            damage: "60"
        },
        {
            cost: [
                "Psychic",
                "Psychic",
                "Metal",
                "Metal"
            ],
            name: {
                en: "Shoegaze"
            },
            effect: {
                en: "Discard the top 5 cards of each player's deck."
            },
            damage: "120"
        }
    ],
    description: {
        en: null
    },
    weaknesses: [
        {
            type: "none",
            value: "+20"
        }
    ],
    retreat: 2,
    rarity: "Four Diamond",
    boosters: []
}

export default card
