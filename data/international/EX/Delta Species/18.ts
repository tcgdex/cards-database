import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Vaporeon δ",
		fr: "Aquali δ",
		de: "Aquana"
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
		en: "Eevee",
		fr: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Delta Search",
				fr: "Recherche Delta",
				de: "Delta-Suche"
			},
			effect: {
				en: "Search your deck for a Holon Energy card and attach it to Vaporeon. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie Holon et attachez-la à Aquali. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einer Holon-Energiekarte und lege sie an Aquana an. Mische dein Deck danach."
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
				en: "Return Wave",
				fr: "Retour de vague",
				de: "Welle der Widerkehr"
			},
			effect: {
				en: "You may return an Energy card attached to Vaporeon to your hand. If you do, choose an Energy card attached to the Defending Pokémon and return it to your opponent's hand.",
				fr: "Vous pouvez reprendre dans votre main une carte Énergie attachée à Aquali. Choisissez alors une carte Énergie attachée au Pokémon Défenseur. Votre adversaire la reprend dans sa main.",
				de: "Du kannst 1 an Aquana angelegte Energiekarte zurück auf die Hand nehmen. Wenn du das machst, wähle 1 Energiekarte, die an einem Pokémon des Gegners anliegt und gieb sie deinem Gegner zurück auf die Hand."
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
