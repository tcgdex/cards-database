import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Dusk Mane Necrozma"
    },
    illustrator: "nagimiso",
    category: "Pokemon",
    hp: 110,
    types: [
        "Metal"
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Metal",
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Black Metal"
            },
            effect: {
                en: "Discard a {M} Energy from this Pokémon."
            },
            damage: "100"
        }
    ],
    description: {
        en: "This is its form while it is devouring the light of Solgaleo. It pounces on foes and then slashes them with the claws on its four limbs and back."
    },
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2,
    rarity: "Three Diamond",
    boosters: []
}

export default card
