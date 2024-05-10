import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "グラエナ",
		'zh-tw': "大狼犬"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "kawayoo",
	dexId: [262],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "遠くにいる 獲物の においを 嗅ぎつけると リーダーの 指示で 群れが いっせいに 動きはじめる。",
		'zh-tw': "當嗅到遠處有獵物的氣味， 群體就會遵從首領的指示， 一起展開行動。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "むれでかる",
			'zh-tw': "群起打獵"
		},

		damage: "30+",

		effect: {
			ja: "自分のベンチに「グラエナ」がいるなら、90ダメージ追加。",
			'zh-tw': "若自己的備戰區有「大狼犬」，則增加90點傷害。"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "おいつめる",
			'zh-tw': "窮追不捨"
		},

		damage: 60,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card