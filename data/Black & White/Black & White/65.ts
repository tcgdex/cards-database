import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Krookodile",
		fr: "Crocorible",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		553,
	],
	hp: 140,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Torment",
				fr: "Tourmente",
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Le Pokémon Défenseur ne pourra pas l'utiliser lors du prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Krookoroll",
				fr: "Crocoroulade",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 40 more damage.",
				fr: "Si le Pokémon Défenseur a déjà des marqueurs de dégâts, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
