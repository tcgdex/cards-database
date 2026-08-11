import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [845],
	set: Set,

	name: {
		'fr-fr': "Nigosier",
		'en-us': "Cramorant",
		'es-es': "Cramorant",
		'it-it': "Cramorant",
		'pt-br': "Cramorant",
		'de-de': "Urgl"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	attacks: [{
		name: {
			'fr-fr': "Tir Projeté",
			'en-us': "Spit-Out Shot",
			'es-es': "Disparo Escupitajo",
			'it-it': "Lanciosputo",
			'pt-br': "Cuspido e Disparado",
			'de-de': "Ausspuckschuss"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 50 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "This hungry Pokémon swallows Arrokuda whole. Occasionally, it makes a mistake and tries to swallow a Pokémon other than its preferred prey."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539163,
				tcgplayer: 232438
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539163,
				tcgplayer: 232438
			}
		},
	],
}

export default card
