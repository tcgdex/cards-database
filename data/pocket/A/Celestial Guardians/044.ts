import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lapras",
		'fr-fr': "Lokhlass",
		'es-es': "Lapras",
		'it-it': "Lapras",
		'de-de': "Lapras",
		'pt-br': "Lapras",
		'ko-kr': "라프라스"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [131],
	hp: 110,
	types: ["Water"],

	description: {
		'en-us': "A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.",
		'fr-fr': "C'est un Pokémon doux et intelligent.\nIl vogue sur la mer en émettant un chant\nmagnifique.",
		'es-es': "Este Pokémon posee una notable inteligencia\ny un corazón de oro. Entona un canto\nmelodioso mientras surca el mar.",
		'it-it': "È un Pokémon intelligente e dall'animo\ngentile. Solca i mari facendo riecheggiare\nil suo canto dolce e melodioso.",
		'de-de': "Ein intelligentes und herzensgutes Pokémon.\nWährend es auf dem Meer schwimmt, lässt es\nseinen herrlichen Gesang erklingen.",
		'pt-br': "Este Pokémon esperto e bondoso flutua\nna superfície do oceano, enquanto sua\nlinda canção ecoa ao redor.",
		'ko-kr': "영리하고 마음 착한 포켓몬.\n아름다운 소리로 노래 부르며\n바다 위를 헤엄친다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'es-es': "Surf",
			'it-it': "Surf",
			'de-de': "Surfer",
			'pt-br': "Surfar",
			'ko-kr': "파도타기"
		},

		damage: 70,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo", "lunala"]
}

export default card