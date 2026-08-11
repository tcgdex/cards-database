import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Vaporeon",
		'fr-fr': "Aquali",
		'de-de': "Aquana"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Aqua Supply",
				'fr-fr': "Source aqua",
				'de-de': "Aqua Supply"
			},
			effect: {
				'en-us': "You may attach a basic Energy card from your hand to 1 of your Pokémon.",
				'fr-fr': "Vous pouvez attacher une carte Énergie de base de votre main à 1 de vos Pokémon.",
				'de-de': "You may attach a basic Energy card from your hand to 1 of your Pokémon."
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
				'en-us': "Multi Bubble",
				'fr-fr': "Multi-bulles",
				'de-de': "Multi Bubble"
			},
			effect: {
				'en-us': "If Vaporeon has 3 or more different types of basic Energy cards attached to it, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Asleep.",
				'fr-fr': "Si Aquali possède au moins 3 types de cartes Énergie de base différents, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "If Vaporeon has 3 more different types of basic Energy attached to it, this attack does 40 damage plus 20 more damage and the defending Pokémon is now Asleep."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90282,
				cardmarket: 276665
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 90282,
				cardmarket: 276665
			},
		}
	],
}

export default card
