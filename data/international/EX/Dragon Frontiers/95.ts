import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Latias ex δ",
		'fr-fr': "Latias ex δ",
		'de-de': "Latias ex"
	},

	suffix: "ex",
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		380,
	],

	hp: 100,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Fellow Boost",
				'fr-fr': "Boost amical",
				'de-de': "Freundverstärkung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a basic Energy card from your hand to your Latias, Latias ex, Latios or Latios ex. If you do, your turn ends. This power can't be used if Latias ex is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez attacher une carte Énergie de base de votre main à votre Latias, Latias ex, Latios ou Latios ex. Votre tour est alors terminé. Ce pouvoir ne peut pas être utilisé si Latias ex est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Basis-Energiekarte von deiner Hand an Latias, Latias ex, Latios oder Latios ex anlegen. Wenn du das machst, ist dein Zug jetzt beendet. Diese Poké-Power kann nicht benutzt werden, wenn Latias ex von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Power Crush",
				'fr-fr': "Puissance écrasante",
				'de-de': "Kraftzermalmer"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Knocked Out by this attack, discard 2 Fire Energy attached to Latias ex.",
				'fr-fr': "Si le Pokémon Défenseur est mis K.O par cette attaque, défaussez 2 Énergies  attachées à Latias ex.",
				'de-de': "Wenn das Verteidigende Pokémon durch diesen Angriff kampfunfähig wird, lege 2 -Energien, die an Latias ex angelegt sind, auf den Ablagestapel."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277300
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
