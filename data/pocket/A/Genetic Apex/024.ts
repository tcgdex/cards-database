import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
		'es-es': "Tangela",
		'it-it': "Tangela",
		'de-de': "Tangela",
		'pt-br': "Tangela",
		'ko-kr': "덩쿠리"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",

	dexId: [114],
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Absorb",
			'fr-fr': "Vole-Vie",
			'es-es': "Absorber",
			'it-it': "Assorbimento",
			'de-de': "Absorber",
			'pt-br': "Absorção",
			'ko-kr': "흡수"
		},

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
			'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
			'es-es': "Cura 10 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 10 danni.",
			'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon.",
			'ko-kr': "이 포켓몬의 HP를 10회복."
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		'en-us': "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon's true appearance remains a mystery.",
		'fr-fr': "On ne sait toujours pas ce qui se cache sous ses lianes.\nMême si on les coupe, elles repoussent à l'infini.",
		'es-es': "Sus lianas no dejan de crecer aunque se le desprendan.\nAún se desconoce qué aspecto tiene sin ellas.",
		'it-it': "Non è ancora chiaro quale sia il vero aspetto\ncelato dietro alle sue liane, che crescono\nall'infinito anche dopo essere state recise.",
		'de-de': "Seine wahre Gestalt ist weiterhin ein Mysterium,\nda sie von Ranken verdeckt wird, die unaufhörlich\nnachwachsen, selbst wenn sie abreißen.",
		'pt-br': "Esconde-se sob um emaranhado de trepadeiras que\ncrescem sem parar mesmo se forem arrancadas.\nA verdadeira aparência deste Pokémon permanece um mistério.",
		'ko-kr': "잘려도 잘려도 무한으로 늘어나는\n덩굴 속의 정체는\n아직 밝혀지지 않았다."
	},

	boosters: ["charizard"]
}

export default card
