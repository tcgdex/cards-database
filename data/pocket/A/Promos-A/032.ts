import { Card } from "models/database/card"
import Set from "../Promos-A"
const card: Card = {
	set: Set,

	name: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'it-it': "Charmander",
		'de-de': "Glumanda",
		'ko-kr': "파이리",
		'pt-br': "Charmander"
	},

	illustrator: "Naoyo Kimura",
	rarity: "None",
	category: "Pokemon",

	dexId: [4],
	hp: 60,
	types: ["Fire"],

	description: {
		'en-us': "It has a preference for hot things. When it rains,\nsteam is said to spout from the tip of its tail.",
		'fr-fr': "Il préfère ce qui est chaud. En cas de pluie,\nde la vapeur se forme autour de sa queue.",
		'es-es': "Prefiere las cosas calientes. Dicen que cuando\nllueve le sale vapor de la punta de la cola.",
		'it-it': "Ama le cose calde. Si dice che quando piove\ngli esca vapore dalla punta della coda.",
		'de-de': "Dieses Pokémon bevorzugt heiße Dinge.\nBei Regen soll seine Schwanzspitze dampfen.",
		'ko-kr': "뜨거운 것을 좋아하는 성격이다.\n비에 젖으면 꼬리 끝에서\n연기가 난다고 한다.",
		'pt-br': "Prefere coisas quentes. Quando chove, dizem\nque solta vapor pela ponta de sua cauda."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Ember",
			'fr-fr': "Flammèche",
			'es-es': "Ascuas",
			'it-it': "Braciere",
			'de-de': "Glut",
			'ko-kr': "불꽃세례",
			'pt-br': "Brasa"
		},
		damage: 30,
		cost: ["Fire"],
		effect: {
			'en-us': "Discard a {R} Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie {R} de ce Pokémon.",
			'es-es': "Descarta 1 Energía {R} de este Pokémon.",
			'it-it': "Rimuovi un'Energia {R} da questo Pokémon.",
			'de-de': "Lege 1 {R}-Energie von diesem Pokémon ab.",
			'ko-kr': "이 포켓몬에서 {R}에너지를 1개 트래쉬한다.",
			'pt-br': "Descarte 1 Energia {R} deste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: []
}
export default card