import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Évoli",
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		133,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Palette of Friends",
				fr: "Palette d’Amis",
			},
			effect: {
				en: "This attack does 10 damage for each different type of Pokémon on your Bench.",
				fr: "Cette attaque inflige 10 dégâts pour chaque type différent de Pokémon sur votre Banc.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
