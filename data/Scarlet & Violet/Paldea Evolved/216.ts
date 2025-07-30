import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Forgerette",
		en: "Tinkatink",
		es: "Tinkatink",
		it: "Tinkatink",
		pt: "Tinkatink",
		de: "Forgita"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Récup Rebut",
			en: "Scrap Pickup",
			es: "Recogida de Chatarra",
			it: "Raccogliscarti",
			pt: "Catar Sucata",
			de: "Schrottverwertung"
		},

		effect: {
			fr: "Ajoutez une carte Objet de votre pile de défausse à votre main.",
			en: "Put an Item card from your discard pile into your hand.",
			es: "Pon 1 carta de Objeto de tu pila de descartes en tu mano.",
			it: "Prendi una carta Strumento dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			pt: "Coloque uma carta de Item da sua pilha de descarte na sua mão.",
			de: "Nimm 1 Itemkarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			fr: "Vent Féérique",
			en: "Fairy Wind",
			es: "Viento Feérico",
			it: "Vento di Fata",
			pt: "Vento de Fada",
			de: "Feenbrise"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Tika Matsuno",

	thirdParty: {
		cardmarket: 715575
	}
}

export default card