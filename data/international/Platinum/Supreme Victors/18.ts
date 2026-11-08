import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Camerupt",
		'fr-fr': "Camerupt",
		'de-de': "Camerupt"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [323],

	hp: 120,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Numel",
		'fr-fr': "Chamallot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Moving Fire",
				'fr-fr': "Feu bougeant",
				'de-de': "Bewegtes Feuer"
			},
			effect: {
				'en-us': "You may move a Fire Energy card attached to 1 of your Benched Pokémon to Camerupt.",
				'fr-fr': "Vous pouvez déplacer une carte Énergie Fire attachée à 1 de vos Pokémon de Banc sur Camerupt.",
				'de-de': "Du kannst 1 -Energiekarte, die an 1 Pokémon auf deiner Bank angelegt ist, an Camerupt anlegen."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Volcanic Crash",
				'fr-fr': "Écrasement volcanique",
				'de-de': "Vulkanzusammenbruch"
			},
			effect: {
				'en-us': "Flip 3 coins. For each tails, discard the top card of your deck. Ignore this effect if your opponent has any Water Pokémon in play.",
				'fr-fr': "Lancez 3 pièces. Pour chaque pile, défaussez la carte du dessus de votre deck. Ignorez cet effet si votre adversaire possède des Pokémon Water en jeu.",
				'de-de': "Wirf 3 Münzen. Für jedes Mal, wenn die Münze \"Zahl\" gezeigt hat, lege die oberste Karte deines Decks auf deinen Ablagestapel. Dieser Effekt wirkt nur, wenn dein Gegner keine -Pokémon im Spiel hat."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],
	retreat: 4,

	description: {
		'en-us': "It has volcanoes on its back. If magma builds up in its body, it shudders, then erupts violently."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278709,
				tcgplayer: 84094,
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278709,
				tcgplayer: 84094
			}
		},
	],

}

export default card
