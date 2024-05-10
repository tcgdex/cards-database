import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "チャデス",
		'zh-tw': "斯魔茶",
		th: "ฉะเดธ"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "Common",
	category: "Pokemon",
	dexId: [1012],
	hp: 30,
	types: ["Grass"],

	description: {
		ja: "ヤバチャの リージョンフォームに 見えるが まったく 関係のない ポケモンと 最近 判明した。",
		'zh-tw': "雖然這種寶可夢看起來像是 來悲茶的地區型態，但最近 被發現其實兩者毫無關係。",
		th: "แม้จะดูเหมือนฟอร์มตามภูมิภาคของยาบาฉะ แต่ไม่นานมานี้มีการค้นพบแล้วว่า มันเป็นโปเกมอนที่ไม่เกี่ยวข้องกันโดยสิ้นเชิง"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "くらがくれ",
			'zh-tw': "藏隱",
			th: "ซ่อนในคลัง"
		},

		effect: {
			ja: "このポケモンは、ベンチにいるかぎり、相手のポケモンからワザのダメージや効果を受けない。",
			'zh-tw': "只要這隻寶可夢在備戰區，不會受到對手的寶可夢招式的傷害與效果的影響。",
			th: "โปเกมอนนี้ ตราบใดที่ยังอยู่บนเบนช์ จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม"
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ひっかける",
			'zh-tw': "鉤住",
			th: "จับแขวน"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card