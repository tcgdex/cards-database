import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ウインディ",
		'zh-tw': "洗翠 風速狗"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [59],
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		ja: "ヒスイ ガーディ"
	},

	description: {
		ja: "燃え盛る炎 牙に纏わせ 食らい付く。 体躯 大柄なれど 陽動 鮮やかなりて 敵 翻弄せしむる姿 演舞の如し。",
		'zh-tw': "將猛烈燃燒的火焰纏繞在牙齒上撲向獵物。雖然體型很大，卻能以靈巧的假動作戲弄敵手，那姿態就像是舞蹈一般。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "ロックスマッシュ",
			'zh-tw': "岩石粉碎"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			ja: "しゃくねつのつの",
			'zh-tw': "灼熱之角"
		},

		effect: {
			ja: "このポケモンに{R}エネルギーがついているなら、80ダメージ追加し、相手のバトルポケモンをやけどにする。",
			'zh-tw': "若這隻寶可夢身上附有【火】能量，則增加80點傷害，並將對手的戰鬥寶可夢【灼傷】。"
		},

		damage: "80+",
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650998,
				tcgplayer: 569785,
				cardtrader: 234096,
			},
		},
	]
}

export default card