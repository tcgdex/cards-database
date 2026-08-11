import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [906],
	set: Set,

	name: {
		fr: "Poussacha",
		en: "Sprigatito",
		es: "Sprigatito",
		it: "Sprigatito",
		pt: "Sprigatito",
		de: "Felori"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Creusogriffes",
			en: "Dig Claws",
			es: "Hundir Garras",
			it: "Scavazanne",
			pt: "Fincar Garras",
			de: "Schaufelkrallen"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715485,
				tcgplayer: 497424,
				cardtrader: 248309
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715485,
				tcgplayer: 497424,
				cardtrader: 248309
			}
		},
	],

	illustrator: "Naoyo Kimura",

	description: {
		en: "Its fluffy fur is similar in composition to plants. This Pokémon frequently washes its face to keep it from drying out.",
	},
}

export default card
