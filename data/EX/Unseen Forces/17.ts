import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Typhlosion",
		fr: "Typhlosion",
		de: "Tornupto"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		157,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Quilava",
		fr: "Feurisson"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Burning Aura",
				fr: "Aura brûlante",
				de: "Burning Aura"
			},
			effect: {
				en: "As long as Typhlosion is your Active Pokémon, put 1 damage counter on each Active Pokémon (both yours and your opponent's) between turns.",
				fr: "Tant que Typhlosion est votre Pokémon Actif, placez 1 marqueur de dégât sur chaque Pokémon Actif (les vôtres et ceux de votre adversaire) entre deux tours.",
				de: "As long as Typhlosion is your Active Pokémon, put 1 damage counter on each Active Pokémon (both yours and your opponent's) between turns."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flickering Flames",
				fr: "Flammes vacillantes",
				de: "Flickering Flames"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "The Defending Pokémon is now Asleep."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
				de: "Rage"
			},
			effect: {
				en: "Does 50 damage plus 10 more damage for each damage counter on Typhlosion.",
				fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Typhlosion.",
				de: "Does 50 damage plus 10 more damage for each damage counter on Typhlosion."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276663,
		tcgplayer: 90103
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card
