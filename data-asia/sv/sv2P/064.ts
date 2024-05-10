import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アオガラス",
		'zh-tw': "藍鴉"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [822],
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "高い 知能を 有するのは 脳みそが ほかの 鳥ポケモンに 比べて 大きいためと 言われる。",
		'zh-tw': "人們認為牠會擁有高度智慧，是因為相較於其他鳥寶可夢， 牠的腦子是比較大的。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かっくう",
			'zh-tw': "滑翔"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "わしづかみ",
			'zh-tw': "緊抓"
		},

		damage: 70,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card