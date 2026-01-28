import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Mightyena",
		fr: "Grahyena",
		de: "Magnayen"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		262,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Poochyena",
		fr: "Medhyèna"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Fang",
				fr: "Croc intimidant",
				de: "Intimidating Fang"
			},
			effect: {
				en: "As long as Mightyena is your Active Pokémon, any damage done to your Pokémon done by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
				fr: "Tant que Grahyena est votre Pokémon Actif, les dégâts qui lui sont infligés par une attaque de votre adversaire sont réduits de 10 (avant application de la Faiblesse et de la Résistance).",
				de: "As long as Mightyena is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shakedown",
				fr: "Dépouiller",
				de: "Shakedown"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 card from your opponent's hand without looking and discard it.",
				fr: "Lancez une pièce. Si c'est face, choisissez une carte de la main de votre adversaire sans la regarder et défaussez-la.",
				de: "Flip a coin. If heads, choose 1 card from your opponent's hand without looking and discard it."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275658,
		tcgplayer: 87443
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
	]
}

export default card
