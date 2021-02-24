import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		474,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Porygon2",
		fr: "Porygon2",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Digital Reboot",
				fr: "Stop Θ",
			},
			effect: {
				en: "Devolve as many of your Benched Pokémon as many times as you like. Put each Evolution card removed this way into your hand.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dazzle Blast",
				fr: "Redémarrage Numérique",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Faites dés-évoluer autant de vos Pokémon de Banc autant de fois que vous voulez. Placez chaque carte Évolution retirée de cette façon dans votre main.",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Explosion de Lumière",
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
