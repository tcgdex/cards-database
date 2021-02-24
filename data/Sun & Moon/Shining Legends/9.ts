import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Shining Genesect",
		fr: "Genesect Brillant",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		649,
	],
	hp: 130,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Energy Reload",
				fr: "Recharge d’Énergie",
			},
			effect: {
				en: "Once during your turn (before your attack), you may move a Grass Energy from 1 of your other Pokémon to this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Grass de l’un de vos Pokémon vers ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gaia Blaster",
				fr: "Explosion de Gaïa",
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Grass Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Grass attachées à ce Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
