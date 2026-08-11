import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冰鬼護",
		'th-th': "โอนิโกริ",
		'ja-jp': "オニゴーリ"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "擁有火焰也無法融化的冰之軀體。能讓空氣中的 水分在一瞬間凍結。",
		'th-th': "ร่างน้ำแข็งที่ไม่ละลายแม้โดนไฟ สามารถทำให้น้ำในอากาศแข็งได้ในพริบตา",
		'ja-jp': "炎でも 溶けない 氷の 体。 空気中の 水分を 一瞬で 凍らせてしまう。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "咬住",
			'th-th': "กัดติด",
			'ja-jp': "かみつく"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "大嘴",
			'th-th': "บิ๊กเมาท์",
			'ja-jp': "ビッグマウス"
		},

		effect: {
			'zh-tw': "在這個回合，若從手牌使出了「小菘」，則增加130點傷害。",
			'th-th': "เทิร์นนี้ ถ้านำการ์ด [ซุซุนะ] จากบนมือออกมาใช้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 130",
			'ja-jp': "この番、手札から「スズナ」を出して使っていたなら、130ダメージ追加。"
		},

		damage: "130＋",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 680159,
				tcgplayer: 570078,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [362],
}

export default card