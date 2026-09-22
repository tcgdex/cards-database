import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Whimsicott",
	},

	illustrator: "Yuka Tanaka",
	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [547],

	evolveFrom: {
		en: "Cottonee",
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Healing Fluff",
		},

		effect: {
			en: "Heal all damage from 1 of your Benched Pokémon.",
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "U-turn",
		},

		damage: 50,

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
		}
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Metal",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 859022,
				tcgplayer: 664054
			}
		},
	],
}

export default card
