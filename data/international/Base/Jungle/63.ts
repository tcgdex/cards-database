import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Venonat",
		'fr-fr': "Mimitoss",
		'de-de': "Bluzuk"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		48,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Stun Spore",
				'fr-fr': "Para-spore",
				'de-de': "Stachelspore"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leech Life",
				'fr-fr': "Vampirisme",
				'de-de': "Blutsauger"
			},
			effect: {
				'en-us': "Remove a number of damage counters from Venonat equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance).",
				'fr-fr': "Retirez de Mimitoss un nombre de marqueurs de dégâts égal aux dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance). Si Mimitoss a moins de marqueurs de 10 dégâts, retirez-les tous.",
				'de-de': "Entferne von Bluzuk Schadensmarken in Höhe des Schadens, der dem verteidigenden Pokémon durch diesen Angriff zugefügt wurden (nachdem Schwäche und Reistenz abgerechnet wurden). Falls Bluzuk weniger Schadensmarken als diese Anzahl hat, entferne sie alle."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.",
		'fr-fr': "Il vit à l'ombre des grands arbres où il mange des insectes. Il est attiré par la lumière."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273860,
				tcgplayer: 45166
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273860,
				tcgplayer: 45166
			}
		}
	],
}

export default card
