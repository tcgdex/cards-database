import { Card } from 'models/database/card'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		'en-us': "Pelipper δ",
		'fr-fr': "Pelipper δ"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [279],

	hp: 70,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Wingull",
		'fr-fr': "Goélise"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Mist",
				'fr-fr': "Brume"
			},
			effect: {
				'en-us': "Any damage done to Pelipper by attacks from Stage 2 Evolved Pokémon (both yours and your opponent's) is reduced by 30 (after applying Weakness and Resistance).",
				'fr-fr': "Les dégâts infligés à Bekipan par des attaques des Pokémon Évolués de Niveau 2 (les vôtres et ceux de votre adversaire) sont réduits de 30 (après application de la Faiblesse et de la Résistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Wing",
				'fr-fr': "Aile éclair"
			},
			effect: {
				'en-us': "Does 10 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à 1 des Pokémon de votre Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 0,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87981,
				cardmarket: 277496
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87981,
				cardmarket: 277496
			},
		},
	],

}

export default card
