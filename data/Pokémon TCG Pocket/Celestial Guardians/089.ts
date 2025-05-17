import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Cubone",
		fr: "Osselait",
		es: "Cubone",
		it: "Cubone",
		de: "Tragosso",
		'pt-br': "Cubone",
		ko: "탕구리"
	},

	illustrator: "kawayoo",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.",
		fr: "Lorsqu'il repense à sa mère défunte, ses sanglots résonnent\ntristement sous le crâne qu'il porte sur la tête.",
		es: "Cuando llora al acordarse de su madre fallecida, su\nllanto resuena en el cráneo que lleva en la cabeza.",
		it: "Quando piange pensando alla madre defunta,\ni suoi lamenti riecheggiano tristemente\nall'interno del teschio che ha in testa.",
		de: "Denkt Tragosso an seine verstorbene Mutter,\nso weint es. Sein Schluchzen hallt dabei in dem\nSchädel auf seinem Kopf klagend wider.",
		'pt-br': "Quando a memória de sua falecida mãe traz\nlágrimas aos seus olhos, seu choro ecoa com\ntristeza pelo crânio que usa em sua cabeça.",
		ko: "죽은 어머니를 떠올리며 울면\n머리에 쓴 뼈 안에서\n울음소리가 구슬프게 퍼진다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Beat",
			fr: "Bataille",
			es: "Toque",
			it: "Battuta",
			de: "Verprügler",
			'pt-br': "Pulso",
			ko: "때리기"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card