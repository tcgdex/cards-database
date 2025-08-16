import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [960],
	set: Set,

	name: {
		en: "Wiglett",
		fr: "Taupikeau",
		es: "Wiglett",
		it: "Wiglett",
		pt: "Wiglett",
		de: "Schligda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Dig a Little",
			fr: "Creusement Léger",
			es: "Excavar un Poquito",
			it: "Scava in Cima",
			pt: "Cavadinha",
			de: "Kleiner Schaufler"
		},

		effect: {
			en: "Flip a coin. If heads, discard the top card of your opponent's deck.",
			fr: "Lancez une pièce. Si c'est face, défaussez la carte du dessus du deck de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, descarta la primera carta de la baraja de tu rival.",
			it: "Lancia una moneta. Se esce testa, scarta la prima carta del mazzo del tuo avversario.",
			pt: "Jogue uma moeda. Se sair cara, descarte a carta de cima do baralho do seu oponente.",
			de: "Wirf 1 Münze. Lege bei Kopf die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Tika Matsuno"
}

export default card