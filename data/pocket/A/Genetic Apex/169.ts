import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nidoran♂",
		'fr-fr': "Nidoran♂",
		'es-es': "Nidoran♂",
		'it-it': "Nidoran ♂",
		'de-de': "Nidoran♂",
		'pt-br': "Nidoran♂",
		'ko-kr': "니드런♂"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",

	dexId: [32],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'de-de': "Pikser",
			'pt-br': "Bicada",
			'ko-kr': "쪼기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "The horn on a male Nidoran's forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.",
		'fr-fr': "Sa corne frontale contient un puissant poison. Les grandes oreilles\nde ce Pokémon très prudent sont constamment dressées.",
		'es-es': "Mantiene sus grandes orejas levantadas, siempre\nalerta. Si advierte peligro, ataca inoculando una\npotente toxina con su cuerno frontal.",
		'it-it': "Il corno sulla fronte è estremamente\nvelenoso. Di indole circospetta, rizza\ncostantemente le sue grandi orecchie.",
		'de-de': "Das Horn auf seiner Stirn enthält ein starkes Gift.\nDieses Pokémon ist sehr vorsichtig und stellt\nseine großen Ohren stets wachsam auf.",
		'pt-br': "O chifre na testa dos Nidoran machos contém\num veneno poderoso. Trata-se de um Pokémon\ncauteloso, sempre esticando suas grandes orelhas.",
		'ko-kr': "이마의 뿔에는 맹독이 있다.\n경계심이 강해서 커다란\n귀를 늘 쫑긋 세우고 있다."
	},

	boosters: ["pikachu"]
}

export default card
