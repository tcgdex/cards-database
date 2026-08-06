import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [10],
	set: Set,

	name: {
		en: "Caterpie",
		fr: "Chenipan",
		es: "Caterpie",
		it: "Caterpie",
		pt: "Caterpie",
		de: "Raupy"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: [
		"Grass"
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nap"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon."
			}
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gnaw"
			},
			damage: 20
		},
	],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297232,
				tcgplayer: 152816
			}
		},
	],

}

export default card