import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [145],
	set: Set,

	name: {
		fr: "Électhor-ex",
		en: "Zapdos ex",
		es: "Zapdos ex",
		it: "Zapdos-ex",
		pt: "Zapdos ex",
		de: "Zapdos-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Flottaison Voltaïque",
			en: "Voltaic Float",
			es: "Flotación Voltaica",
			it: "Salvagente Voltaico",
			pt: "Flutuador Voltaico",
			de: "Voltfloß"
		},

		effect: {
			fr: "Si au moins une Énergie Lightning est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			en: "If this Pokémon has any Lightning Energy attached, it has no Retreat Cost.",
			es: "Si este Pokémon tiene alguna Energía Lightning unida, no tiene ningún Coste de Retirada.",
			it: "Se questo Pokémon ha delle Energie Lightning assegnate, non ha costo di ritirata.",
			pt: "Se este Pokémon tiver alguma Energia Lightning ligada a ele, não terá custo de Recuo.",
			de: "Wenn an dieses Pokémon mindestens 1 Lightning-Energie angelegt ist, hat es keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			fr: "Éclair Démultiplié",
			en: "Multishot Lightning",
			es: "Relámpago Multidisparo",
			it: "Fulmine Multicolpo",
			pt: "Relâmpagos Múltiplos",
			de: "Multischussblitz"
		},

		effect: {
			fr: "Cette attaque inflige aussi 90 dégâts à l'un des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack also does 90 damage to 1 of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque también hace 90 puntos de daño a uno de los Pokémon en Banca de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 90 danni a uno dei Pokémon nella panchina del tuo avversario che ha dei segnalini danno. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 90 pontos de dano a 1 dos Pokémon no Banco do seu oponente que tiver algum contador de dano nele. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners, auf dem mindestens 1 Schadensmarke liegt, 90 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card