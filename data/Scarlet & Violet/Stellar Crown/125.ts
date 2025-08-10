import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [832],
	set: Set,

	name: {
		en: "Dubwool",
		fr: "Moumouflon",
		es: "Dubwool",
		it: "Dubwool",
		pt: "Dubwool",
		de: "Zwollock"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Soft Wool",
			fr: "Laine Douce",
			es: "Lana Suave",
			it: "Lana Soffice",
			pt: "Lã Fofinha",
			de: "Weiche Wolle"
		},

		effect: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Knock Over",
			fr: "Culbute",
			es: "Tumbar",
			it: "Sconvolgimento",
			pt: "Arrebatar",
			de: "Umwerfen"
		},

		effect: {
			en: "You may discard a Stadium in play.",
			fr: "Vous pouvez défausser un Stade en jeu.",
			es: "Puedes descartar 1 Estadio en juego.",
			it: "Puoi scartare una carta Stadio in gioco.",
			pt: "Você pode descartar um Estádio em jogo.",
			de: "Du kannst 1 Stadionkarte im Spiel auf den Ablagestapel legen."
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "HYOGONOSUKE"
}

export default card
