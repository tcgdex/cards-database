import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Venusaur",
		fr: "Florizarre",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		3,
	],
	hp: 160,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Jungle Totem",
				fr: "Jungle Dominante",
			},
			effect: {
				en: "Each basic Grass Energy attached to your Pokémon provides GrassGrass Energy. You can't apply more than 1 Jungle Totem Ability at a time.",
				fr: "Chaque Énergie Grass de base attachée à vos Pokémon fournit de l’Énergie GrassGrass. Vous ne pouvez pas utiliser plus d’un talent Jungle Dominante à la fois.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Lance-Soleil",
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
