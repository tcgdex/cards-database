import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [564],
	set: Set,

	name: {
		en: "Tirtouga",
		fr: "Carapagos",
		de: "Galapaflos",
		it: "Tirtouga",
		pt: "Tirtouga",
		es: "Tirtouga",
		'es-mx': "Tirtouga"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Ancient Seaweed",
			fr: "Algue Ancestrale",
			de: "Uralter Seetang",
			it: "Alghe Antiche",
			pt: "Alga Ancestral",
			es: "Alga Ancestral",
			'es-mx': "Alga Antigua"
		},

		effect: {
			en: "This attack does 30 damage for each Item card in your opponent's discard pile.",
			fr: "Cette attaque inflige 30 dégâts pour chaque carte Objet dans la pile de défausse de votre adversaire.",
			de: "Diese Attacke fügt für jede Itemkarte im Ablagestapel deines Gegners 30 Schadenspunkte zu.",
			it: "Questo attacco infligge 30 danni per ogni carta Strumento nella pila degli scarti del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano para cada carta de Item na pilha de descarte do seu oponente.",
			es: "Este ataque hace 30 puntos de daño por cada carta de Objeto en la pila de descartes de tu rival.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada carta de Objeto en la pila de descartes de tu rival."
		},

		damage: "30×"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Surf",
			fr: "Surf",
			de: "Surfer",
			it: "Surf",
			pt: "Surfar",
			es: "Surf",
			'es-mx': "Surf"
		},

		damage: 80
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card