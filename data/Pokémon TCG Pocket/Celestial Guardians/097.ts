import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Crabrawler",
		fr: "Crabagarre",
		es: "Crabrawler",
		it: "Crabrawler",
		de: "Krabbox",
		'pt-br': "Crabrawler",
		ko: "오기지게"
	},

	illustrator: "kirisAki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "This Pokémon punches trees and eats the berries that drop down, training itself and getting food at the same time.",
		fr: "Il boxe les arbres et mange les Baies qui\nen tombent, ce qui lui permet de s'entraîner\net de se nourrir en même temps.",
		es: "Propina puñetazos a los árboles y devora las\nbayas que caen al suelo tras el impacto. Esto le\npermite entrenar y alimentarse al mismo tiempo.",
		it: "Prende a pugni gli alberi, per poi cibarsi delle\nbacche che cadono dai rami. In questo modo,\nsi allena e si procaccia il cibo simultaneamente.",
		de: "Dieses Pokémon boxt Bäume und frisst dann die Beeren,\ndie von ihnen herabfallen. So gelangt es an Nahrung und\nkann gleichzeitig trainieren.",
		'pt-br': "Este Pokémon esmurra árvores e come as frutas que\ncaem, treinando e conseguindo comida ao mesmo tempo.",
		ko: "나무를 때려서 떨어진 나무열매를 먹는다.\n트레이닝도 되고 먹이도 구해져서\n그야말로 일석이조다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Punch",
			fr: "Koud'Poing",
			es: "Puño",
			it: "Pugno",
			de: "Boxhieb",
			'pt-br': "Soco",
			ko: "펀치"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo"]
}

export default card