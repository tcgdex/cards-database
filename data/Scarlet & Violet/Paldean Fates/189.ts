import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Shroodle",
		fr: "Gribouraigne",
		es: "Shroodle",
		it: "Shroodle",
		pt: "Shroodle",
		de: "Sproxi"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Berry Search",
			fr: "Recherche de Baies",
			es: "Buscabayas",
			it: "Cercabacche",
			pt: "Busca de Fruta",
			de: "Beerensuche"
		},

		effect: {
			en: "Put a Basic Energy card from your discard pile into your hand.",
			fr: "Ajoutez une carte Énergie de base de votre pile de défausse à votre main.",
			es: "Pon 1 carta de Energía Básica de tu pila de descartes en tu mano.",
			it: "Prendi una carta Energia base dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			pt: "Coloque uma carta de Energia Básica da sua pilha de descarte na sua mão.",
			de: "Nimm 1 Basis-Energiekarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Darkness"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão",
			de: "Kratzer"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card