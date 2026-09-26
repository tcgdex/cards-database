import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Victini",
		es: "Victini",
	},

	illustrator: "satoma",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	dexId: [494],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Call for Family",
			es: "Llamar a la Familia",
		},

		effect: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
		}
	},
	{
		cost: ["Fire", "Colorless"],

		name: {
			en: "V-Flame",
			es: "Llama V",
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895613,
				tcgplayer: 713286
			}
		}
	],
}

export default card
