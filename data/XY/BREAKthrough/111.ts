import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Haxorus",
		fr: "Tranchodon",
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		612,
	],
	hp: 160,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Fraxure",
		fr: "Incisache",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dragon Dance",
				fr: "Danse Draco",
			},
			effect: {
				en: "As long as this Haxorus is your Active Pokémon, each of its attacks does 100 more damage (before applying Weakness and Resistance). You can't add more than 100 damage in this way.",
				fr: "Tant que ce Tranchodon est votre Pokémon Actif, chacune de ses attaques inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance). Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc Aiguisé",
			},

			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Metal",
			],
			name: {
				en: "Dragon Pulse",
				fr: "Dracochoc",
			},
			effect: {
				en: "Discard the top 3 cards of your deck.",
				fr: "Défaussez les 3 cartes du dessus de votre deck.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
