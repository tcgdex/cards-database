import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Torterra",
		'fr-fr': "Torterra",
		'de-de': "Chelterrar"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		389,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Grotle",
		'fr-fr': "Boskara",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Sunshine Song",
				'fr-fr': "Chanson solaire",
				'de-de': "Sonnengesang"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), when you play Torterra from your hand to evolve 1 of your Pokémon, you may choose as many of your Grass Pokémon in play as you like. For each Grass Pokémon you choose, search your deck for an Evolution card that evolves from that Pokémon and evolve it. Shuffle your deck afterward.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), lorsque vous jouez Torterra de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir autant de Pokémon Grass que vous avez en jeu que vous le voulez. Pour chaque Pokémon Grass que vous choisissez, cherchez dans votre deck une carte Évolution qui évolue de ce Pokémon et faites-le évoluer. Ensuite, mélangez votre deck.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du Chelterrar von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, eine beliebige Anzahl deiner -Pokémon im Spiel wählen. Für jedes -Pokémon, das du auf diese Weise gewählt hast, kannst du dein Deck nach einer Evolutionskarte, die sich aus dem gewählten Pokémon entwickelt, durchsuchen und es damit entwickeln. Mische dein Deck danach."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crash Impact",
				'fr-fr': "Cratère",
				'de-de': "Heftiger Zusammenstoß"
			},
			effect: {
				'en-us': "Torterra does 20 damage to itself. Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				'fr-fr': "Torterra s'inflige 20 dégâts. Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc, s'il en a.",
				'de-de': "Chelterrar fügt sich selbst 20 Schadenspunkte zu. Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 60,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Land Shake",
				'fr-fr': "Terre tremblante",
				'de-de': "Bebender Boden"
			},
			effect: {
				'en-us': "During your opponent's next turn, when your opponent puts a Basic Pokémon from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon.",
				'fr-fr': "Lors du prochain tour de votre adversaire, lorsque celui-ci place un Pokémon de base de sa main sur son Banc, placez 2 marqueurs de dégât sur ce Pokémon.",
				'de-de': "Wenn dein Gegner in seinem nächsten Zug ein Basis-Pokémon von seiner Hand auf seine Bank legt, lege 2 Schadensmarken auf dieses Pokémon."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 278309,
		tcgplayer: 89985
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
