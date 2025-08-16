import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [437],
	set: Set,

	name: {
		en: "Bronzong",
		fr: "Archéodong",
		es: "Bronzong",
		pt: "Bronzong",
		it: "Bronzong",
		de: "Bronzong"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Protective Bell",
			fr: "Cloche Protectrice",
			es: "Campana Protectora",
			pt: "Sino Protetor",
			it: "Campana Protettiva",
			de: "Schutzglocke"
		},

		effect: {
			en: "All of your Pokémon take 10 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
			fr: "Tous vos Pokémon subissent 10 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques de los Pokémon de tu rival hacen 10 puntos de daño menos a todos tus Pokémon (después de aplicar Debilidad y Resistencia).",
			pt: "Todos os seus Pokémon recebem 10 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência).",
			it: "I tuoi Pokémon subiscono 10 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza.",
			de: "Allen deinen Pokémon werden durch Attacken von Pokémon deines Gegners 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			es: "Impacto Pesado",
			pt: "Impacto Pesado",
			it: "Impatto Pesante",
			de: "Schwerer Einschlag"
		},

		damage: 50
	}],

	retreat: 3,
	regulationMark: "H",
	illustrator: "Scav"
}

export default card