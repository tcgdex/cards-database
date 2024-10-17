import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "旋轉洛托姆",
		'zh-cn': "旋轉洛托姆",
		ja: "スピンロトム"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "雖然能讓洛托姆鑽進去的 家電用品有好幾種， 但最先被研發出的是電風扇。",
		'zh-cn': "雖然能讓洛托姆鑽進去的 家電用品有好幾種， 但最先被研發出的是電風扇。",
		ja: "ロトムが 入れる 家電製品は いくつか あるが いちばん 初めに 開発されたのは 扇風機だ。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "風扇呼喚",
			'zh-cn': "風扇呼喚",
			ja: "ファンコール"
		},

		effect: {
			'zh-tw': "只有在自己的最初回合可使用1次。從自己的牌庫選擇最多3張HP為「100」以下的【無】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。在這個回合，若已經使出了其他的「風扇呼喚」，則這個特性無法使用。",
			'zh-cn': "只有在自己的最初回合可使用1次。從自己的牌庫選擇最多3張HP為「100」以下的【無】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。在這個回合，若已經使出了其他的「風扇呼喚」，則這個特性無法使用。",
			ja: "最初の自分の番にだけ1回使える。自分の山札から、HPが「100」以下のポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。この番、すでに別の「ファンコール」を使っていたなら、この特性は使えない。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "突擊著地",
			'zh-cn': "突擊著地",
			ja: "とつげきランディング"
		},

		effect: {
			'zh-tw': "若場上沒有競技場卡，則這個招式失敗。",
			'zh-cn': "若場上沒有競技場卡，則這個招式失敗。",
			ja: "場にスタジアムが出ていないなら、このワザは失敗。"
		},

		damage: 70,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [479]
}

export default card