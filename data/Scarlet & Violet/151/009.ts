import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [9],
	set: Set,

	name: {
		fr: "Tortank-ex",
		en: "Blastoise ex",
		es: "Blastoise ex",
		it: "Blastoise-ex",
		pt: "Blastoise ex",
		de: "Turtok-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Coquille Dure",
			en: "Solid Shell",
			es: "Caparazón Sólido",
			it: "Guscio Solido",
			pt: "Carapaça Sólida",
			de: "Solider Panzer"
		},

		effect: {
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			fr: "Double Canon",
			en: "Twin Cannons",
			es: "Cañones Gemelos",
			it: "Duocannone",
			pt: "Canhões Gêmeos",
			de: "Zwillingsdüsen"
		},

		effect: {
			fr: "Défaussez jusqu'à 2 cartes Énergie {W} de base de votre main. Cette attaque inflige 140 dégâts pour chaque carte défaussée de cette façon.",
			en: "Discard up to 2 Basic {W} Energy cards from your hand. This attack does 140 damage for each card you discarded in this way.",
			es: "Descarta hasta 2 cartas de Energía {W} Básica de tu mano. Este ataque hace 140 puntos de daño por cada carta que hayas descartado de esta manera.",
			it: "Scarta fino a due carte Energia base {W} dalla tua mano. Questo attacco infligge 140 danni per ogni carta che hai scartato in questo modo.",
			pt: "Descarte até 2 cartas de Energia {W} Básica da sua mão. Este ataque causa 140 pontos de dano para cada carta descartada desta forma.",
			de: "Lege bis zu 2 Basis-{W}-Energiekarten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 140 Schadenspunkte zu."
		},

		damage: "140×"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "PLANETA Yamashita",

	thirdParty: {
		cardmarket: 733604
	}
}

export default card