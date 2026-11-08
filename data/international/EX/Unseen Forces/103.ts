import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Feraligatr ex",
		'fr-fr': "Aligatueur ex",
		'de-de': "Impergator ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		160,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Overpowering Fang",
				'fr-fr': "Croc dominateur",
				'de-de': "Overpowering Fang"
			},
			effect: {
				'en-us': "As long as Feraligatr ex is your Active Pokémon, each player's Pokémon (excluding Pokémon-ex) can't use any Poké-Powers or Poké-Bodies.",
				'fr-fr': "Tant qu'Aligatueur ex est votre Pokémon Actif, les Pokémon de chaque joueur (Pokémon-ex exclus) ne peuvent pas utiliser de Poké-Powers ou de Poké-Bodies.",
				'de-de': "As long as Feraligatr ex is your Active Pokémon, each player's Pokémon (excluding Pokémon-ex) can't use any Poke-Powers or Poke-Bodies."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Tsunami",
				'fr-fr': "Tsunami",
				'de-de': "Tsunami"
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sore Spot",
				'fr-fr': "Point douloureux",
				'de-de': "Sore Spot"
			},
			effect: {
				'en-us': "Does 70 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				'fr-fr': "Inflige 70 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur le Pokémon Défenseur.",
				'de-de': "Does 70 damage plus 10 more damage counter on the Defending Pokémon."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85424,
				cardmarket: 276749
			},
		},
	],
}

export default card
