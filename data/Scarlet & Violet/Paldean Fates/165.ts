import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Tinkatink",
		fr: "Forgerette",
		es: "Tinkatink",
		it: "Tinkatink",
		pt: "Tinkatink"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Scrap Pickup",
			fr: "Récup Rebut",
			es: "Recogida de Chatarra",
			it: "Raccogliscarti",
			pt: "Catar Sucata"
		},

		effect: {
			en: "Put an Item card from your discard pile into your hand.",
			fr: "Ajoutez une carte Objet de votre pile de défausse à votre main.",
			es: "Pon 1 carta de Objeto de tu pila de descartes en tu mano.",
			it: "Prendi una carta Strumento dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			pt: "Coloque uma carta de Item da sua pilha de descarte na sua mão."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
			es: "Viento Feérico",
			it: "Vento di Fata",
			pt: "Vento de Fada"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card