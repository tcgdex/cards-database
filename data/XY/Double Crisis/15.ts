import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Magma's Groudon EX",
		fr: "Groudon-EX de la Team Magma",
	},

	illustrator: "nagimiso",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		383,
	],

	hp: 190,

	types: [
		"Fighting",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power Saver",
				fr: "Économie de Puissance",
			},
			effect: {
				en: "If there are 4 or fewer Team Magma Pokémon in play, this Pokémon can't attack.",
				fr: "S'il y a 4 Pokémon de la Team Magma en jeu ou moins, ce Pokémon ne peut pas attaquer.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Magma Quake",
				fr: "Secousse Magma",
			},
			effect: {
				en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: "80＋",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 282526,
		tcgplayer: 97061
	}
}

export default card
