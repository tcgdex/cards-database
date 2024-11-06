import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "アイアントex",
		'zh-tw': "鐵蟻ex",
		'zh-cn': "鐵蟻ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いきなりけずる",
			'zh-tw': "突然削退",
			'zh-cn': "突然削退"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手の山札を上から1枚トラッシュする。",
			'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。將對手的牌庫上方1張卡丟棄。",
			'zh-cn': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。將對手的牌庫上方1張卡丟棄。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "リベンジクラッシュ",
			'zh-tw': "復仇粉碎",
			'zh-cn': "復仇粉碎"
		},

		damage: "120+",

		effect: {
			ja: "相手がすでにとったサイドの枚数×30ダメージ追加。",
			'zh-tw': "增加對手已經獲得的獎賞卡的張數×30點傷害。",
			'zh-cn': "增加對手已經獲得的獎賞卡的張數×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card