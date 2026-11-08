import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Vaporeon",
		'fr-fr': "Aquali",
		'es-es': "Vaporeon",
		'it-it': "Vaporeon",
		'de-de': "Aquana",
		'pt-br': "Vaporeon",
		'ko-kr': "샤미드"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	dexId: [134],
	hp: 130,
	types: ["Water"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Eevee"
	},

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Bubble Drain",
			'fr-fr': "Vide Bulle",
			'es-es': "Drenaje Burbujas",
			'it-it': "Assorbibolla",
			'de-de': "Blasengully",
			'pt-br': "Dreno de Bolha",
			'ko-kr': "버블드레인"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'ko-kr': "이 포켓몬의 HP를 30회복."
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
		'en-us': "It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid's.",
		'fr-fr': "Il vit au bord de l'eau. Sa queue semblable à celle\nd'un poisson lui donne l'apparence d'une sirène.",
		'es-es': "Vive cerca del agua. Su cola termina en una\naleta parecida a la de un pez, por lo que hay\ngente que lo confunde con una sirena.",
		'it-it': "Vive vicino all'acqua. Sulla punta della coda ha una\npinna, per questo alcuni lo scambiano per una sirena.",
		'de-de': "Dieses Pokémon lebt nahe an Gewässern.\nWegen seiner fischähnlichen Schwanzflosse wird\nes manchmal für eine Meerjungfrau gehalten.",
		'pt-br': "Este Pokémon vive perto da água. A sua longa\ncauda é coberta por uma barbatana e muitas\nvezes é confundida com a de uma sereia.",
		'ko-kr': "물가에 살지만 꼬리에\n물고기처럼 지느러미가 남아 있어서\n인어로 착각하는 사람도 있다."
	},

	boosters: ["mewtwo"]
}

export default card
