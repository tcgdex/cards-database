import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Libégon",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 130,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rainbow Shower",
				fr: "Averse Arc-En-Ciel",
			},
			effect: {
				en: "Attach as many basic Energy cards as you like from your hand to your Pokémon in any way you like.",
				fr: "Attachez autant d’Énergies de base que vous voulez de votre main à vos Pokémon, de la manière que vous voulez.",
			},

		},
		{
			cost: [
				"Grass",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sand Sweep",
				fr: "Balayette Sablonneuse",
			},
			effect: {
				en: "Heal 30 damage from each of your Pokémon that has any Energy attached to it.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon auquel de l’Énergie est attachée.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
