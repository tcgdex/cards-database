import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [530],
	set: Set,

	name: {
		en: "Excadrill ex",
		fr: "Minotaupe-ex",
		de: "Stalobor-ex",
		it: "Excadrill-ex",
		pt: "Excadrill ex",
		es: "Excadrill ex",
		'es-mx': "Excadrill ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Piercing Drill",
			fr: "Transperceuse",
			de: "Stichbohrer",
			it: "Punta Perforante",
			pt: "Broca Pervasiva",
			es: "Turbotaladro",
			'es-mx': "Turbotaladro"
		},

		effect: {
			en: "This attack also does 60 damage to 1 of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 60 dégâts à l'un des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners, auf dem mindestens 1 Schadensmarke liegt, 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge anche 60 danni a uno dei Pokémon nella panchina del tuo avversario che ha dei segnalini danno. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 60 pontos de dano a 1 dos Pokémon no Banco do seu oponente que tiver algum contador de dano nele. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			es: "Este ataque también hace 60 puntos de daño a uno de los Pokémon en Banca de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque también hace 60 puntos de daño a 1 de los Pokémon en Banca de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 60
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Rock Tumble",
			fr: "Roule-Pierre",
			de: "Rollende Felsen",
			it: "Tiramassi",
			pt: "Desabamento de Pedras",
			es: "Avalancha de Rocas",
			'es-mx': "Deslave Rocoso"
		},

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			'es-mx': "El daño de este ataque no se ve afectado por Resistencia."
		},

		damage: 200
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card