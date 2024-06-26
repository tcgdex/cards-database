import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "叉字蝠"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "雙腳變成了翅膀。 能夠無聲無息地高速飛行， 用獠牙咬住獵物的後頸。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "怨影使者"
		},

		effect: {
			'zh-tw': "在這個回合，若從手牌使出了「‌阿杏的秘招」，則在自己的回合時可使用1次。從牌庫抽卡直到自己的手牌滿8張為止。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "劇毒牙"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為2個。"
		},

		damage: 120,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "H",
	rarity: "Uncommon"
}

export default card