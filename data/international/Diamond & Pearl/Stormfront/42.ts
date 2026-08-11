import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Magneton",
		'fr-fr': "Magneton",
		'de-de': "Magneton"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magneti",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnetic Resonance",
				'fr-fr': "Résonance magnétique",
				'de-de': "Magnetische Resonanz"
			},
			effect: {
				'en-us': "If you have a Stadium card in play, this attack does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Si vous avez une carte Stade en jeu, cette attaque inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wenn du 1 Stadion-Karte im Spiel hast, fügt dieser Angriff 2 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnetic Release",
				'fr-fr': "Relâche magnétique",
				'de-de': "Magnetfreisetzung"
			},
			effect: {
				'en-us': "Does 40 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
				'de-de': "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede Energie, die am Verteidigenden Pokémon angelegt ist, zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is actually three Magnemite linked by magnetism. A group can set off a magnetic storm.",
		'fr-fr': "Il est formé de trois Magnéti liés par magnétisme. En groupe, ils déclenchent un orage magnétique"
	},

	thirdParty: {
		cardmarket: 278340,
		tcgplayer: 87108
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
