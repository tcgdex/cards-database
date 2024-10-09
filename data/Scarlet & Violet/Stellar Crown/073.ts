import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Marowak",
		fr: "Ossatueur",
		es: "Marowak",
		it: "Marowak",
		pt: "Marowak",
		de: "Knogga"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Growl",
			fr: "Rugissement",
			es: "Gruñido",
			it: "Ruggito",
			pt: "Rosnadura",
			de: "Heuler"
		},

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do 40 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 40 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 40 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 40 danni in meno, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 40 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 40 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bone Vengeance",
			fr: "Os Vengeur",
			es: "Venganza Ósea",
			it: "Ossorivalsa",
			pt: "Vingança Óssea",
			de: "Knochenvergeltung"
		},

		effect: {
			en: "If any of your Benched Cubone have any damage counters on them, this attack does 120 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur au moins l'un de vos Osselait de Banc, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si alguno de tus Cubone en Banca tiene algún contador de daño sobre él, este ataque hace 120 puntos de daño más.",
			it: "Se uno qualsiasi dei tuoi Cubone in panchina ha dei segnalini danno, questo attacco infligge 120 danni in più.",
			pt: "Se algum dos seus Cubone no Banco tiver algum contador de dano nele, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn auf mindestens 1 Tragosso auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card