import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Charizard G",
		de: "Glurak G"
	},
	illustrator: "Wataru Kawahara",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 120,
	types: [
		"Fire",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Call for Power",
				de: "Kraftruf"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move an Energy attached to 1 of your Pokémon to Charizard . This power can't be used if Charizard  is affected by a Special Condition.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Energie, die an 1 deiner Pokémon angelegt ist, entfernen und an Glurak G anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Glurak G von einem Speziellen Zustand betroffen ist."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Malevolent Fire",
				de: "Bösartiges Feuer"
			},
			effect: {
				en: "Flip a coin. If tails, discard all Energy attached to Charizard .",
				de: "Wirf 1 Münze. Bei \"Zahl\" entferne alle Energien, die an Glurak G angelegt sind, und lege sie auf deinen Ablagestapel."
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
