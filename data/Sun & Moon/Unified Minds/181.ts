import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Gumshoos",
		fr: "Argouste",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		735,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Yungoos",
		fr: "Manglouton",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Alert Headbutt",
				fr: "Réveil Coup d’Boule",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon-GX or Pokémon-EX, this attack's base damage is 30.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-EX, les dégâts de base de cette attaque sont de 30.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
