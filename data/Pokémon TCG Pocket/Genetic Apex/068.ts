import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Krabby",
		fr: "Krabby",
		es: "Krabby",
		it: "Krabby",
		de: "Krabby",
		'pt-br': "Krabby",
		ko: "크랩"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",

	dexId: [98],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Vise Grip",
			fr: "Force Poigne",
			es: "Agarre",
			it: "Presa",
			de: "Klammer",
			'pt-br': "Agarramento Compressor",
			ko: "찝기"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "It can be found near the sea. The large pincers grow back if they are torn out of their sockets.",
		fr: "On trouve ce Pokémon près de la mer.\nSes grosses pinces peuvent repousser\nsi elles sont arrachées.",
		es: "Es fácil encontrarlo cerca del mar. Las largas pinzas\nque tiene vuelven a crecer si se las quitan de su sitio.",
		it: "Lo si può trovare vicino al mare. Le grandi\nchele, se si staccano, ricrescono.",
		de: "Es kommt vor allem nahe dem Meer vor.\nDie großen Scheren wachsen nach, wenn\nsie vom Körper abgetrennt wurden.",
		'pt-br': "Estes Pokémon vivem perto do mar e\nsuas grandes pinças crescem de volta\nse forem arrancadas.",
		ko: "바다 근처에서 발견된다.\n커다란 집게는 뜯겨도\n나중에 다시 자라난다."
	},

	boosters: ["mewtwo"]
}

export default card
