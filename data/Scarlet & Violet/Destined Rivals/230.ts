import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Great Tusk ex",
		fr: "Fort-Ivoire-ex",
		de: "Riesenzahn-ex",
		it: "Grandizanne-ex",
		es: "Colmilargo ex",
		pt: "Presa Grande ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Bedrock Breaker",
			fr: "Brise Fondation",
			de: "Felsgrundbrecher",
			it: "Infrangiroccia",
			es: "Rompecimientos",
			pt: "Quebrador de Alicerce"
		},

		effect: {
			en: "Discard a Stadium in play.",
			fr: "Défaussez un Stade en jeu.",
			de: "Lege 1 Stadionkarte im Spiel auf den Ablagestapel.",
			it: "Scarta una carta Stadio in gioco.",
			es: "Descarta 1 Estadio en juego.",
			pt: "Descarte um Estádio em jogo."
		},

		damage: 40
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Gigantic Tusks",
			fr: "Défenses Gigantesques",
			de: "Gigantische Stoßzähne",
			it: "Zanne Mastodontiche",
			es: "Colmillos Gigantescos",
			pt: "Presas Colossais"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo."
		},

		damage: 250
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card