import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [404],
	set: Set,

	name: {
		en: "Luxio",
		fr: "Luxio",
		es: "Luxio",
		it: "Luxio",
		pt: "Luxio",
		de: "Luxio"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Shinx",
		fr: "Lixy",
		es: "Shinx",
		it: "Shinx",
		pt: "Shinx",
		de: "Sheinux"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Shorting Spark",
			fr: "Étincelle Court-Circuit",
			es: "Chispa Cortocircuito",
			it: "Cortoscintilla",
			pt: "Faísca de Curto-circuito",
			de: "Kurzschlussfunke"
		},

		effect: {
			en: "This attack does 90 damage to each of your opponent's Pokémon that has a Pokémon Tool attached. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 90 dégâts à chacun des Pokémon de votre adversaire auquel un Outil Pokémon est attaché. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 90 puntos de daño a cada uno de los Pokémon de tu rival que tenga 1 Herramienta Pokémon unida a él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 90 danni a ciascuno dei Pokémon del tuo avversario che ha una carta Oggetto Pokémon assegnata. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 90 pontos de dano a cada um dos Pokémon do seu oponente que tiver uma Ferramenta Pokémon ligada a ele (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners, an das eine Pokémon-Ausrüstung angelegt ist, 90 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
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