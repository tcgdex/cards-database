import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Simisear",
		fr: "Flamoutan",
		es: "Simisear",
		it: "Simisear",
		pt: "Simisear",
		de: "Grillchita"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		514,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Pansear",
		fr: "Flamajou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Collect",
				fr: "Collecte",
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Stadium Burn",
				fr: "Stade en Flammes",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 30 more damage and the Defending Pokémon is now Burned.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 30 dégâts supplémentaires et le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280241
	}
}

export default card
