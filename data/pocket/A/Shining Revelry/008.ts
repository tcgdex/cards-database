import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'it-it': "Charmander",
		'de-de': "Glumanda",
		'pt-br': "Charmander",
		'ko-kr': "파이리"
	},

	illustrator: "Megumi Mizutani",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [4],
	hp: 60,
	types: ["Fire"],

	description: {
		'en-us': "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
		'fr-fr': "Il préfère ce qui est chaud. En cas de pluie,\nde la vapeur se forme autour de sa queue.",
		'es-es': "Prefiere las cosas calientes. Dicen que cuando\nllueve le sale vapor de la punta de la cola.",
		'it-it': "Ama le cose calde. Si dice che quando piove\ngli esca vapore dalla punta della coda.",
		'de-de': "Dieses Pokémon bevorzugt heiße Dinge.\nBei Regen soll seine Schwanzspitze dampfen.",
		'pt-br': "Prefere coisas quentes. Quando chove, dizem\nque solta vapor pela ponta de sua cauda.",
		'ko-kr': "뜨거운 것을 좋아하는 성격이다.\n비에 젖으면 꼬리 끝에서\n연기가 난다고 한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'de-de': "Glühen",
			'pt-br': "Combustão",
			'ko-kr': "화염"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card