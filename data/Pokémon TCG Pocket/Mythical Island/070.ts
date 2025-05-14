import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Serperior",
		fr: "Majaspic",
		es: "Serperior",
		it: "Serperior",
		de: "Serpiroyal",
		'pt-br': "Serperior",
		ko: "샤로다"
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Servine"
	},

	description: {
		en: "It only gives its all against strong opponents who are not fazed by the glare from Serperior's noble eyes.",
		fr: "Il ne donnera tout son potentiel que contre un ennemi\npuissant indifférent à son regard écrasant de noblesse.",
		es: "Tan solo muestra su verdadero poder\na quienes no se amedrentan ante su\nnoble pero inquisitoria mirada.",
		it: "Dà il meglio di sé solo contro chi non\nresta intimidito dal suo nobile sguardo.",
		de: "Im Kampf zeigt es nur Gegnern, die seinem\nedlen Blick standhalten, seine wahre Kraft.",
		'pt-br': "Dá o máximo de si somente contra oponentes fortes\nque não são perturbados pelo brilho intenso dos olhos\nnobres de Serperior.",
		ko: "샤로다의 고상한 눈동자로\n쏘아보아도 태연할 정도로 강한\n상대에게만 진정한 실력을 발휘한다."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Jungle Totem"
		},

		effect: {
			en: "Each <span class=\"energy-text energy-text--type-grass\"></span> Energy attached to your <span class=\"energy-text energy-text--type-grass\"></span> Pokémon provides 2 <span class=\"energy-text energy-text--type-grass\"></span> Energy. This effect doesn't stack."
		}
	}],

	attacks: [{
		name: {
			en: "Solar Beam"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Star"
}

export default card
