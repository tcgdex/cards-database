import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Clefable",
		fr: "Mélodelfe",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		36,
	],
	hp: 110,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Moon-Watching Dance",
				fr: "Danse au Clair de Lune",
			},
			effect: {
				en: "This attack does 30 more damage for each of your Pokémon that has any Fairy Energy attached to it.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon auquel de l’Énergie Fairy est attachée.",
			},
			damage: 10,

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
