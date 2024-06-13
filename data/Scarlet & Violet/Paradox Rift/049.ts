import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [768],
	set: Set,

	name: {
		en: "Golisopod",
		fr: "Sarmuraï",
		es: "Golisopod",
		it: "Golisopod",
		pt: "Golisopod",
		de: "Tectass"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Powerful Cross",
			fr: "Poing Puissant",
			es: "Cruzado Poderoso",
			it: "Fendente Potente",
			pt: "Cruzado Poderoso",
			de: "Krafthaken"
		},

		effect: {
			en: "This attack does 20 damage for each card in your opponent's hand.",
			fr: "Cette attaque inflige 20 dégâts pour chaque carte dans la main de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño por cada carta en la mano de tu rival.",
			it: "Questo attacco infligge 20 danni per ogni carta nella mano del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano para cada carta na mão do seu oponente.",
			de: "Diese Attacke fügt für jede Karte auf der Hand deines Gegners 20 Schadenspunkte zu."
		},

		damage: "20×"
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Waterfall",
			fr: "Cascade",
			es: "Cascada",
			it: "Cascata",
			pt: "Cachoeira",
			de: "Kaskade"
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card