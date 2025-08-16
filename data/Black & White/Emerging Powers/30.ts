import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Beartic",
		fr: "Polagriffe",
		es: "Beartic",
		it: "Beartic",
		pt: "Beartic",
		de: "Siberio"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		614,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Cubchoo",
		fr: "Polarhume",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sheer Cold",
				fr: "Glaciation",
			},
			effect: {
				en: "The Defending Pokémon can't attack during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Icicle Crash",
				fr: "Chute Glace",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 279995,
		tcgplayer: 83751
	}
}

export default card
