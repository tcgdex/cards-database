import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Charizard G",
		fr: "Dracaufeu ",
		de: "Glurak G"
	},
	illustrator: "Wataru Kawahara",
	rarity: "Rare Holo LV.X",
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
	suffix: "SP",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Call for Power",
				fr: "Appel à la puissance",
				de: "Kraftruf"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move an Energy attached to 1 of your Pokémon to Charizard G. This power can't be used if Charizard G is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une Énergie attachée à 1 de vos Pokémon sur Dracaufeu . Ce pouvoir ne peut pas être utilisé si Dracaufeu  est affecté par un État Spécial.",
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
				fr: "Feu malveillant",
				de: "Bösartiges Feuer"
			},
			effect: {
				en: "Flip a coin. If tails, discard all Energy attached to Charizard G.",
				fr: "Lancez une pièce. Si c'est pile, défaussez toutes les Énergies attachées à Dracaufeu .",
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
	retreat: 3,

	variants: [
		{
			type: "holo"
		}
	]



}

export default card
