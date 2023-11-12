import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Excavarenne",
		en: "Diggersby",
		es: "Diggersby",
		it: "Diggersby",
		pt: "Diggersby",
		de: "Grebbit"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Coud'Boue",
			en: "Mud-Slap",
			es: "Bofetón Lodo",
			it: "Fangosberla",
			pt: "Tapa de Lama",
			de: "Lehmschelle"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			fr: "Marteau Frappeur",
			en: "Knocking Hammer",
			es: "Martillo Impacto",
			it: "Martello Battente",
			pt: "Martelo Detonador",
			de: "Klopfender Hammer"
		},

		effect: {
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			en: "Discard the top card of your opponent's deck.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			it: "Scarta la prima carta del mazzo del tuo avversario.",
			pt: "Descarte a carta de cima do baralho do seu oponente.",
			de: "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
		},

		damage: 120
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card