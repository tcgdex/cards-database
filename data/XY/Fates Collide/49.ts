import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Carbink",
		fr: "Strassie",
	},
	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		703,
	],
	hp: 80,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Energy Keeper",
				fr: "Gardien d'Énergie",
			},
			effect: {
				en: "Basic Energy attached to your Basic Pokémon can't be discarded by effects of your opponent's attacks, Abilities, or Trainer cards.",
				fr: "Les Énergies de base attachées à vos Pokémon de base ne peuvent pas être défaussées par les effets des attaques, des talents ou des cartes Dresseur de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Stone Edge",
				fr: "Lame de Roc",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
