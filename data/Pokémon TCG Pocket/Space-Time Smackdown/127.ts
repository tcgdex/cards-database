import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Porygon",
		fr: "Porygon",
		es: "Porygon",
		it: "Porygon",
		de: "Porygon",
		'pt-br': "Porygon",
		ko: "폴리곤"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [137],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.",
		fr: "C'est le premier Pokémon au monde à avoir\nété créé à partir de programmes informatiques,\ngrâce à une technologie de pointe.",
		es: "Se trata del primer Pokémon del mundo\ncreado a partir de códigos de programación\ngracias al uso de tecnología de vanguardia.",
		it: "È il primo Pokémon della storia a essere\nstato creato tramite programmi, grazie\nall'impiego di tecnologie all'avanguardia.",
		de: "Es ist weltweit das erste künstliche Pokémon,\ndas dank neuester Technologien mittels\nComputerprogrammen erschaffen wurde.",
		'pt-br': "Tecnologia de ponta foi usada na criação\nde Porygon. Foi o primeiro Pokémon artificial\ncriado por meio de um programa de computador.",
		ko: "최고의 과학 기술을 사용해\n세계에서 처음으로 프로그래밍되어\n만들어진 인공 포켓몬이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Beam",
			fr: "Rayon",
			es: "Transmisión",
			it: "Raggio",
			de: "Strahl",
			'pt-br': "Feixe",
			ko: "빔"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
