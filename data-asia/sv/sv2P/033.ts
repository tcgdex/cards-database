import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴチルゼル",
		'zh-tw': "哥德小姐"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [576],
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーを 放ち 相手に 宇宙が 終わる 夢を 見せる。 それは 儚く 美しいらしい。",
		'zh-tw': "會釋放出精神力量，讓對手夢見宇宙終結的夢。 內容似乎既虛幻又美麗。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ほしよみ",
			'zh-tw': "讀星"
		},

		effect: {
			ja: "自分の番に1回使える。相手の山札を上から2枚見て、どちらか1枚を選び、山札の上にもどす。残りのカードは、山札の下にもどす。",
			'zh-tw': "在自己的回合時可使用1次。查看對手的牌庫上方2張卡，選擇其中1張，放回牌庫上方。將剩餘卡放回牌庫下方。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "サイコアウト",
			'zh-tw': "精神出局"
		},

		damage: 120,

		effect: {
			ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card