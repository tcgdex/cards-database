import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Feraligatr ex",
		fr: "Aligatueur ex",
		de: "Impergator ex"
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
		en: "Croconaw",
		fr: "Crocrodil"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Overpowering Fang",
				fr: "Croc dominateur",
				de: "Overpowering Fang"
			},
			effect: {
				en: "As long as Feraligatr ex is your Active Pokémon, each player's Pokémon (excluding Pokémon-ex) can't use any Poké-Powers or Poké-Bodies.",
				fr: "Tant qu'Aligatueur ex est votre Pokémon Actif, les Pokémon de chaque joueur (Pokémon-ex exclus) ne peuvent pas utiliser de Poké-Powers ou de Poké-Bodies.",
				de: "As long as Feraligatr ex is your Active Pokémon, each player's Pokémon (excluding Pokémon-ex) can't use any Poke-Powers or Poke-Bodies."
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
				en: "Tsunami",
				fr: "Tsunami",
				de: "Tsunami"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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
				en: "Sore Spot",
				fr: "Point douloureux",
				de: "Sore Spot"
			},
			effect: {
				en: "Does 70 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 70 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur le Pokémon Défenseur.",
				de: "Does 70 damage plus 10 more damage counter on the Defending Pokémon."
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

	thirdParty: {
		cardmarket: 276749,
		tcgplayer: 85424
	},

	variants: [
		{
			type: "holo",
		},
	]
}

export default card
