import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Forretress",
		'fr-fr': "Foretress",
		'de-de': "Forstellka"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [205],

	hp: 80,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Pineco",
		'fr-fr': "Pomdepik"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Spike Spread",
				'fr-fr': "Volée de piques",
				'de-de': "Stachelstreuung"
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Gyro Ball",
				'fr-fr': "Gyroballe",
				'de-de': "Gyroball"
			},
			effect: {
				'en-us': "You may switch Forretress with 1 of your Benched Pokémon. If you do, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger Foretress avec un des Pokémon de votre Banc. Dans ce cas, votre adversaire échange le Pokémon Défenseur avec l’un des Pokémon de son Banc.",
				'de-de': "Du darfst Forstellka gegen 1 Pokémon auf deiner Bank austauschen. Wenn du das machst, tauscht dein Gegner das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It remains immovably rooted to its tree. It scatters pieces of its hard shell to drive its enemies away."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279266,
				tcgplayer: 85552
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279266,
				tcgplayer: 85552
			}
		}
	],

}

export default card
