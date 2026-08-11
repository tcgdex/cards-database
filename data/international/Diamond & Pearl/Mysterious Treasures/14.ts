import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Mesprit",
		'fr-fr': "Créfollet",
		'de-de': "Vesprit"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		481,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Upper Material",
				'fr-fr': "Matériel stimulant",
				'de-de': "Aufputschmittel"
			},
			effect: {
				'en-us': "If you have Uxie and Azelf in play, the Retreat Cost for each Uxie, Mesprit, and Azelf (both yours and your opponent's) is 0.",
				'fr-fr': "Si vous avez Créhelf et Créfadet en jeu, le Coût de retraite pour chaque Créhelf, Créfollet et Créfadet (les vôtres et ceux de votre adversaire) est de 0.",
				'de-de': "Wenn du Selfe und Tobutz im Spiel hast, hat jedes Selfe, Vesprit und Tobutz im Spiel (deine und die deines Gegners) Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Teleportation Burst",
				'fr-fr': "Téléportation explosive",
				'de-de': "Blitz-Teleportation"
			},
			effect: {
				'en-us': "You may switch Mesprit with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger Créfollet avec 1 des Pokémon de votre Banc.",
				'de-de': "Du kannst Vesprit gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Known as \"The Being of Emotion.\" It taught humans the nobility of sorrow, pain, and joy.",
		'fr-fr': "On l'appelle \"être de l'émotion\". Il enseigne aux hommes la beauté de la tristesse, la douleur et la joie."
	},

	thirdParty: {
		cardmarket: 277643,
		tcgplayer: 87331
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
		{
			type: "holo",
			stamp: ["mychael-bryan"]
		}
	]
}

export default card
