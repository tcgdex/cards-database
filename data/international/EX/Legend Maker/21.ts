import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'de-de': "Magmar"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Stages of Evolution",
				'fr-fr': "Niveaux d'Évolution",
				'de-de': "Stufen der Evolution"
			},
			effect: {
				'en-us': "As long as Magmar is an Evolved Pokémon, all Energy attached to Magmar are Fire Energy instead of their usual types.",
				'fr-fr': "Tant que Magmar est un Pokémon Évolué, toutes les Énergies qui lui sont attachées sont des Énergies  au lieu de leur type habituel.",
				'de-de': "Solange Magmar ein entwickeltes Pokémon ist, zählen alle Energiekarten, die an Magmar angelegt sind, als -Energiekarten anstelle ihres normalen Typs."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Linear Attack",
				'fr-fr': "Attaque linéaire",
				'de-de': "Linearer Angriff"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewähltem Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Burning Sensation",
				'fr-fr': "Sensation brûlante",
				'de-de': "Brennendes Gefühl"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Burned.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Wenn auf dem Verteidigendem Pokémon bereits eine Schadensmarke liegt, ist es jetzt verbrannt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276898,
		tcgplayer: 87046
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
