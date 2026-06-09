import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ルナトーン",
		'zh-tw': "月石",
		th: "ลูนาโทน"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [337],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "４０年前に 隕石の 落ちた 場所で 初めて 見つかった。 にらむ だけで 敵を 眠らせる。",
		'zh-tw': "在４０年前隕石墜落的地點第一次被發現。瞪一眼就能使敵人沉睡。",
		th: "ถูกพบครั้งแรกในสถานที่ที่อุกกาบาตตกเมื่อ 40 ปีก่อน ทำให้ศัตรูหลับได้เพียงแค่จ้องตา"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "しんげつ",
			'zh-tw': "新月",
			th: "จันทร์ดับ"
		},

		effect: {
			ja: "自分の場に「ソルロック」がいるなら、はたらく。このポケモンがいるかぎり、自分のポケモン全員は、スタジアムの効果を受けない。",
			'zh-tw': "若自己的場上有「太陽岩」則生效。只要這隻寶可夢在場上，自己的所有寶可夢不會受到競技場卡的效果的影響。",
			th: "จะทำงาน ถ้าบนกระดานฝ่ายเรามี [โซลร็อก] อยู่ ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนฝ่ายเราทุกตัว จะไม่ได้รับเอฟเฟกต์ของการ์ดสเตเดียม"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ムーンプレス",
			'zh-tw': "月球壓制",
			th: "มูนเพรส"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 723988
	}
}

export default card