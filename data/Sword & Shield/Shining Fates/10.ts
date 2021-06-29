import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Sinistrail VMAX",
		en: "Dhelmise VMAX",
		es: "Dhelmise VMAX",
		it: "Dhelmise VMAX",
		pt: "Dhelmise VMAX",
		de: "Moruda VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],

	evolveFrom: {
		fr: "Sinistrail-V",
		en: "Dhelmise V"
	},

	attacks: [{
		name: {
			fr: "Chaîne Déchaînée",
			en: "Swinging Chain",
			es: "Cadena Oscilante",
			it: "Oscillacatena",
			pt: "Corrente Giratória",
			de: "Schwingende Kette"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de votre adversaire pour chaque Énergie Grass attachée à ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack does 30 damage to 1 of your opponent’s Pokémon for each Grass Energy attached to this Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival por cada Energía Grass unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario per ogni Energia Grass assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia Grass ligada a este Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Grass-Energie 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Grass"]
	}, {
		name: {
			fr: "Ancromax",
			en: "Max Anchor",
			es: "Maxiancla",
			it: "Dynancora",
			pt: "Âncora Max",
			de: "Dyna-Anker"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Ancromax.",
			en: "During your next turn, this Pokémon can’t use Max Anchor.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Maxiancla.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Dynancora.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Âncora Max.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Dyna-Anker nicht einsetzen."
		},

		damage: 240,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card