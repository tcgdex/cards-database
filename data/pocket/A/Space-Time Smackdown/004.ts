import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

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

	illustrator: "Narumi Sato",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [114],
	hp: 70,
	types: ["Grass"],

	description: {
		'en-us': "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon's true appearance remains a mystery.",
		'fr-fr': "On ne sait toujours pas ce qui se cache sous ses lianes.\nMême si on les coupe, elles repoussent à l'infini.",
		'es-es': "Sus lianas no dejan de crecer aunque se le desprendan.\nAún se desconoce qué aspecto tiene sin ellas.",
		'it-it': "Non è ancora chiaro quale sia il vero aspetto\ncelato dietro alle sue liane, che crescono\nall'infinito anche dopo essere state recise.",
		'de-de': "Seine wahre Gestalt ist weiterhin ein Mysterium,\nda sie von Ranken verdeckt wird, die unaufhörlich\nnachwachsen, selbst wenn sie abreißen.",
		'pt-br': "Esconde-se sob um emaranhado de trepadeiras que\ncrescem sem parar mesmo se forem arrancadas.\nA verdadeira aparência deste Pokémon permanece um mistério.",
		'ko-kr': "잘려도 잘려도 무한으로 늘어나는\n덩굴 속의 정체는\n아직 밝혀지지 않았다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Vine Whip",
			'fr-fr': "Fouet Lianes",
			'es-es': "Látigo Cepa",
			'it-it': "Frustata",
			'de-de': "Rankenhieb",
			'pt-br': "Chicote de Vinha",
			'ko-kr': "덩굴채찍"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
