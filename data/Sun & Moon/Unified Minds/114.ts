import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 150,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Avenging Aura",
				fr: "Aura Vengeresse",
			},
			effect: {
				en: "If you have more Prize cards remaining than your opponent, this Pokémon's attacks do 80 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "S’il vous reste plus de cartes Récompense qu’à votre adversaire, les attaques de ce Pokémon infligent 80 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Over Slice",
				fr: "Coupure Excessive",
			},
			effect: {
				en: "You may discard an Energy from this Pokémon. If you do, this attack does 40 more damage.",
				fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 80,

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
