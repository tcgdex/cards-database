import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Alolan Dugtrio",
		fr: "Triopikeur d’Alola",
	},
	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		51,
	],
	hp: 90,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Digging Dash",
				fr: "Cours et Creuse",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
