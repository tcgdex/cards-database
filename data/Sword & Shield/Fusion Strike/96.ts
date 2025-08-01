import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [603],
	set: Set,

	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Tynamo",
		fr: "Anchwatt",
		es: "Tynamo",
		it: "Tynamo",
		pt: "Tynamo",
		de: "Zapplardin"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Shigenori Negishi",

	description: {
		en: "These Pokémon have a big appetite. When they spot their prey, they attack it and paralyze it with electricity."
	},

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Lightning Ball",
			fr: "Boule Éclair",
			de: "Kugelblitz",
			es: "Bola Relámpago",
			pt: "Bola de Raios",
			it: "Fulminpalla"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Thunder",
			fr: "Fatal-Foudre",
			de: "Donner",
			es: "Trueno",
			pt: "Trovão",
			it: "Tuono"
		},

		damage: 80,

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582489
	}
}

export default card