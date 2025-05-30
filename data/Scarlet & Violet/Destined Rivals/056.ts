import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Wiglett",
		fr: "Taupikeau",
		de: "Schligda",
		it: "Wiglett",
		es: "Wiglett",
		pt: "Wiglett"
	},

	illustrator: "Tika Matsuno",
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
			de: "Kleiner Schaufler",
			it: "Scava in Cima",
			es: "Excavar un Poquito",
			pt: "Cavadinha"
		},

		effect: {
			en: "Flip a coin. If heads, discard the top card of your opponent's deck.",
			fr: "Lancez une pièce. Si c'est face, défaussez la carte du dessus du deck de votre adversaire.",
			de: "Wirf 1 Münze. Lege bei Kopf die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel.",
			it: "Lancia una moneta. Se esce testa, scarta la prima carta del mazzo del tuo avversario.",
			es: "Lanza 1 moneda. Si sale cara, descarta la primera carta de la baraja de tu rival.",
			pt: "Jogue uma moeda. Se sair cara, descarte a carta de cima do baralho do seu oponente."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			it: "Carica",
			es: "Apisonar",
			pt: "Aríete"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card