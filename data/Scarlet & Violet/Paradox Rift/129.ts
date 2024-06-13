import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [632],
	set: Set,

	name: {
		en: "Durant",
		fr: "Fermite",
		es: "Durant",
		it: "Durant",
		pt: "Durant",
		de: "Fermicula"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Swarming Rage",
			fr: "Armada Furieuse",
			es: "Colonia Furiosa",
			it: "Ira Brulicante",
			pt: "Formigueiro Feroz",
			de: "Wutschwarm"
		},

		effect: {
			en: "This attack does 20 damage for each damage counter on all of your Durant.",
			fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé sur vos Fermite.",
			es: "Este ataque hace 20 puntos de daño por cada contador de daño en cada uno de tus Durant.",
			it: "Questo attacco infligge 20 danni per ogni segnalino danno presente sui tuoi Durant.",
			pt: "Este ataque causa 20 pontos de dano para cada contador de dano em todos os seus Durant.",
			de: "Diese Attacke fügt für jede Schadensmarke auf allen deinen Fermicula 20 Schadenspunkte zu."
		},

		damage: "20×"
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Hard Scissors",
			fr: "Cisailles",
			es: "Tijeras Resistentes",
			it: "Forbici Dure",
			pt: "Tesouras Resistentes",
			de: "Harte Scheren"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card