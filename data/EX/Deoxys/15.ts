import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Slaking",
		fr: "Monaflemit",
		de: "Letarking"
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
		en: "Vigoroth",
		fr: "Vigoroth"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lazy Aura",
				fr: "Aura fainéante",
				de: "Lazy Aura"
			},
			effect: {
				en: "As long as Slaking is your Active Pokémon, any damage done by attacks from your opponent's Pokémon-ex is reduced by 30 (before applying Weakness and Resistance).",
				fr: "Tant que Monaflemit est votre Pokémon Actif, les dégâts infligés par des attaques du Pokémon-ex de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				de: "As long as Slarking is your Active Pokémon, any damage done by attacks from your opponent's Pokémon-ex is reduced by 30 (before applying Weakness and Resistance)."
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
				en: "Amnesia",
				fr: "Amnésie",
				de: "Amnesia"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
				de: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn."
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
				en: "Lazy Headbutt",
				fr: "Coup d'boule fainéant",
				de: "Lazy Headbutt"
			},
			effect: {
				en: "Slaking is now Asleep.",
				fr: "Monaflemit est maintenant Endormi.",
				de: "Slaking is now Asleep."
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

	thirdParty: {
		tcgplayer: 89289,
		cardmarket: 276418
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
