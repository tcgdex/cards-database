import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Milotic",
		fr: "Milobellus",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		350,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Cleansing Ring",
				fr: "Cercle nettoyant",
			},
			effect: {
				en: "You may discard 2 cards from your hand. If you do, remove 4 damage counters from 1 of your Pokémon.",
				fr: "Vous pouvez défausser 2 cartes de votre main. Retirez alors à 1 de vos Pokémon 4 marqueurs de dégât.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scale Blow",
				fr: "Coup d'écaille",
			},
			effect: {
				en: "Does 90 damage minus 10 damage for each card in your hand.",
				fr: "Inflige 90 dégâts moins 10 dégâts pour chaque carte se trouvant dans votre main.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
