import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Lunala",
		'fr-fr': "Lunala",
		'es-es': "Lunala",
		'it-it': "Lunala",
		'pt-br': "Lunala",
		'de-de': "Lunala"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	types: ["Psychic"],
	illustrator: "kirisAki",
	hp: 160,
	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Lunar Pain",
			'fr-fr': "Douleur Lunaire",
			'es-es': "Dolor Lunar",
			'it-it': "Supplizio Lunare",
			'pt-br': "Dor Lunar",
			'de-de': "Mondschmerz"
		},

		effect: {
			'en-us': "Double the number of damage counters on each of your opponent's Pokémon.",
			'fr-fr': "Doublez le nombre de marqueurs de dégâts sur chacun des Pokémon de votre adversaire.",
			'es-es': "Dobla la cantidad de contadores de daño en cada uno de los Pokémon de tu rival.",
			'it-it': "Raddoppia il numero di segnalini danno su ciascuno dei Pokémon del tuo avversario.",
			'pt-br': "Duplique o número de contadores de dano em cada um dos Pokémon do seu oponente.",
			'de-de': "Verdopple die Anzahl der Schadensmarken auf jedem Pokémon deines Gegners."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Psychic Shot",
			'fr-fr': "Attaque Psy",
			'es-es': "Disparo Psíquico",
			'it-it': "Sparo Psichico",
			'pt-br': "Arremesso Psíquico",
			'de-de': "Psychogeschoss"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 130,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	evolveFrom: {
		'en-us': "Cosmoem",
		'fr-fr': "Cosmovum",
		'es-es': "Cosmoem",
		'it-it': "Cosmoem",
		'pt-br': "Cosmoem",
		'de-de': "Cosmovum"
	},

	regulationMark: "E",

	description: {
		'en-us': "It sometimes summons unknown powers and life-forms here to this world from holes that lead to other worlds."
	},

	dexId: [792],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576760,
				tcgplayer: 250312
			}
		},
	],
}

export default card
