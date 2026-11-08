import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Magnezone",
		'fr-fr': "Magnézone",
		'de-de': "Magnezone"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		462,
	],

	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Magneton",
		'fr-fr': "Magneton",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Magnetic Search",
				'fr-fr': "Recherche magnétique",
				'de-de': "Magnetsucher"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Lightning or Metal Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Magnezone is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck un Pokémon Lightning ou Metal. Montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. Ce pouvoir ne peut être utilisé si Magnézone est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach 1 - oder -Pokémon-Karte durchsuchen, sie deinem Gegner zeigen und auf die Hand nehmen. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Magnezone von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Speed Shot",
				'fr-fr': "Coup d'boost",
				'de-de': "Temposchuss"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon.",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crush Volt",
				'fr-fr': "Écras'volt",
				'de-de': "Zermalmstrom"
			},
			effect: {
				'en-us': "Discard an Energy attached to Magnezone.",
				'fr-fr': "Défaussez une Énergie attachée à Magnézone.",
				'de-de': "Lege 1 an Magnezone angelegte Energie auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278303,
		tcgplayer: 87114
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
