import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [82],
	set: Set,

	name: {
		fr: "Magnéton",
		en: "Magneton",
		es: "Magneton",
		it: "Magneton",
		pt: "Magneton",
		de: "Magneton"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Aimant à Camelotes",
			en: "Junk Magnet",
			es: "Imán de Chatarra",
			it: "Magnetescarti",
			pt: "Ímã de Sucata",
			de: "Schrottmagnet"
		},

		effect: {
			fr: "Ajoutez jusqu'à 2 cartes Objet de votre pile de défausse à votre main.",
			en: "Put up to 2 Item cards from your discard pile into your hand.",
			es: "Pon hasta 2 cartas de Objeto de tu pila de descartes en tu mano.",
			it: "Prendi fino a due carte Strumento dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			pt: "Coloque até 2 cartas de Item da sua pilha de descarte na sua mão.",
			de: "Nimm bis zu 2 Itemkarten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			fr: "Éclair Frontal",
			en: "Head Bolt",
			es: "Rayo de Cabeza",
			it: "Zuccalampo",
			pt: "Raio de Cabeça",
			de: "Kopf-Blitz"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Yuka Morii"
}

export default card