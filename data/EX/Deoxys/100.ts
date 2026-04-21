import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Hariyama ex",
		fr: "Hariyama ex",
		de: "Hariyama ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		297,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Makuhita",
		fr: "Makuhita"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Commanding Aura",
				fr: "Aura autoritaire",
				de: "Commanding Aura"
			},
			effect: {
				en: "As long as Hariyama ex is your Active Pokémon, your opponent can't play any Stadium cards from his or her hand.",
				fr: "Tant qu'Hariyama ex est votre Pokémon Actif, votre adversaire ne peut plus jouer de carte Stade de sa main.",
				de: "As long as Hariyama ex is your Active Pokémon, your opponent can't play any Stadium cards from his or her hand."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Knock Off",
				fr: "Sabotage",
				de: "Knock Off"
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking and discard it.",
				fr: "Choisissez 1 carte de la main de votre adversaire sans regarder et défaussez-la.",
				de: "Choose 1 card from your opponent's hand without looking and discard it."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Pivot Throw",
				fr: "Lancer tournant",
				de: "Pivot Throw"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Hariyama ex by attacks is increased by 10 (before applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Hariyama ex par des attaques sont augmentés de 10 (avant application de la Faiblesse et de la Résistance).",
				de: "During your opponent's next turn, any damage done to Hariyama ex by attacks is increased by 10 (before applying Weakness and Resistance)."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 86018,
		cardmarket: 276503
	},

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
