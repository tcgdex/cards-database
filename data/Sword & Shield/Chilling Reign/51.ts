import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
		es: "Zebstrika",
		it: "Zebstrika",
		pt: "Zebstrika",
		de: "Zebritz"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron"
	},

	attacks: [{
		name: {
			en: "Coordinated Bolt",
			fr: "Éclair Coordonné",
			es: "Rayo Coordinado",
			it: "Lampo Coordinato",
			pt: "Raio Coordenado",
			de: "Koordinierter Blitz"
		},

		effect: {
			en: "If 1 of your other Rapid Strike Pokémon used an attack during your last turn, this attack does 90 more damage.",
			fr: "Si l’un de vos autres Pokémon Mille Poings a utilisé une attaque pendant votre dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si 1 de tus otros Pokémon Golpe Fluido usó un ataque durante tu último turno, este ataque hace 90 puntos de daño más.",
			it: "Se uno dei tuoi altri Pokémon Colpo Rapido ha usato un attacco durante il tuo ultimo turno, questo attacco infligge 90 danni in più.",
			pt: "Se 1 dos seus outros Pokémon Golpe Fluido usou um ataque durante o seu último turno, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn 1 deiner anderen Fließender-Angriff-Pokémon während deines letzten Zuges eine Attacke eingesetzt hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Colorless"]
	}, {
		name: {
			en: "Spark Rush",
			fr: "Charge Étincelle",
			es: "Embestida Chispa",
			it: "Sfrecciascintilla",
			pt: "Fúria Faiscante",
			de: "Funkensturm"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 90 damage for each heads.",
			fr: "Lancez une pièce jusqu’à obtenir un côté pile. Cette attaque inflige 90 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 90 puntos de daño por cada cara.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 90 danni ogni volta che esce testa.",
			pt: "Jogue 1 moeda até sair coroa. Este ataque causa 90 pontos de dano para cada cara.",
			de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu."
		},

		damage: "90×",
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates."
	}
}

export default card