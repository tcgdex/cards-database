import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [984],
	set: Set,

	name: {
		en: "Great Tusk ex",
		fr: "Fort-Ivoire-ex",
		es: "Colmilargo ex",
		it: "Grandizanne-ex",
		pt: "Presa Grande ex",
		de: "Riesenzahn-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Bedrock Breaker",
			fr: "Brise Fondation",
			es: "Rompecimientos",
			it: "Infrangiroccia",
			pt: "Quebrador de Alicerce",
			de: "Felsgrundbrecher"
		},

		effect: {
			en: "Discard a Stadium in play.",
			fr: "Défaussez un Stade en jeu.",
			es: "Descarta 1 Estadio en juego.",
			it: "Scarta una carta Stadio in gioco.",
			pt: "Descarte um Estádio em jogo.",
			de: "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
		},

		damage: 40
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Gigantic Tusks",
			fr: "Défenses Gigantesques",
			es: "Colmillos Gigantescos",
			it: "Zanne Mastodontiche",
			pt: "Presas Colossais",
			de: "Gigantische Stoßzähne"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 250
	}],

	retreat: 4,
	regulationMark: "G",
	illustrator: "5ban Graphics",
	suffix: "EX",

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: {
		normal: false,
		reverse: false
	},

	thirdParty: {
		cardmarket: 702419
	}
}

export default card