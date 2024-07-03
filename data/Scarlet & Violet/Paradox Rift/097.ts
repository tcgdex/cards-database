import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [620],
	set: Set,

	name: {
		en: "Mienshao",
		fr: "Shaofouine",
		es: "Mienshao",
		it: "Mienshao",
		pt: "Mienshao",
		de: "Wie-Shu"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Three-Step Strike",
			fr: "Attaque en Trois Étapes",
			es: "Golpe a Tres Pasos",
			it: "Colpo Trifasico",
			pt: "Golpe de Três Passos",
			de: "Dreistufenstoß"
		},

		effect: {
			en: "Flip 3 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×"
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Whip Expert",
			fr: "Expert du Fouet",
			es: "Látigo Experto",
			it: "Specialista di Fruste",
			pt: "Especialista em Chicotada",
			de: "Peitschenexperte"
		},

		effect: {
			en: "If you attached a Pokémon Tool card from your hand to this Pokémon during this turn, this attack does 70 more damage.",
			fr: "Si vous avez attaché une carte Outil Pokémon de votre main à ce Pokémon pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
			es: "Si has unido una carta de Herramienta Pokémon de tu mano a este Pokémon durante este turno, este ataque hace 70 puntos de daño más.",
			it: "Se hai assegnato a questo Pokémon una carta Oggetto Pokémon dalla tua mano durante questo turno, questo attacco infligge 70 danni in più.",
			pt: "Se você ligou uma carta de Ferramenta Pokémon da sua mão a este Pokémon durante este turno, este ataque causará 70 pontos de dano a mais.",
			de: "Wenn du 1 Pokémon-Ausrüstung während dieses Zuges aus deiner Hand an dieses Pokémon angelegt hast, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card