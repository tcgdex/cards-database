import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Aggron",
		fr: "Galeking",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		306,
	],
	hp: 140,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Lairon",
		fr: "Galegon",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Second Strike",
				fr: "Deuxième coup",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 40 more damage.",
				fr: "Si le Pokémon Défenseur a déjà des marqueurs de dégât, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires.",
			},
			damage: "40+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guard Claw",
				fr: "Griffe de garde",
			},
			effect: {
				en: "During your opponent’s next turn, any damage done to Aggron by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à Galeking par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 60,

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
	retreat: 4,



}

export default card
