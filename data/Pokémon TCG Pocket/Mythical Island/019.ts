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

	illustrator: "LINNE",
	category: "Pokemon",
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
			en: "Wash Out"
		},

		effect: {
			en: "As often as you like during your turn, you may move a <span class=\"energy-text energy-text--type-water\"></span> Energy from 1 of your Benched <span class=\"energy-text energy-text--type-water\"></span> Pokémon to your Active <span class=\"energy-text energy-text--type-water\"></span> Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Wave Splash"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond"
}

export default card
