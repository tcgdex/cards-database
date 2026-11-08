import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Vaporeon δ",
		'fr-fr': "Aquali δ",
		'de-de': "Aquana"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 70,

	types: [
		"Water",
		"Metal",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Delta Search",
				'fr-fr': "Recherche Delta",
				'de-de': "Delta-Suche"
			},
			effect: {
				'en-us': "Search your deck for a Holon Energy card and attach it to Vaporeon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie Holon et attachez-la à Aquali. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Holon-Energiekarte und lege sie an Aquana an. Mische dein Deck danach."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Return Wave",
				'fr-fr': "Retour de vague",
				'de-de': "Welle der Widerkehr"
			},
			effect: {
				'en-us': "You may return an Energy card attached to Vaporeon to your hand. If you do, choose an Energy card attached to the Defending Pokémon and return it to your opponent's hand.",
				'fr-fr': "Vous pouvez reprendre dans votre main une carte Énergie attachée à Aquali. Choisissez alors une carte Énergie attachée au Pokémon Défenseur. Votre adversaire la reprend dans sa main.",
				'de-de': "Du kannst 1 an Aquana angelegte Energiekarte zurück auf die Hand nehmen. Wenn du das machst, wähle 1 Energiekarte, die an einem Pokémon des Gegners anliegt und gieb sie deinem Gegner zurück auf die Hand."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276781
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
