import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Solgaleo",
		fr: "Solgaleo",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		791,
	],
	hp: 170,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Armor of the Sunne",
				fr: "Armure du Halo Solaire",
			},
			effect: {
				en: "If you have Lunala in play, your Solgaleo and Lunala take 50 less damage from your opponent's attacks (after applying Weakness and Resistance). You can't apply more than 1 Armor of the Sunne Ability at a time.",
				fr: "Si vous avez Lunala en jeu, vos Solgaleo et Lunala subissent 50 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d’un talent Armure du Halo Solaire à la fois.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sol Fangs",
				fr: "Crocs Solaires",
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
