import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

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

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		en: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
		fr: "Il préfère ce qui est chaud. En cas de pluie,\nde la vapeur se forme autour de sa queue.",
		es: "Prefiere las cosas calientes. Dicen que cuando\nllueve le sale vapor de la punta de la cola.",
		it: "Ama le cose calde. Si dice che quando piove\ngli esca vapore dalla punta della coda.",
		de: "Dieses Pokémon bevorzugt heiße Dinge.\nBei Regen soll seine Schwanzspitze dampfen.",
		'pt-br': "Prefere coisas quentes. Quando chove, dizem\nque solta vapor pela ponta de sua cauda.",
		ko: "뜨거운 것을 좋아하는 성격이다.\n비에 젖으면 꼬리 끝에서\n연기가 난다고 한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			it: "Fuoco Continuo",
			de: "Glühen",
			'pt-br': "Combustão",
			ko: "화염"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Shiny"
}

export default card