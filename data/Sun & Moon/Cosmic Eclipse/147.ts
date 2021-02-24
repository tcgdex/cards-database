import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Cottonee",
		fr: "Doudouvet",
	},
	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		546,
	],
	hp: 40,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lost March",
				fr: "Marche Perdue",
			},
			effect: {
				en: "This attack does 20 damage for each of your Pokémon, except ◇ (Prism Star) Pokémon, in the Lost Zone.",
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon dans la Zone Perdue, à l’exception des Pokémon  (Prisme Étoile).",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
