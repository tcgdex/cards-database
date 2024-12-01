import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Houndstone",
		fr: "Tomberro",
		es: "Houndstone",
		it: "Houndstone",
		pt: "Houndstone",
		de: "Friedwuff"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Delve",
			fr: "Fouille Exploratoire",
			es: "Fisgar",
			it: "Scava scava",
			pt: "Examinar",
			de: "Graben"
		},

		effect: {
			en: "Put up to 2 Item cards from your discard pile into your hand.",
			fr: "Ajoutez jusqu'à 2 cartes Objet de votre pile de défausse à votre main.",
			es: "Pon hasta 2 cartas de Objeto de tu pila de descartes en tu mano.",
			it: "Prendi fino a due carte Strumento dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			pt: "Coloque até 2 cartas de Item da sua pilha de descarte na sua mão.",
			de: "Nimm bis zu 2 Itemkarten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			es: "Disparo Embrujado",
			it: "Colpomistero",
			pt: "Tiro Assustador",
			de: "Spukschuss"
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card