import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Kyurem V",
		fr: "Kyurem V",
		es: "Kyurem V",
		it: "Kyurem V",
		pt: "Kyurem V",
		de: "Kyurem V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Rapid Freeze",
			fr: "Gel Immédiat",
			es: "Congelación Veloz",
			it: "Gelo Rapido",
			pt: "Congelamento Rápido",
			de: "Schockfrosten"
		},

		effect: {
			en: "Attach any number of Water Energy cards from your hand to your Pokémon in any way you like.",
			fr: "Attachez le nombre voulu de cartes Énergie Water de votre main à vos Pokémon comme il vous plaît.",
			es: "Une cualquier cantidad de cartas de Energía Water de tu mano a tus Pokémon de la manera que desees.",
			it: "Assegna ai tuoi Pokémon un numero qualsiasi di carte Energia Water dalla tua mano nel modo che preferisci.",
			pt: "Ligue qualquer número de cartas de Energia Water da sua mão aos seus Pokémon como desejar.",
			de: "Lege beliebig viele Water-Energiekarten aus deiner Hand beliebig an deine Pokémon an."
		}
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Frost Smash",
			fr: "Impact Glacial",
			es: "Golpe Gélido",
			it: "Gelocolpo",
			pt: "Pancada Congelada",
			de: "Frostschlag"
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 674058
	}
}

export default card
