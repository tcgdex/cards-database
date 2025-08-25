import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Lunala",
		fr: "Lunala",
		es: "Lunala",
		it: "Lunala",
		pt: "Lunala",
		de: "Lunala"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	types: ["Psychic"],
	illustrator: "kirisAki",
	hp: 160,
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Lunar Pain",
			fr: "Douleur Lunaire",
			es: "Dolor Lunar",
			it: "Supplizio Lunare",
			pt: "Dor Lunar",
			de: "Mondschmerz"
		},

		effect: {
			en: "Double the number of damage counters on each of your opponent's Pokémon.",
			fr: "Doublez le nombre de marqueurs de dégâts sur chacun des Pokémon de votre adversaire.",
			es: "Dobla la cantidad de contadores de daño en cada uno de los Pokémon de tu rival.",
			it: "Raddoppia il numero di segnalini danno su ciascuno dei Pokémon del tuo avversario.",
			pt: "Duplique o número de contadores de dano em cada um dos Pokémon do seu oponente.",
			de: "Verdopple die Anzahl der Schadensmarken auf jedem Pokémon deines Gegners."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Psychic Shot",
			fr: "Attaque Psy",
			es: "Disparo Psíquico",
			it: "Sparo Psichico",
			pt: "Arremesso Psíquico",
			de: "Psychogeschoss"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
		en: "Cosmoem",
		fr: "Cosmovum",
		es: "Cosmoem",
		it: "Cosmoem",
		pt: "Cosmoem",
		de: "Cosmovum"
	},

	regulationMark: "E",

	description: {
		en: "It sometimes summons unknown powers and life-forms here to this world from holes that lead to other worlds."
	},

	dexId: [792],

	thirdParty: {
		cardmarket: 576760,
		tcgplayer: 250312
	}
}

export default card
