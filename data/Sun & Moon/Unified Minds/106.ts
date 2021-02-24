import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Aerodactyl-GX",
		fr: "Ptéra-GX",
	},
	illustrator: "PLANETA Igarashi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		142,
	],
	hp: 210,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Primal Winds",
				fr: "Vents Primaires",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent's Basic Pokémon's attacks cost Colorless more.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, les attaques des Pokémon de base de votre adversaire coûtent Colorless de plus.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Boulder Crush",
				fr: "Rocher Écrasant",
			},

			damage: 120,

		},
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Wild Dive-GX",
				fr: "Piqué Fou-GX",
			},
			effect: {
				en: "This attack does 50 damage times the amount of Energy attached to your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
