import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Dusknoir",
		'fr-fr': "Noctunoir",
		'de-de': "Zwirrfinst"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		477,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Dusclops",
		'fr-fr': "Teraclope",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Shadow Command",
				'fr-fr': "Pouvoir ombre",
				'de-de': "Schattenbefehl"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may draw 2 cards. If you have 7 or more cards in your hand, discard a number of cards until you have 6 cards in your hand. Then, put 2 damage counters on Dusknoir. This power can't be used if Dusknoir is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez piocher 2 cartes. Si vous avez au moins 7 cartes en main, défaussez des cartes jusqu'à ce que vous n'ayez plus que 6 cartes en main. Ensuite, placez 2 marqueurs de dégât sur Noctunoir. Ce pouvoir ne peut être utilisé que si Noctunoir est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges(vor deinem Angriff) kannst du 2 Karten ziehen. Wenn du 7 oder mehr Karten auf deiner Hand hast, lege so viele Karten auf deinen Ablagestapel, bis du nur noch 6 Karten auf der Hand hast. Danach lege 2 Schadensmarken auf Zwirrfinst."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Damage Even",
				'fr-fr': "Dégâts équilibrés",
				'de-de': "Schadensabgleich"
			},
			effect: {
				'en-us': "Count the number of damage counters on Dusknoir. Put that many damage counters on 1 of your opponent's Pokémon.",
				'fr-fr': "Comptabilisez le nombre de marqueurs de dégât sur Noctunoir. Placez autant de marqueurs de dégât sur 1 des Pokémon de votre adversaire.",
				'de-de': "Zähle die Anzahl der Schadensmarken auf Zwirrfinst. Lege die gleiche Anzahl Schadensmarken auf 1 Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Night Spin",
				'fr-fr': "Tour nocturne",
				'de-de': "Nachtdreher"
			},
			effect: {
				'en-us': "Prevent all effects of an attack, including damage, done to Dusknoir by your opponent's Pokémon that has 2 or less Energy attached to it during your opponent's next turn.",
				'fr-fr': "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Noctunoir par les Pokémon de votre adversaire possédant un maximum de 2 Énergies lors du prochain tour de votre adversaire.",
				'de-de': "Verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Zwirrfinst von Pokémon deines Gegners, an denen 2 oder weniger Energien angelegt sind, zugefügt würden."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278299,
		tcgplayer: 85037
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
