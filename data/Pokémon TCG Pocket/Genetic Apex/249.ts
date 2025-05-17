import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

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

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Data Scan",
			fr: "Numérisation",
			es: "Escaneo de Datos",
			it: "Scansione Dati",
			de: "Daten-Scan",
			'pt-br': "Escaneamento de Dados",
			ko: "데이터 스캔"
		},

		effect: {
			en: "Once during your turn, you may look at the top card of your deck.",
			fr: "Une fois pendant votre tour, vous pouvez regarder la première carte du dessus de votre deck.",
			es: "Una vez durante tu turno, puedes mirar la primera carta de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi guardare la prima carta del tuo mazzo.",
			de: "Einmal während deines Zuges kannst du dir die oberste Karte deines Decks anschauen.",
			'pt-br': "Uma vez durante o seu turno, você poderá olhar a carta de cima do seu baralho.",
			ko: "자신의 차례에 1번 사용할 수 있다. 자신의 덱을 위에서부터 1장 보고 원래대로 되돌린다."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sharpen",
			fr: "Affûtage",
			es: "Afilar",
			it: "Affilatore",
			de: "Schärfer",
			'pt-br': "Afiar",
			ko: "각지기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Star",

	description: {
		en: "State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.",
		fr: "C'est le premier Pokémon au monde à avoir\nété créé à partir de programmes informatiques,\ngrâce à une technologie de pointe.",
		es: "Se trata del primer Pokémon del mundo\ncreado a partir de códigos de programación\ngracias al uso de tecnología de vanguardia.",
		it: "È il primo Pokémon della storia a essere\nstato creato tramite programmi, grazie\nall'impiego di tecnologie all'avanguardia.",
		de: "Es ist weltweit das erste künstliche Pokémon,\ndas dank neuester Technologien mittels\nComputerprogrammen erschaffen wurde.",
		'pt-br': "Tecnologia de ponta foi usada na criação\nde Porygon. Foi o primeiro Pokémon artificial\ncriado por meio de um programa de computador.",
		ko: "최고의 과학 기술을 사용해\n세계에서 처음으로 프로그래밍되어\n만들어진 인공 포켓몬이다."
	}
}

export default card
