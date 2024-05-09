import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ウインディ"
	},

	illustrator: "SIE NANAHARA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [59],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "燃え盛る炎 牙に纏わせ 食らい付く。 体躯 大柄なれど 陽動 鮮やかなりて 敵 翻弄せしむる姿 演舞の如し。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Void"],

		name: {
			ja: "プライドファング"
		},

		damage: "30＋",

		effect: {
			ja: "自分のベンチポケモンにダメカンがのっているなら、90ダメージ追加。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "やきこがす"
		},

		damage: 90,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card