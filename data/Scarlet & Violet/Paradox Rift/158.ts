import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Jugulis",
		fr: "Têtes-de-Fer",
		es: "Ferrocuello",
		it: "Colloferreo",
		pt: "Jugulares Férreas",
		de: "Eisenhals"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Homing Headbutt",
			fr: "Coup d'Boule Autoguidé",
			es: "Cabezazo Teledirigido",
			it: "Cozzata Mirata",
			pt: "Cabeçada Teleguiada",
			de: "Heimsuchende Kopfnuss"
		},

		effect: {
			en: "This attack does 50 damage to 3 of your opponent's Pokémon that have any damage counters on them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à 3 des Pokémon de votre adversaire ayant au moins un marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 50 puntos de daño a 3 de los Pokémon de tu rival que tengan algún contador de daño sobre ellos. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 50 danni a tre dei Pokémon del tuo avversario che hanno dei segnalini danno. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 50 pontos de dano a 3 dos Pokémon do seu oponente que têm algum contador de dano neles. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt 3 Pokémon deines Gegners, auf denen mindestens 1 Schadensmarke liegt, 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Baryon Beam",
			fr: "Rayon Baryonique",
			es: "Rayo Bariónico",
			it: "Raggio Barionico",
			pt: "Feixe de Bárion",
			de: "Baryonenstrahl"
		},

		effect: {
			en: "If this Pokémon has a Future Booster Energy Capsule attached, this attack can be used for ColorlessColorlessColorless.",
			fr: "Si Capsule Énergie Booster Temps Futur est attachée à ce Pokémon, cette attaque peut être utilisée pour ColorlessColorlessColorless.",
			es: "Si este Pokémon tiene un Tanque de Energía Potenciadora del Futuro unido, este ataque se puede usar por ColorlessColorlessColorless.",
			it: "Se questo Pokémon ha una Capsula energetica Tempo Futuro assegnata, il costo di questo attacco è ColorlessColorlessColorless.",
			pt: "Se este Pokémon tiver uma Cápsula Energética de Melhoria Futurista ligada a ele, este ataque poderá ser usado por ColorlessColorlessColorless.",
			de: "Wenn an dieses Pokémon 1 Energiekapsel aus der Zukunft angelegt ist, kann diese Attacke für ColorlessColorlessColorless eingesetzt werden."
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card