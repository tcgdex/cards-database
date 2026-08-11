import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Nidoking δ",
		'fr-fr': "Nidoking δ",
		'de-de': "Nidoking"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Linear Attack",
				'fr-fr': "Attaque linéaire",
				'de-de': "Linearer Angriff"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Horn",
				'fr-fr': "Corne obscure",
				'de-de': "Dunkles Horn"
			},
			effect: {
				'en-us': "You may discard a Basic Pokémon or Evolution card from your hand. If you do, choose 1 of your opponent's Benched Pokémon and do 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Vous pouvez défausser un Pokémon de base ou une carte Évolution de votre main. Choisissez alors 1 des Pokémon de Banc de votre adversaire et infligez-lui 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Du kannst 1 Basis-Pokémon- oder Evolutionskarte von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, wähle 1 Pokémon auf der Bank deines Gegners und füge diesem 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 3,

	thirdParty: {
		cardmarket: 277211
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
