import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
		es: "Nidoran♂",
		it: "Nidoran ♂",
		de: "Nidoran♂",
		'pt-br': "Nidoran♂",
		ko: "니드런♂"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			de: "Pikser",
			'pt-br': "Bicada",
			ko: "쪼기"
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
		en: "The horn on a male Nidoran's forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.",
		fr: "Sa corne frontale contient un puissant poison. Les grandes oreilles\nde ce Pokémon très prudent sont constamment dressées.",
		es: "Mantiene sus grandes orejas levantadas, siempre\nalerta. Si advierte peligro, ataca inoculando una\npotente toxina con su cuerno frontal.",
		it: "Il corno sulla fronte è estremamente\nvelenoso. Di indole circospetta, rizza\ncostantemente le sue grandi orecchie.",
		de: "Das Horn auf seiner Stirn enthält ein starkes Gift.\nDieses Pokémon ist sehr vorsichtig und stellt\nseine großen Ohren stets wachsam auf.",
		'pt-br': "O chifre na testa dos Nidoran machos contém\num veneno poderoso. Trata-se de um Pokémon\ncauteloso, sempre esticando suas grandes orelhas.",
		ko: "이마의 뿔에는 맹독이 있다.\n경계심이 강해서 커다란\n귀를 늘 쫑긋 세우고 있다."
	}
}

export default card
