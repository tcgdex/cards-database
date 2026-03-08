import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Flareon ex",
		fr: "Pyroli ex",
		de: "Flamara ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Flame",
				fr: "Flamme évolutive",
				de: "Evolutionary Flame"
			},
			effect: {
				en: "Once during your turn, when you play Flareon ex from your hand to evolve 1 of your Pokémon, you may choose 1 of the Defending Pokémon. That Pokémon is now Burned and Confused.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Pyroli ex de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Brûlé et Confus.",
				de: "Once during your turn, when you play Flareon ex from your hand to evolve 1 of your Pokémon, you may choose 1 of the Defending Pokémon. That Pokémon is now Burned and Confused."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Fire",
			],
			name: {
				en: "Flame Screen",
				fr: "Mur de feu",
				de: "Flame Screen"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Flareon ex by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Pyroli ex par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "During your opponent's next turn, any damage done to Flareon ex by attacks is reduced by 20 (after applying Weakness and Resistance)."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Fire",
			],
			name: {
				en: "Heat Tackle",
				fr: "Charge énergétique",
				de: "Heat Tackle"
			},
			effect: {
				en: "Flareon ex does 10 damage to itself.",
				fr: "Pyroli ex s'inflige 10 dégâts.",
				de: "Flareon ex does 10 damage to itself."
			},
			damage: 70,

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
		cardmarket: 276871,
		tcgplayer: 85505
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["jimmy-ballard"]
		},
	]
}

export default card
