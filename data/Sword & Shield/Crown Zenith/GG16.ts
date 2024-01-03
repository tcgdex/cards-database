import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Absol",
		fr: "Absol",
		es: "Absol",
		it: "Absol",
		pt: "Absol",
		de: "Absol"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Swirling Disaster",
			fr: "Désastre Tourbillonnant",
			es: "Catástrofe en Espiral",
			it: "Turbine Catastrofico",
			pt: "Turbilhão do Desastre",
			de: "Wirbelndes Desaster"
		},

		effect: {
			en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 10 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Claw Rend",
			fr: "Déchirure",
			es: "Quebrantar",
			it: "Artiglilaceranti",
			pt: "Lacerar",
			de: "Klauenreißer"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 70 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 70 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 70 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 70 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 70 pontos de dano a mais.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card