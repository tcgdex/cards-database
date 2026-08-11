import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Altaria ex",
		'fr-fr': "Altaria ex",
		'de-de': "Altaria ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Tylton"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Mist",
				'fr-fr': "Brume",
				'de-de': "Mist"
			},
			effect: {
				'en-us': "Any damage done to Altaria ex by attacks from Stage 2 Evolved Pokémon (both yours and your opponent's) is reduced by 30 (after applying Weakness and Resistance).",
				'fr-fr': "Les dégâts infligés à Altaria ex par des attaques de Pokémon Évolués de Niveau 2 (les vôtres et ceux de votre adversaire) sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Any damage done to Altaria ex by attacks from Stage 2 Evolved Pokémon (both yours and your opponent's) is reduced by 30 (after applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dive",
				'fr-fr': "Plongée",
				'de-de': "Dive"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Mist",
				'fr-fr': "Brume de dragon",
				'de-de': "Dragon Mist"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				'de-de': "This attack's damage isn't affected by Resistance, Poke-Powers, Poke-Bodies, or any other effects on the Defending Pokémon."
			},
			damage: 70,

		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 83524,
		cardmarket: 276601
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83524,
				cardmarket: 276601
			},
		},
	],
}

export default card
