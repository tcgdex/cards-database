import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [584],

	name: {
		en: "N's Vanilluxe",
		fr: "Sorbouboul de N",
		es: "Vanilluxe de N",
		'es-mx': "Vanilluxe de N",
		de: "Ns Gelatwino",
		it: "Vanilluxe di N",
		pt: "Vanilluxe do N"
	},

	illustrator: "imoniii",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Snow Coating",
			fr: "Couche de Neige",
			es: "Capa de Nieve",
			'es-mx': "Nevada Amontonada",
			de: "Schneeschicht",
			it: "Cumulo Nevoso",
			pt: "Camada de Neve"
		},

		effect: {
			en: "Double the number of damage counters on each of your opponent's Pokémon.",
			fr: "Doublez le nombre de marqueurs de dégâts sur chacun des Pokémon de votre adversaire.",
			es: "Dobla la cantidad de contadores de daño en cada uno de los Pokémon de tu rival.",
			'es-mx': "Duplica la cantidad de contadores de daño en cada uno de los Pokémon de tu rival.",
			de: "Verdopple die Anzahl der Schadensmarken auf jedem Pokémon deines Gegners.",
			it: "Raddoppia il numero di segnalini danno su ciascuno dei Pokémon del tuo avversario.",
			pt: "Duplique o número de contadores de dano em cada um dos Pokémon do seu oponente."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Blizzard",
			fr: "Blizzard",
			es: "Ventisca",
			'es-mx': "Ventisca",
			de: "Blizzard",
			it: "Bora",
			pt: "Nevasca"
		},

		effect: {
			en: "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675863,
		cardmarket: 869662
	}
}

export default card