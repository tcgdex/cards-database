import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "カイデン",
		'zh-tw': "電海燕",
		th: "ไคเด็น"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Teeziro",
	dexId: [940],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "海岸の 崖に 巣を 作る。 巣は パチパチ 弾ける 不思議な 食感で 人気の 珍味。",
		'zh-tw': "會在海岸的懸崖上築巢。 吃起來劈哩啪啦跳的神奇口感， 讓牠的巢成了受歡迎的珍奇美食。",
		th: "สร้างรังบนหน้าผาริมชายฝั่ง รังของมันเป็นอาหารแสนโอชะและเป็นที่นิยมเนื่องจากเนื้อสัมผัสประหลาดที่จะแตกเปรี๊ยะภายในปาก"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "でんきショック",
			'zh-tw': "電擊",
			th: "ช็อกไฟฟ้า"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]"
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
	regulationMark: "H"
}

export default card