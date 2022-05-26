import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Teddiursa",
		fr: "Teddiursa",
		es: "Teddiursa",
		it: "Teddiursa",
		pt: "Teddiursa",
		de: "Teddiursa"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gather Food",
			fr: "Approvisionnement",
			es: "Avituallamiento",
			it: "Raccolta di Cibo",
			pt: "Catar Comida",
			de: "Futter sammeln"
		},

		effect: {
			en: "Flip a coin. If heads, put an Item card from your discard pile into your hand.",
			fr: "Lancez une pièce. Si c'est face, ajoutez une carte Objet de votre pile de défausse à votre main.",
			es: "Lanza 1 moneda. Si sale cara, pon 1 carta de Objeto de tu pila de descartes en tu mano.",
			it: "Lancia una moneta. Se esce testa, prendi una carta Strumento dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			pt: "Jogue 1 moeda. Se sair cara, coloque 1 carta de Item da sua pilha de descarte na sua mão.",
			de: "Wirf 1 Münze. Nimm bei Kopf 1 Itemkarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Dig Claws",
			fr: "Creusogriffes",
			es: "Hundir Garras",
			it: "Scavazanne",
			pt: "Fincar Garras",
			de: "Schaufelkrallen"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card