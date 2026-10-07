import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [753],
	rarity: "Common",
	set: Set,

	name: {
		ja: "カリキリ",
		'zh-tw': "偽螳草",
		th: "คาริคิริ"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "お日様の 光が 大好き。 しっかり 日光浴を することで 色鮮やかに 育っていくのだ。",
		'zh-tw': "最喜歡太陽光。會透過充分沐浴陽光，讓自己長得色彩鮮豔。",
		th: "ชอบแสงอาทิตย์เป็นอย่างยิ่ง จึงเลี้ยงให้มีสีสันสดใสได้ด้วยการให้อาบแดด"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "れんぞくスラッシュ",
			'zh-tw': "連續斬",
			th: "สแลชต่อเนื่อง"
		},

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×20ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×20點傷害。",
			th: "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับ จำนวนครั้งที่ออกหัว x20"
		},

		damage: "20×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533612, tcgplayer: 569049, cardtrader: 240006 } }
	]
}

export default card