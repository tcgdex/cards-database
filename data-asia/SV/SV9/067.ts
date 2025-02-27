import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "マギアナ",
		'zh-tw': "瑪機雅娜",
		'zh-cn': "瑪機雅娜"
	},

	illustrator: "rika",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [801],
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "およそ ５００年前 科学者に よって 作られた。 ソウルハートと 呼ばれる パーツが 本体なのだ。",
		'zh-tw': "由大約５００年前的 科學家所製造。 本體是被稱為魂心的零件。",
		'zh-cn': "由大約５００年前的 科學家所製造。 本體是被稱為魂心的零件。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "オートヒール",
			'zh-tw': "自動治癒",
			'zh-cn': "自動治癒"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、自分の手札からエネルギーをポケモンにつけるたび、そのポケモンのHPを「90」回復する。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，每次從自己的手牌將能量卡附於寶可夢身上時，將那隻寶可夢恢復「90」HP。",
			'zh-cn': "只要這隻寶可夢在戰鬥場上，每次從自己的手牌將能量卡附於寶可夢身上時，將那隻寶可夢恢復「90」HP。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "スパイクドロー",
			'zh-tw': "扣殺抽出",
			'zh-cn': "扣殺抽出"
		},

		damage: 20,

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。",
			'zh-cn': "從自己的牌庫抽出2張卡。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card