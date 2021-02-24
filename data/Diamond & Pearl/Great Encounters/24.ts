import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Mawile",
		fr: "Mysdibule",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		303,
	],
	hp: 70,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Pick Out",
				fr: "Choisir",
			},
			effect: {
				en: "Choose 1 face-down Prize card (yours or your opponent's) and put it face up. If that card is a Supporter card, use the effect of that card as the effect of this attack. (That card remains face up for the rest of the game.)",
				fr: "Choisissez 1 carte Récompense face cachée (1 des vôtres ou 1 de celles de votre adversaire) et retournez-la. Si c'est une carte Supporter, utilisez l'effet de cette carte comme l'effet de cette attaque. (Cette carte reste retournée jusqu'à la fin de la partie.)",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Jaw Bite",
				fr: "Morsure de mâchoire",
			},
			effect: {
				en: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage.",
				fr: "Lors de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
