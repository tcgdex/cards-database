import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Crobat δ",
		'fr-fr': "Nostenfer δ",
		'de-de': "Iksbat"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		169,
	],

	hp: 90,

	types: [
		"Grass",
		"Metal",
	],

	evolveFrom: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Radar Jam",
				'fr-fr': "Transmission brouillée",
				'de-de': "Radarstörung"
			},
			effect: {
				'en-us': "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de cartes Dresseur (cartes Supporter exceptées) de sa main lors du prochain tour de votre adversaire.",
				'de-de': "Im nächsten Zug deines Gegners kann dein Gegner keine Trainerkarten (außer Unterstützer-Karten) von der Hand spielen."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Grass",
				"Metal",
			],
			name: {
				'en-us': "Target Attack",
				'fr-fr': "Attaque ciblée",
				'de-de': "Gezielter Angriff"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. If that Pokémon already has damage counters on it, this attack does 60 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. Si ce Pokémon possède déjà des marqeurs de dégât, cette attaque inflige 60 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle ein Pokémon deines Gegners aus. Dieser Angriff fügt dem gewählten Pokémon 40 Schadenspunkte zu. Wenn auf diesem Pokémon schon mindestens eine Schadensmarke liegt, fügt dieser Angriff 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 0,

	thirdParty: {
		cardmarket: 276765
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
