import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Vanillite"
    },
    illustrator: "OOYAMA",
    category: "Pokemon",
    hp: 60,
    types: [
        "Water"
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Water"
            ],
            name: {
                en: "Sweets Relay"
            },
            effect: {
                en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 20 more damage."
            },
            damage: "10+"
        }
    ],
    description: {
        en: "Unable to survive in hot areas, it makes itself comfortable by breathing out air cold enough to cause snow. It burrows into the snow to sleep."
    },
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1,
    rarity: "One Diamond",
    boosters: []
}

export default card
