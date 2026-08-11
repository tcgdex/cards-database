import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Omanyte",
		'fr-fr': "Amonita",
		'de-de': "Amonitas"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		138,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Helix Fossil",
		'fr-fr': "Fossile Nautile",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Call Up",
				'fr-fr': "Mobilisation",
				'de-de': "Erwecken"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, search your discard pile for Helix Fossil, Dome Fossil, or Old Amber and put it onto your Bench. This power can't be used if Omanyte is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez Fossile Nautile, Fossile Dôme ou Vieil Ambre dans votre deck et placez-la sur votre Banc. Ce pouvoir ne peut pas être utilisé si Amonita est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen. Bei \"Kopf\" durchsuche dein Deck nach 1 Helixfossil-, Domfossil- oder Altbernstein-Karte und lege sie auf deine Bank. Mische dein Deck danach. Diese Poké-Power kannst nicht benutzt werden, wenn Amonitas von einem Speziellen Zustand betroffen ist."
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
				'en-us': "Wash Over",
				'fr-fr': "Gros lavage",
				'de-de': "Überfluten"
			},
			effect: {
				'en-us': "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A Pokémon that was resurrected from a fossil using modern science. It swam in ancient seas.",
	},

	thirdParty: {
		cardmarket: 278118,
		tcgplayer: 87860
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
