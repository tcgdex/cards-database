import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Jolteon δ",
		'fr-fr': "Voltali δ",
		'de-de': "Blitza"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 70,

	types: [
		"Lightning",
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
				'en-us': "Search your deck for a Holon Energy card and attach it to Jolteon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie Holon et attachez-la à Voltali. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Holon-Energiekarte und lege sie an Blitza an. Mische dein Deck danach."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Lightning",
				"Metal",
			],
			name: {
				'en-us': "Return Spark",
				'fr-fr': "Retour d'étincelle",
				'de-de': "Blitzende Rückkehr"
			},
			effect: {
				'en-us': "You may return an Energy card attached to Jolteon to your hand. If you do, this attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Vous pouvez reprendre dans votre main une carte Énergie attachée à Voltali. Cette attaque inflige alors 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Du kannst 1 an Blitza angelegte Energiekarte zurück auf die Hand nehmen. Wenn du das machst, füge einem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276770
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
