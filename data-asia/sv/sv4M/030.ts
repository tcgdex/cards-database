import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "パンプジン",
		'zh-tw': "南瓜怪人"
	},

	illustrator: "nisimono",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [711],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "新月の 夜 玄関の ドアを パンプジンが ノックする。 開けた 人を あの世へ 連れて行くのだ。",
		'zh-tw': "南瓜怪人會在朔月的夜裡去別人家門口敲門。開了門的人會被牠帶往另一個世界。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "どっきりパンプキン",
			'zh-tw': "整人南瓜"
		},

		effect: {
			ja: "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、相手の手札からオモテを見ないで2枚選び、トラッシュする。",
			'zh-tw': "這隻寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，在不看正面的情況下，從對手的手牌選擇2張，將其丟棄。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "かげしばり",
			'zh-tw': "影子束縛"
		},

		damage: 100,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
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