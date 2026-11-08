import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ユキノオー",
		'zh-tw': "暴雪王",
		'th-th': "ยูกิโนะโอ",
		'id-id': "Abomasnow"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	dexId: [460],
	hp: 150,
	types: ["Grass"],

	description: {
		'ja-jp': "万年雪が 積もる 山脈で 静かに 暮らす。 ブリザードを 発生させて 姿を 隠す。",
		'zh-tw': "在萬年積雪的山脈靜靜生活。會引發 暴風雪來隱藏自己。",
		'th-th': "อาศัยอยู่ในเทือกเขาที่ปกคลุมไปด้วยหิมะหมื่นปีอย่างเงียบ ๆ จะก่อพายุหิมะขึ้นมาเพื่อซ่อนตัว",
		'id-id': "Abomasnow tinggal di pegunungan yang diselimuti oleh salju abadi. Pokémon ini menciptakan badai salju untuk menyembunyikan wujudnya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "いてつくわざわい",
			'zh-tw': "嚴寒降災",
			'th-th': "หายนะเยือกแข็ง",
			'id-id': "Malapetaka Pembeku"
		},

		effect: {
			'ja-jp': "このポケモンがいるかぎり、おたがいのポケモン全員のHPは、回復しない。",
			'zh-tw': "只要這隻寶可夢在場上，雙方的所有寶可夢的HP無法恢復。",
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่ จะฟื้นฟู HP ของโปเกมอนของทั้งสองฝ่ายทุกตัวไม่ได้",
			'id-id': "Selama Pokémon ini ada di Arena, HP semua Pokémon kedua pemain tidak dapat dipulihkan."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'ja-jp': "マグナムパンチ",
			'zh-tw': "增量拳",
			'th-th': "แมกนัมพันช์",
			'id-id': "Magnum Punch"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746213,
				tcgplayer: 567361,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card