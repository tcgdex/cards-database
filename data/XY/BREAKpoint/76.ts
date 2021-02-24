import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Scizor-EX",
		fr: "Cizayox-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		212,
	],
	hp: 170,
	types: [
		"Metal",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Steel Wing",
				fr: "Aile d'Acier",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				en: "Gale Thrust",
				fr: "Coup d'Bourrasque",
			},
			effect: {
				en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 60 more damage.",
				fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
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
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
