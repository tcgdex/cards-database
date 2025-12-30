import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Kakuna",
		fr: "Coconfort",
		es: "Kakuna",
		it: "Kakuna",
		de: "Kokuna",
		'pt-br': "Kakuna",
		ko: "딱충이"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	evolveFrom: {
		en: "Weedle",
		fr: "Aspicot",
		es: "Weedle",
		it: "Weedle",
		pt: "Weedle",
		de: "Hornliu"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Bug Bite",
			fr: "Piqûre",
			es: "Picadura",
			it: "Coleomorso",
			de: "Käferbiss",
			'pt-br': "Picada",
			ko: "벌레먹기"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "Almost incapable of moving, this Pokémon can only harden its shell to protect itself when it is in danger.",
		fr: "Incapable de se déplacer de lui-même,\nil se défend en durcissant sa carapace.",
		es: "Casi incapaz de moverse, este Pokémon solo\npuede endurecer su caparazón para protegerse.",
		it: "Quasi incapace di muoversi, questo Pokémon può\nsolo indurire il proprio guscio per proteggersi.",
		de: "Dieses Pokémon kann sich kaum bewegen.\nBei drohender Gefahr verhärtet es seinen Panzer.",
		'pt-br': "Quase incapaz de se mover, esse Pokémon\npode apenas endurecer sua carapaça para\nse proteger quando está em perigo.",
		ko: "스스로는 거의 움직일 수 없지만\n위험할 때는 단단해져서\n몸을 보호하고 있는 것 같다."
	},

	boosters: ["mewtwo"]
}

export default card
