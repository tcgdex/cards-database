import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Blissey",
		'fr-fr': "Leuphorie",
		'de-de': "Heiteira"
	},

	illustrator: "Noriko Hotta",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [242],

	hp: 130,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Blissful Nurse",
				'fr-fr': "Infirmière divine",
				'de-de': "Pflegesegen"
			},
			effect: {
				'en-us': "Once during your turn, when you play Blissey from your hand to evolve 1 of your Pokémon, you may remove all damage counters from all of your Pokémon. If you do, discard all Energy attached to those Pokémon that had any damage counters on them.",
				'fr-fr': "Une seule fois pendant votre tour, lorsque vous jouez Leuphorie dans votre main pour faire évoluer l’un de vos Pokémon, vous pouvez retirer tous les marqueurs de dégâts de tous vos Pokémon. Dans ce cas, défaussez-vous de toutes les énergies attachées aux Pokémon qui avaient des marqueurs de dégâts.",
				'de-de': "Einmal während deines Zuges, wenn du Heiteira von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du alle Schadensmarken von all deinen Pokémon entfernen. Wenn du das machst, lege alle Energien, die an diese Pokémon angelegt sind, auf deinen Ablagestapel."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strength",
				'fr-fr': "Force",
				'de-de': "Stärke"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	suffix: "Prime",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83924,
				cardmarket: 279008
			}
		},
		{
			type: "normal",
			stamp: ['ross-cawthorn'],
			thirdParty: {
				cardmarket: 868165,
				tcgplayer: 480357,
			}
		},
	],

}

export default card
