import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Slaking",
		'fr-fr': "Monaflemit",
		'de-de': "Letarking"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		289,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Lazy Aura",
				'fr-fr': "Aura fainéante",
				'de-de': "Lazy Aura"
			},
			effect: {
				'en-us': "As long as Slaking is your Active Pokémon, any damage done by attacks from your opponent's Pokémon-ex is reduced by 30 (before applying Weakness and Resistance).",
				'fr-fr': "Tant que Monaflemit est votre Pokémon Actif, les dégâts infligés par des attaques du Pokémon-ex de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				'de-de': "As long as Slarking is your Active Pokémon, any damage done by attacks from your opponent's Pokémon-ex is reduced by 30 (before applying Weakness and Resistance)."
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
				'en-us': "Amnesia",
				'fr-fr': "Amnésie",
				'de-de': "Amnesia"
			},
			effect: {
				'en-us': "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				'fr-fr': "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
				'de-de': "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lazy Headbutt",
				'fr-fr': "Coup d'boule fainéant",
				'de-de': "Lazy Headbutt"
			},
			effect: {
				'en-us': "Slaking is now Asleep.",
				'fr-fr': "Monaflemit est maintenant Endormi.",
				'de-de': "Slaking is now Asleep."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89289,
				cardmarket: 276418
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89289,
				cardmarket: 276418
			},
		},
	],

}

export default card
