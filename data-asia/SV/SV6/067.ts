import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "グラエナ",
		'zh-tw': "大狼犬",
		th: "กราเอนา"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "kawayoo",
	dexId: [262],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "遠くにいる 獲物の においを 嗅ぎつけると リーダーの 指示で 群れが いっせいに 動きはじめる。",
		'zh-tw': "當嗅到遠處有獵物的氣味， 群體就會遵從首領的指示， 一起展開行動。",
		th: "เมื่อได้กลิ่นของเหยื่อที่อยู่ไกลออกไป ฝูงจะเริ่มเคลื่อนไหวตามคำสั่งของจ่าฝูงอย่างพร้อมเพรียง"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "むれでかる",
			'zh-tw': "群起打獵",
			th: "ออกล่าเป็นฝูง"
		},

		damage: "30+",

		effect: {
			ja: "自分のベンチに「グラエナ」がいるなら、90ダメージ追加。",
			'zh-tw': "若自己的備戰區有「大狼犬」，則增加90點傷害。",
			th: "ถ้าบนเบนช์ฝ่ายเรามี [กราเอนา] อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 90"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "おいつめる",
			'zh-tw': "窮追不捨",
			th: "ไล่ต้อน"
		},

		damage: 60,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้"
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