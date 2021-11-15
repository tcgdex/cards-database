import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Slaking",
		fr: "Monaflemit"
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
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lazy Aura",
				fr: "Aura fainéante"
			},
			effect: {
				en: "As long as Slaking is your Active Pokémon, any damage done by attacks from your opponent's Pokémon-ex is reduced by 30 (before applying Weakness and Resistance).",
				fr: "Tant que Monaflemit est votre Pokémon Actif, les dégâts infligés par des attaques du Pokémon-ex de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance)."
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
				fr: "Amnésie"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire."
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
				fr: "Coup d'boule fainéant"
			},
			effect: {
				en: "Slaking is now Asleep.",
				fr: "Monaflemit est maintenant Endormi."
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





}

export default card
