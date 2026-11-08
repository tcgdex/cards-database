import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Jynx",
		'fr-fr': "Lippoutou",
		'de-de': "Rossana"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		124,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Stages of Evolution",
				'fr-fr': "Niveaux d'Évolution",
				'de-de': "Stages of Evolution"
			},
			effect: {
				'en-us': "As long as Jynx is an Evolved Pokémon, prevent all effects of opponent's attacks, except damage, done to Jynx, and Jynx has no Weakness.",
				'fr-fr': "Tant que Lippoutou est un Pokémon Évolué, prévenez tous les effets d'attaques de votre adversaire, dégâts exclus, infligés à Lippoutou. Lippoutou ne possède pas de Faiblesse.",
				'de-de': "As long as Jynx is an Evolved Pokémon, prevent all effects of opponent's attacks, except damage, done to Jynx, and Jynx has no Weakness."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Freeze Light",
				'fr-fr': "Lumière gelante",
				'de-de': "Freeze Light"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Burned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Burned."
			},

		},
		{
			cost: [
				"Water",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Pure Power",
				'fr-fr': "Force pure",
				'de-de': "Pure Power"
			},
			effect: {
				'en-us': "Put 4 damage counters on your opponent's Pokémon in any way you like.",
				'fr-fr': "Placez 4 marqueurs de dégât sur les Pokémon de votre adversaire de la façon que vous voulez.",
				'de-de': "Put 4 damage counters on your opponent's Pokémon in any way you like."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86375,
				cardmarket: 276674
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86375,
				cardmarket: 276674
			},
		}
	],
}

export default card
