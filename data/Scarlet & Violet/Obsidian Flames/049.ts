import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [419],
	set: Set,

	name: {
		fr: "Mustéflott",
		en: "Floatzel",
		es: "Floatzel",
		it: "Floatzel",
		pt: "Floatzel",
		de: "Bojelin"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Queue Tourbillon",
			en: "Swirling Tail",
			es: "Cola en Espiral",
			it: "Vorticoda",
			pt: "Cauda Espiral",
			de: "Wirbelnder Schweif"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, placez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées dans la main de votre adversaire.",
			en: "Flip a coin. If heads, put your opponent's Active Pokémon and all attached cards into your opponent's hand.",
			es: "Lanza 1 moneda. Si sale cara, pon el Pokémon Activo de tu rival y todas las cartas unidas a él en la mano de tu rival.",
			it: "Lancia una moneta. Se esce testa, prendi il Pokémon attivo del tuo avversario e tutte le carte a esso assegnate e aggiungili alle carte che ha in mano.",
			pt: "Jogue uma moeda. Se sair cara, coloque o Pokémon Ativo do seu oponente e todas as cartas ligadas a ele na mão do seu oponente.",
			de: "Wirf 1 Münze. Gib bei Kopf deinem Gegner sein Aktives Pokémon und alle angelegten Karten auf seine Hand."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			fr: "Cascade",
			en: "Waterfall",
			es: "Cascada",
			it: "Cascata",
			pt: "Cachoeira",
			de: "Kaskade"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Kouki Saitou"
}

export default card