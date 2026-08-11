import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Vaporeon",
		fr: "Aquali",
		es: "Vaporeon",
		it: "Vaporeon",
		de: "Aquana",
		'pt-br': "Vaporeon",
		ko: "샤미드"
	},

	illustrator: "aspara",
	category: "Pokemon",

	dexId: [134],
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid's.",
		fr: "Il vit au bord de l'eau. Sa queue semblable à celle\nd'un poisson lui donne l'apparence d'une sirène.",
		es: "Vive cerca del agua. Su cola termina en una\naleta parecida a la de un pez, por lo que hay\ngente que lo confunde con una sirena.",
		it: "Vive vicino all'acqua. Sulla punta della coda ha una\npinna, per questo alcuni lo scambiano per una sirena.",
		de: "Dieses Pokémon lebt nahe an Gewässern.\nWegen seiner fischähnlichen Schwanzflosse wird\nes manchmal für eine Meerjungfrau gehalten.",
		'pt-br': "Este Pokémon vive perto da água. A sua longa\ncauda é coberta por uma barbatana e muitas\nvezes é confundida com a de uma sereia.",
		ko: "물가에 살지만 꼬리에\n물고기처럼 지느러미가 남아 있어서\n인어로 착각하는 사람도 있다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wash Out",
			fr: "Surlavage",
			es: "Hacer Limpieza",
			it: "Sciacquare",
			de: "Wegspülen",
			'pt-br': "Lavagem",
			ko: "흘려보내기"
		},

		effect: {
			en: "As often as you like during your turn, you may move a {W} Energy from 1 of your Benched {W} Pokémon to your Active {W} Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer une Énergie {W} de l'un de vos Pokémon {W} de Banc vers votre Pokémon {W} Actif.",
			es: "Todas las veces que quieras durante tu turno, puedes mover 1 Energía {W} de 1 de tus Pokémon {W} en Banca a tu Pokémon {W} Activo.",
			it: "Durante il tuo turno, puoi spostare un'Energia {W} da uno dei tuoi Pokémon {W} in panchina al tuo Pokémon {W} in posizione attiva tutte le volte che vuoi.",
			de: "Beliebig oft während deines Zuges kannst du 1 {W}-Energie von 1 {W}-Pokémon auf deiner Bank auf dein Aktives {W}-Pokémon verschieben.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá mover uma Energia {W} de 1 dos seus Pokémon {W} no Banco para o seu Pokémon {W} Ativo.",
			ko: "자신의 차례에 몇 번이라도 사용할 수 있다. 자신의 벤치의 {W}포켓몬에서 {W}에너지를 1개 배틀필드의 {W}포켓몬에게 바꿔 붙인다."
		}
	}],

	attacks: [{
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			es: "Chapoteo Ondulante",
			it: "Schizzi d'Onda",
			de: "Wellenplatscher",
			'pt-br': "Onda Borrifante",
			ko: "스플래시"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Star"
}

export default card
