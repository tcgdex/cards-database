import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Gribouraigne",
		en: "Shroodle",
		es: "Shroodle",
		it: "Shroodle",
		pt: "Shroodle",
		de: "Sproxi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Recherche de Baies",
			en: "Berry Search",
			es: "Buscabayas",
			it: "Cercabacche",
			pt: "Busca de Fruta",
			de: "Beerensuche"
		},

		effect: {
			fr: "Ajoutez une carte Énergie de base de votre pile de défausse à votre main.",
			en: "Put a Basic Energy card from your discard pile into your hand.",
			es: "Pon 1 carta de Energía Básica de tu pila de descartes en tu mano.",
			it: "Prendi una carta Energia base dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			pt: "Coloque uma carta de Energia Básica da sua pilha de descarte na sua mão.",
			de: "Nimm 1 Basis-Energiekarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Darkness"],

		name: {
			fr: "Griffe",
			en: "Scratch",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão",
			de: "Kratzer"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card