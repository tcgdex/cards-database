import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		en: "Tinkatuff",
		fr: "Forgella",
		es: "Tinkatuff",
		it: "Tinkatuff",
		de: "Tafforgita",
		'pt-br': "Tinkatuff",
		ko: "벼리짱"
	},

    illustrator: "kurumitsu",
    rarity: "One Shiny",
    category: "Pokemon",

    hp: 80,
    types: ["Metal"],
    dexId: [958],
    
	evolveFrom: {
		en: "Tinkatink",
		fr: "Forgerette",
		de: "Forgita",
		it: "Tinkatink",
		es: "Tinkatink",
		pt: "Tinkatink",
		'es-mx': "Tinkatink"
	},
    stage: "Stage1",

    description: {
        en: "These Pokémon make their homes in piles of scrap metal. They test the strength of each other's hammers by smashing them together.",
    },

    attacks: [
        {
		name: {
			en: "Light Punch",
			fr: "Poing Léger",
			es: "Puño Ligero",
			it: "Pugnetto",
			de: "Leichter Hieb",
			'pt-br': "Soco de Luz",
			ko: "치기"
		},
        damage: "50",
        cost: ["Metal", "Colorless"],
        },
    ],

    weaknesses: [
        {
        type: "Fire",
        value: "+20",
        },
    ],

    retreat: 1,
}

export default card