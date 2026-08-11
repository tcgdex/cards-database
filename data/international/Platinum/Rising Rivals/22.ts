import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Gastrodon West Sea",
		'fr-fr': "Tritosor Mer Occident Niv. 50",
		'de-de': "Gastrodon Westliches Meer"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [423],

	hp: 110,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Shellos West Sea",
		'fr-fr': "Sancoki Mer Occident"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Muddy Bomb",
				'fr-fr': "Bombe boueuse",
				'de-de': "Lehmbombe"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon and 10 damage to each of your opponent's other Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts et 10 dégâts à chacun des autres Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte und allen anderen Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Raging Sea",
				'fr-fr': "Mer enragée",
				'de-de': "Tosende See"
			},
			effect: {
				'en-us': "Does 60 damage plus 10 more damage for each of your Benched Pokémon that has any damage counters on it.",
				'fr-fr': "Inflige 60 dégâts plus 10 dégâts supplémentaires à chacun de vos Pokémon de Banc possédant des marqueurs de dégât.",
				'de-de': "Dieser Angriff fügt 60 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Pokémon auf deiner Bank, auf dem mindestens 1 Schadensmarke liegt, zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278596,
				tcgplayer: 85660
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278596,
				tcgplayer: 85660
			}
		},
	],

}

export default card
