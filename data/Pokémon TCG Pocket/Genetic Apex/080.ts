import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

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

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	dexId: [134],
	hp: 130,
	types: ["Water"],
	stage: "Stage1",

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Bubble Drain",
			fr: "Vide Bulle",
			es: "Drenaje Burbujas",
			it: "Assorbibolla",
			de: "Blasengully",
			'pt-br': "Dreno de Bolha",
			ko: "버블드레인"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			ko: "이 포켓몬의 HP를 30회복."
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid's.",
		fr: "Il vit au bord de l'eau. Sa queue semblable à celle\nd'un poisson lui donne l'apparence d'une sirène.",
		es: "Vive cerca del agua. Su cola termina en una\naleta parecida a la de un pez, por lo que hay\ngente que lo confunde con una sirena.",
		it: "Vive vicino all'acqua. Sulla punta della coda ha una\npinna, per questo alcuni lo scambiano per una sirena.",
		de: "Dieses Pokémon lebt nahe an Gewässern.\nWegen seiner fischähnlichen Schwanzflosse wird\nes manchmal für eine Meerjungfrau gehalten.",
		'pt-br': "Este Pokémon vive perto da água. A sua longa\ncauda é coberta por uma barbatana e muitas\nvezes é confundida com a de uma sereia.",
		ko: "물가에 살지만 꼬리에\n물고기처럼 지느러미가 남아 있어서\n인어로 착각하는 사람도 있다."
	},

	boosters: ["mewtwo"]
}

export default card
