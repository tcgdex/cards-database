import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Reshiram",
		'fr-fr': "Reshiram",
		'es-es': "Reshiram",
		'it-it': "Reshiram",
		'pt-br': "Reshiram",
		'de-de': "Reshiram"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",
	illustrator: "Aya Kusube",

	attacks: [{
		name: {
			'en-us': "Scorching Wind",
			'fr-fr': "Vent Brûlant",
			'es-es': "Viento Abrasador",
			'it-it': "Vento Ustionante",
			'pt-br': "Vento Escaldante",
			'de-de': "Versengender Wind"
		},

		effect: {
			'en-us': "This attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 20 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Black Flame",
			'fr-fr': "Flamme Noire",
			'es-es': "Llama Negra",
			'it-it': "Fiamma Nera",
			'pt-br': "Chama Negra",
			'de-de': "Schwarze Flamme"
		},

		effect: {
			'en-us': "If Zekrom is on your Bench, this attack does 80 more damage.",
			'fr-fr': "Si Zekrom est sur votre Banc, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si Zekrom está en tu Banca, este ataque hace 80 puntos de daño más.",
			'it-it': "Se Zekrom è nella tua panchina, questo attacco infligge 80 danni in più.",
			'pt-br': "Se Zekrom estiver no seu Banco, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn sich Zekrom auf deiner Bank befindet, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	description: {
		'en-us': "When Reshiram's tail flares, the heat energy moves the atmosphere and changes the world's weather."
	},

	dexId: [643],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576747,
				tcgplayer: 250301
			}
		},
	],
}

export default card
