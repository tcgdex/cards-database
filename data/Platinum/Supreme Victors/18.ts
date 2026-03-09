import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Camerupt",
		fr: "Camerupt",
		de: "Camerupt"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		323,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Numel",
		fr: "Chamallot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moving Fire",
				fr: "Feu bougeant",
				de: "Bewegtes Feuer"
			},
			effect: {
				en: "You may move a Fire Energy card attached to 1 of your Benched Pokémon to Camerupt.",
				fr: "Vous pouvez déplacer une carte Énergie Fire attachée à 1 de vos Pokémon de Banc sur Camerupt.",
				de: "Du kannst 1 -Energiekarte, die an 1 Pokémon auf deiner Bank angelegt ist, an Camerupt anlegen."
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
				en: "Volcanic Crash",
				fr: "Écrasement volcanique",
				de: "Vulkanzusammenbruch"
			},
			effect: {
				en: "Flip 3 coins. For each tails, discard the top card of your deck. Ignore this effect if your opponent has any Water Pokémon in play.",
				fr: "Lancez 3 pièces. Pour chaque pile, défaussez la carte du dessus de votre deck. Ignorez cet effet si votre adversaire possède des Pokémon Water en jeu.",
				de: "Wirf 3 Münzen. Für jedes Mal, wenn die Münze \"Zahl\" gezeigt hat, lege die oberste Karte deines Decks auf deinen Ablagestapel. Dieser Effekt wirkt nur, wenn dein Gegner keine -Pokémon im Spiel hat."
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

	thirdParty: {
		cardmarket: 278709
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
