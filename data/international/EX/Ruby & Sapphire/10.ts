import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Mightyena",
		'fr-fr': "Grahyena",
		'de-de': "Magnayen"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [262],

	hp: 70,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyèna"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Intimidating Fang",
				'fr-fr': "Croc intimidant",
				'de-de': "Intimidating Fang"
			},
			effect: {
				'en-us': "As long as Mightyena is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
				'fr-fr': "Tant que Grahyena est votre Pokémon Actif, les dégâts qui lui sont infligés par une attaque de votre adversaire sont réduits de 10 (avant application de la Faiblesse et de la Résistance).",
				'de-de': "As long as Mightyena is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance)."
			}
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
				'en-us': "Shakedown",
				'fr-fr': "Dépouiller",
				'de-de': "Shakedown"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 card from your opponent's hand without looking and discard it.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez une carte de la main de votre adversaire sans la regarder et défaussez-la.",
				'de-de': "Flip a coin. If heads, choose 1 card from your opponent's hand without looking and discard it."
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


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275658,
				tcgplayer: 87443
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275658,
				tcgplayer: 87443
			}
		},
	],

}

export default card
