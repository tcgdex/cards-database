import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [943],
	set: Set,

	name: {
		en: "Mabosstiff ex",
		fr: "Dogrino-ex",
		es: "Mabosstiff ex",
		it: "Mabosstiff-ex",
		pt: "Mabosstiff ex",
		de: "Mastifioso-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 260,
	types: ["Darkness"],
	evolveFrom: {
		en: "Maschiff",
		fr: "Grondogue",
		es: "Maschiff",
		it: "Maschiff",
		pt: "Maschiff",
		de: "Mobtiff"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Daunt",
			fr: "Découragement",
			es: "Arredrar",
			it: "Scoraggiare",
			pt: "Atemorizar",
			de: "Entmutigen"
		},

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do 50 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 50 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 50 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 50 danni in meno, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 50 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 50 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Proud Fangs",
			fr: "Crocs Fiers",
			es: "Colmillos Imponentes",
			it: "Zanne Fiere",
			pt: "Presas Orgulhosas",
			de: "Stattliche Fänge"
		},

		effect: {
			en: "If your Benched Pokémon have any damage counters on them, this attack does 120 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 120 puntos de daño más.",
			it: "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 120 danni in più.",
			pt: "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 3,
	regulationMark: "G",
	illustrator: "PLANETA Mochizuki"
}

export default card