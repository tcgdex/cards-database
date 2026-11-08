import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "可多拉",
		'th-th': "โคโดรา",
		'ja-jp': "コドラ"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'zh-tw': "可多拉棲息的山區有豐富的泉水和鐵礦石， 因此常會與人類起紛爭。",
		'th-th': "ภูเขาที่โคโดราอาศัยอยู่อุดมไปด้วยน้ำแร่และแร่เหล็ก ดังนั้นจึงเคยเกิดการต่อสู้กับมนุษย์หลายครั้ง",
		'ja-jp': "コドラが 暮らす 山は 湧き水と 鉄鉱石が 豊富なので 人と 争いに なることも 多かった。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "正面對決",
			'th-th': "ตั้งใจสู้",
			'ja-jp': "がちんこ"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "亂暴",
			'th-th': "อาละวาดไม่เลิก",
			'ja-jp': "あばれまくる"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，將對手的牌庫上方與正面出現的次數相同數量的卡丟棄。",
			'th-th': "ทอยเหรียญจนกว่าจะออกก้อย ทิ้งการ์ดจากด้านบนของสำรับการ์ดฝ่ายตรงข้าม ตามจำนวนครั้งที่ออกหัว ที่ตำแหน่งทิ้งการ์ด",
			'ja-jp': "ウラが出るまでコインを投げ、オモテの数ぶん、相手の山札を上からトラッシュする。"
		},

		damage: 80,
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 680205,
				tcgplayer: 570124,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [305],
}

export default card