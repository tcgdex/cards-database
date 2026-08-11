import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Lopunny",
		'fr-fr': "Lockpin",
		'de-de': "Schlapor"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		428,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Healing Wish",
				'fr-fr': "Voeu Soin",
				'de-de': "Heilopfer"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. Remove a number of damage counters equal to the number of heads from 1 of your Pokémon.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Retirez à 1 de vos Pokémon autant de marqueurs de dégât que vous obtenez de faces.",
				'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis 'Zahl' kommt. Entferne für jedes Mal, wenn die Münze 'Kopf' gezeigt hat, 1 Schadensmarke von 1 deiner Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flop",
				'fr-fr': "Flop",
				'de-de': "Plumps"
			},
			effect: {
				'en-us': "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) You may switch Lopunny with 1 of your Benched Pokémon.",
				'fr-fr': "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Vous pouvez échanger Lockpin avec 1 des Pokémon de votre Banc.",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Du kannst Schlapor gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "An extremely cautious Pokémon. It cloaks its body with its fluffy ear fur when it senses danger.",
		'fr-fr': "Un Pokémon extrêmement prudent. Il couvre son corps de ses oreilles pelucheuses en cas de danger."
	},

	thirdParty: {
		cardmarket: 277529,
		tcgplayer: 86823
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
