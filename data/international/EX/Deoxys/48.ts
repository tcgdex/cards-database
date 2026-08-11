import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Starmie",
		'fr-fr': "Statoss",
		'de-de': "Starmie"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Staryu",
		'fr-fr': "Stari"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Core Guard",
				'fr-fr': "Protection principale",
				'de-de': "Core Guard"
			},
			effect: {
				'en-us': "As long as Starmie has any Psychic Energy attached to it, damage done to Starmie by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Tant que Statoss possède une Énergie , les dégâts qui lui sont infligés par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "As long as Starmie has any  Energy attached to it, damage done to Starmie by attacks is reduced by 10 (after applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Energy Flip",
				'fr-fr': "Échange d'énergie",
				'de-de': "Energy Flip"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) You may move an Energy attached to that Pokémon to another of your opponent's Pokémon.",
				'fr-fr': "Choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc). Vous pouvez déplacer une Énergie attachée à ce Pokémon à un autre Pokémon de votre adversaire.",
				'de-de': "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) You may move an Enegry attached to that Pokémon to another of your opponent's Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psychic Boom",
				'fr-fr': "Psycho-boom",
				'de-de': "Psychic Boom"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
				'de-de': "Does 10 damage plus 10 more damage for each Energy attached to the Defending Pokémon."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89533,
				cardmarket: 276451
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89533,
				cardmarket: 276451
			},
		},
	],

}

export default card
