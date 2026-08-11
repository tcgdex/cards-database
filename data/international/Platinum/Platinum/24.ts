import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Dugtrio",
		'fr-fr': "Triopikeur",
		'de-de': "Digdri"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [51],

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sinkhole",
				'fr-fr': "Chausse-trappe",
				'de-de': "Sinkhole"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon retreats, put 2 damage counters on that Pokémon.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire bat en retraite, placez 2 marqueurs de dégât sur ce Pokémon.",
				'de-de': "If your opponent's Active Pokémon retreats, put 2 damage counters on that Pokémon."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Push Down",
				'fr-fr': "Renverser",
				'de-de': "Push Down"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				'de-de': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Magnitude",
				'fr-fr': "Ampleur",
				'de-de': "Magnitude"
			},
			effect: {
				'en-us': "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 85003,
				cardmarket: 278445
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278445,
				tcgplayer: 85003
			}
		}
	],

	retreat: 0
}

export default card
