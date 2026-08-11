import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Crabrawler",
		'fr-fr': "Crabagarre",
		'es-es': "Crabrawler",
		'it-it': "Crabrawler",
		'de-de': "Krabbox",
		'pt-br': "Crabrawler",
		'ko-kr': "오기지게"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [739],
	hp: 70,
	types: ["Fighting"],

	description: {
		'en-us': "This Pokémon punches trees and eats\nthe berries that drop down, training itself\nand getting food at the same time.",
		'fr-fr': "Il boxe les arbres et mange les Baies qui\nen tombent, ce qui lui permet de s'entraîner\net de se nourrir en même temps.",
		'es-es': "Propina puñetazos a los árboles y devora las\nbayas que caen al suelo tras el impacto. Esto le\npermite entrenar y alimentarse al mismo tiempo.",
		'it-it': "Prende a pugni gli alberi, per poi cibarsi delle\nbacche che cadono dai rami. In questo modo,\nsi allena e si procaccia il cibo simultaneamente.",
		'de-de': "Dieses Pokémon boxt Bäume und frisst dann die Beeren,\ndie von ihnen herabfallen. So gelangt es an Nahrung und\nkann gleichzeitig trainieren.",
		'pt-br': "Este Pokémon esmurra árvores e come as frutas que\ncaem, treinando e conseguindo comida ao mesmo tempo.",
		'ko-kr': "나무를 때려서 떨어진 나무열매를 먹는다.\n트레이닝도 되고 먹이도 구해져서\n그야말로 일석이조다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Punch",
			'fr-fr': "Koud'Poing",
			'es-es': "Puño",
			'it-it': "Pugno",
			'de-de': "Boxhieb",
			'pt-br': "Soco",
			'ko-kr': "펀치"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["vol8"]
}

export default card