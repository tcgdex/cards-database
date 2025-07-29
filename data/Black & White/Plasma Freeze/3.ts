import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
		es: "Beedrill",
		it: "Beedrill",
		pt: "Beedrill",
		de: "Bibor"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Swift Sting",
				fr: "Piqûre Vive",
			},
			effect: {
				en: "If this Pokémon has full HP, this attack does 40 more damage, and the Defending Pokémon is now Confused and Poisoned.",
				fr: "Si ce Pokémon a tous ses PV, cette attaque inflige 40 dégâts supplémentaires, et le Pokémon Défenseur est maintenant Confus et Empoisonné.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pierce",
				fr: "Transpercement",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 280881
	}
}

export default card
