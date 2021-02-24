import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dragon Intimidation",
				fr: "Draco-intimidation",
			},
			effect: {
				en: "If Garchomp is your Active Pokémon and is damaged by an opponent's attack (even if Garchomp is Knocked Out), choose an Energy card attached to the Attacking Pokémon and put it into your opponent's hand.",
				fr: "Si Carchacrok est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Carchacrok est mis K.O.), choisissez une carte Énergie attachée au Pokémon Attaquant et placez-la dans la main de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guard Claw",
				fr: "Griffe de garde",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Garchomp by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous les dégâts infligés à Carchacrok par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Impact",
				fr: "Impact soudain",
			},
			effect: {
				en: "Does 120 damage minus 20 damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 120 dégâts moins 20 dégâts pour chaque Énergie attachée au Pokémon Défenseur.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+30"
		},
	],





}

export default card
