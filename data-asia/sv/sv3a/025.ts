import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドンファン",
		'zh-tw': "頓甲"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [232],
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "硬い 皮膚に 覆われているので 車と ぶつかっても へっちゃら。 ただし 雨には めっぽう 弱い。",
		'zh-tw': "全身包裹著堅硬的皮膚，被車撞到也是毫髮無傷。 但是對雨水卻毫無招架之力。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "やまなだれ",
			'zh-tw': "山崩"
		},

		damage: 30,

		effect: {
			ja: "相手の山札を上から2枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方2張卡丟棄。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "だいかいてん",
			'zh-tw': "大迴轉"
		},

		damage: 160,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card