import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		it: "Charmander",
		de: "Glumanda",
		'pt-br': "Charmander",
		ko: "파이리"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Ember",
			fr: "Flammèche",
			es: "Ascuas",
			it: "Braciere",
			de: "Glut",
			'pt-br': "Brasa",
			ko: "불꽃세례"
		},

		effect: {
			en: "Discard a {R} Energy from this Pokémon.",
			fr: "Défaussez une Énergie {R} de ce Pokémon.",
			es: "Descarta Energía {R} de este Pokémon.",
			it: "Rimuovi un'Energia {R} da questo Pokémon.",
			de: "Lege R-Energie von diesem Pokémon ab.",
			'pt-br': "Descarte Energia {R} deste Pokémon.",
			ko: "이 포켓몬에서 R에너지를 개 트래쉬한다."
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Star",

	description: {
		en: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
		fr: "Il préfère ce qui est chaud. En cas de pluie,\nde la vapeur se forme autour de sa queue.",
		es: "Prefiere las cosas calientes. Dicen que cuando\nllueve le sale vapor de la punta de la cola.",
		it: "Ama le cose calde. Si dice che quando piove\ngli esca vapore dalla punta della coda.",
		de: "Dieses Pokémon bevorzugt heiße Dinge.\nBei Regen soll seine Schwanzspitze dampfen.",
		'pt-br': "Prefere coisas quentes. Quando chove, dizem\nque solta vapor pela ponta de sua cauda.",
		ko: "뜨거운 것을 좋아하는 성격이다.\n비에 젖으면 꼬리 끝에서\n연기가 난다고 한다."
	}
}

export default card
