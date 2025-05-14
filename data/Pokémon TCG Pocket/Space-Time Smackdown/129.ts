import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
		es: "Porygon-Z",
		it: "Porygon-Z",
		de: "Porygon-Z",
		'pt-br': "Porygon-Z",
		ko: "폴리곤Z"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Porygon2"
	},

	description: {
		en: "Porygon-Z had a program installed to allow it to move between dimensions, but the program also caused instability in Porygon-Z's behavior.",
		fr: "Depuis qu'on lui a ajouté un programme\npermettant de voyager entre les dimensions,\nson comportement est devenu instable.",
		es: "Se le instaló un software que le permite entrar\ny salir de otras dimensiones, pero que provocó\nque su comportamiento se volviese inestable.",
		it: "Da quando gli è stato installato un programma che gli permette\ndi viaggiare in altre dimensioni, mostra un comportamento instabile.",
		de: "Seit eine neue Software installiert wurde, die es\nzu interdimensionalen Reisen befähigen sollte,\nwurde sein Verhalten instabil.",
		'pt-br': "Porygon-Z tem um programa instalado permitindo\nque se desloque entre dimensões. Porém, este programa\ncausou uma certa instabilidade em seu comportamento.",
		ko: "다른 공간에 드나들 수 있는\n프로그램을 추가한 결과\n움직임이 불안정해졌다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Buggy Beam"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Change the type of the next Energy that will be generated for your opponent to 1 of the following at random: <span class=\"energy-text energy-text--type-grass\"></span>, <span class=\"energy-text energy-text--type-fire\"></span>, <span class=\"energy-text energy-text--type-water\"></span>, <span class=\"energy-text energy-text--type-lightning\"></span>, <span class=\"energy-text energy-text--type-psychic\"></span>, <span class=\"energy-text energy-text--type-fighting\"></span>, <span class=\"energy-text energy-text--type-darkness\"></span>, or <span class=\"energy-text energy-text--type-metal\"></span>."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card
