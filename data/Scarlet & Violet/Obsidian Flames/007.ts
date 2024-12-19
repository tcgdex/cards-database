import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [284],
	set: Set,

	name: {
		fr: "Maskadra",
		en: "Masquerain",
		es: "Masquerain",
		it: "Masquerain",
		pt: "Masquerain",
		de: "Maskeregen"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Motif Affolant",
			en: "Panic-Prompting Pattern",
			es: "Patrón del Pánico",
			it: "Motivo Terrificante",
			pt: "Padrão de Pânico",
			de: "Panikmuster"
		},

		effect: {
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, défaussez au hasard une carte de la main de votre adversaire.",
			en: "Flip a coin until you get tails. For each heads, discard a random card from your opponent's hand.",
			es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta 1 carta aleatoria de la mano de tu rival.",
			it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Jogue uma moeda até sair coroa. Para cada cara, descarte uma carta aleatória da mão do seu oponente.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Lege pro Kopf 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Bourdon",
			en: "Bug Buzz",
			es: "Zumbido",
			it: "Ronzio",
			pt: "Zumbido de Inseto",
			de: "Käfergebrumm"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo",
		es: "Surskit",
		it: "Surskit",
		pt: "Surskit",
		de: "Gehweiher"
	}
}

export default card