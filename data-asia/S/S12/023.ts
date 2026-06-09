import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "凱路迪歐",
		th: "เคลดิโอ",
		ja: "ケルディオ"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "透過下定決心來讓全身充滿力量並變得敏捷。 當跳躍起來的時候能看到殘影。",
		th: "เมื่อเตรียมใจได้แล้ว พลังจะเอ่อล้นทั่วกายจนเคลื่อนไหวได้อย่างว่องไว พอกระโดดแล้วจะเห็นภาพค้างติดตา",
		ja: "覚悟を 決めることで 全身に 力が みなぎって 素早くなり 飛び跳ねると 残像が みえる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "飛濺",
			th: "สแปลช",
			ja: "スプラッシュ"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "同心協力",
			th: "สี่รวมเป็นหนึ่ง",
			ja: "フォーアズワン"
		},

		effect: {
			'zh-tw': "若自己的備戰區有「勾帕路翁」「代拉基翁」「畢力吉翁」，則增加170點傷害。",
			th: "ถ้าบนเบนช์ฝ่ายเรามี [โคบัลออน] [เทราคิออน] [วิริซิออน] อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 170",
			ja: "自分のベンチに「コバルオン」「テラキオン」「ビリジオン」がいるなら、170ダメージ追加。"
		},

		damage: "50＋",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [647],

	thirdParty: {
		cardmarket: 680162
	}
}

export default card