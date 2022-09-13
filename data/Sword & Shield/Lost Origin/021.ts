import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Slugma",
		fr: "Limagma",
		es: "Slugma",
		it: "Slugma",
		pt: "Slugma",
		de: "Schneckmag"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Draw In",
			fr: "Aspiracartes",
			es: "Arrastre",
			it: "Aspiracarte",
			pt: "Envolver",
			de: "Ansaugen"
		},

		effect: {
			en: "Attach a Fire Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie Fire de votre pile de défausse à ce Pokémon.",
			es: "Une 1 carta de Energía Fire de tu pila de descartes a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia Fire dalla tua pila degli scarti.",
			pt: "Ligue 1 carta de Energia Fire da sua pilha de descarte a este Pokémon.",
			de: "Lege 1 Fire-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			it: "Fuoco Continuo",
			pt: "Combustão",
			de: "Glühen"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card
