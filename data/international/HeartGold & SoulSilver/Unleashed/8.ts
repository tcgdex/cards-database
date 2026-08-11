import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Shaymin",
		'fr-fr': "Shaymin",
		'de-de': "Shaymin"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [492],

	hp: 70,

	types: [
		"Grass"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Celebration Wind",
				'fr-fr': "Vent de fête",
				'de-de': "Feierwind"
			},
			effect: {
				'en-us': "Once during your turn, when you put Shaymin from your hand onto your Bench, you may move as many Energy cards attached to your Pokémon as you like to any of your other Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour, lorsque vous placez Shaymin de votre main sur votre Banc, vous pouvez prendre une ou plusieurs cartes Énergie attachées à l’un de vos Pokémon et les attacher à un autre Pokémon.",
				'de-de': "Einmal während deines Zuges, wenn du Shaymin von deiner Hand auf deine Bank legst, kannst du beliebig viele Energiekarten, die an deine Pokémon angelegt sind, in beliebiger Verteilung an deine anderen Pokémon anlegen."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Energy Bloom",
				'fr-fr': "Énergie florissante",
				'de-de': "Energieschwall"
			},
			effect: {
				'en-us': "Remove 3 damage counters from each of your Pokémon that has any Energy attached to it.",
				'fr-fr': "Retirez 3 marqueurs de dégât à chacun de vos Pokémon ayant une ou plusieurs cartes Énergie.",
				'de-de': "Entferne 3 Schadensmarken von jedem deiner Pokémon, an dem mindestens 1 Energie angelegt ist."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The blooming of Gracidea flowers confers the power of flight upon it. Feelings of gratitude are the message it delivers."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89109,
				cardmarket: 279164
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89109,
				cardmarket: 279164
			}
		},
		{
			type: "holo",
			stamp: ["zachary-bokhari"],
			thirdParty: {
				cardmarket: 867994,
				tcgplayer: 480625,
			}
		},
		{
			type: "holo",
			stamp: ["igor-costa"],
			thirdParty: {
				cardmarket: 867990,
				tcgplayer: 480626
			}
		}
	],

}

export default card
