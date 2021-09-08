import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Jumpluff",
		fr: "Cotovol",
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		189,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Skiploom",
		fr: "Floravol",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Mass Attack",
				fr: "Attaque en masse",
			},
			effect: {
				en: "Does 10 damage times the number of Pokémon in play (both yours and your opponent’s).",
				fr: "Inflige 10 dégâts multiplié par le nombre de Pokémon en jeu (les vôtres et ceux de votre adversaire).",
			},
			damage: "10×",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leaf Guard",
				fr: "Feuille garde",
			},
			effect: {
				en: "During your opponent’s next turn, any damage done to Jumpluff by attacks is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à Cotovol par des attaques pendant le prochain tour de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

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
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0
}

export default card
