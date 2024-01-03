import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Victini",
		fr: "Victini",
		es: "Victini",
		it: "Victini",
		pt: "Victini",
		de: "Victini"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Assisting Flame",
			fr: "Flamme de Soutien",
			es: "Llama de Apoyo",
			it: "Fiammaiuto",
			pt: "Chama Auxiliar",
			de: "Helfende Flamme"
		},

		effect: {
			en: "Attach up to 2 Fire Energy cards from your discard pile to your Pokémon in any way you like.",
			fr: "Attachez jusqu'à 2 cartes Énergie Fire de votre pile de défausse à vos Pokémon comme il vous plaît.",
			es: "Une hasta 2 cartas de Energía Fire de tu pila de descartes a tus Pokémon de la manera que desees.",
			it: "Assegna ai tuoi Pokémon fino a due carte Energia Fire dalla tua pila degli scarti nel modo che preferisci.",
			pt: "Ligue até 2 cartas de Energia Fire da sua pilha de descarte aos seus Pokémon como desejar.",
			de: "Lege bis zu 2 Fire-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an."
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			es: "Llama",
			it: "Fiammata",
			pt: "Chama",
			de: "Flackern"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card