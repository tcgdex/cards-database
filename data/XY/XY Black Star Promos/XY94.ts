import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Trevenant",
		fr: "Desséliande"
	},

	illustrator: "Midori Harada",
	rarity: "Black Star Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		709,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Phantump",
		fr: "Brocélôme"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Nervous Seed",
				fr: "Graine Angoisse"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent's Basic Pokémon's attacks cost Colorless more.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, les attaques des Pokémon de base de votre adversaire coûtent  de plus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Pression Énergétique",
			},
			damage: "70+",
			effect: {
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			},
		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 552809
	}
}

export default card
