import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		es: "Charizard",
		it: "Charizard",
		de: "Glurak",
		'pt-br': "Charizard",
		ko: "리자몽"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage2",

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		it: "Charmeleon",
		pt: "Charmeleon",
		de: "Glutexo"
	},

	attacks: [{
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			en: "Fire Spin",
			fr: "Danse Flammes",
			es: "Giro Fuego",
			it: "Turbofuoco",
			de: "Feuerwirbel",
			'pt-br': "Chama Furacão",
			ko: "회오리불꽃"
		},

		effect: {
			en: "Discard 2 {R} Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies {R} de ce Pokémon.",
			es: "Descarta 2 Energías {R} de este Pokémon.",
			it: "Rimuovi 2 Energie {R} da questo Pokémon.",
			de: "Lege 2 {R}-Energien von diesem Pokémon ab.",
			'pt-br': "Descarte 2 Energias {R} deste Pokémon.",
			ko: "이 포켓몬에서 {R}에너지를 2개 트래쉬한다."
		},

		damage: "150"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
		fr: "Son souffle brûlant peut faire fondre la roche.\nIl est parfois la cause d'incendies de forêt.",
		es: "Escupe un fuego tan caliente que funde las\nrocas. Causa incendios forestales sin querer.",
		it: "Sputa fiamme incandescenti in grado di fondere\nle rocce. A volte causa incendi boschivi.",
		de: "Dieses Pokémon kann mit seinem\nFeueratem Felsen schmelzen.\nEs verursacht ab und zu Waldbrände.",
		'pt-br': "Cospe chamas quentes o bastante para\nderreter rochedos. Estas chamas podem\ncausar incêndios florestais.",
		ko: "암석도 태워버릴 정도로\n작열하는 화염을 뿜어\n산불을 일으킬 때가 있다."
	},

	boosters: ["charizard"]
}

export default card
