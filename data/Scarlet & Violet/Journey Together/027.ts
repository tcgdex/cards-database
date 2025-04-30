import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "N's Darmanitan",
		fr: "Darumacho de N",
		es: "Darmanitan de N",
		de: "Ns Flampivian",
		it: "Darmanitan di N",
		pt: "Darmanitan do N",
		'es-mx': "Darmanitan de N"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Back Draft",
			fr: "Contre-Explosion",
			es: "Deflagración",
			de: "Backdraft",
			it: "Vampata di Ritorno",
			pt: "Ignição Explosiva",
			'es-mx': "Deflagración"
		},

		effect: {
			en: "This attack does 30 damage for each Basic Energy card in your opponent's discard pile.",
			fr: "Cette attaque inflige 30 dégâts pour chaque carte Énergie de base dans la pile de défausse de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño por cada carta de Energía Básica en la pila de descartes de tu rival.",
			de: "Diese Attacke fügt für jede Basis-Energiekarte im Ablagestapel deines Gegners 30 Schadenspunkte zu.",
			it: "Questo attacco infligge 30 danni per ogni carta Energia base nella pila degli scarti del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano para cada carta de Energia Básica na pilha de descarte do seu oponente.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada carta de Energía Básica en la pila de descartes de tu rival."
		},

		damage: "30×"
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Flamebody Cannon",
			fr: "Canon Corps Enflammé",
			es: "Cañón Flamígero",
			de: "Flammenkörperkanone",
			it: "Cannone Corpofiamma",
			pt: "Canhão de Corpo Flamejante",
			'es-mx': "Cañón Llameante"
		},

		effect: {
			en: "Discard all Energy from this Pokémon, and this attack also does 90 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez toutes les Énergies de ce Pokémon. Cette attaque inflige aussi 90 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta todas las Energías de este Pokémon, y este ataque también hace 90 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 90 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Scarta tutte le Energie da questo Pokémon e questo attacco infligge anche 90 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte todas as Energias deste Pokémon, e este ataque também causa 90 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Descarta todas las Energías de este Pokémon, y este ataque también hace 90 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 90
	}],

	retreat: 3,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
