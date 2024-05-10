import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "イシズマイ",
		'zh-tw': "石居蟹",
		th: "อิชิซึไม"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	dexId: [557],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "家に ちょうどいい 小石が 見つからないと カバルドンの 穴に 棲んでしまうことも。",
		'zh-tw': "如果找不到大小合適的石頭來當成自己的家， 牠也會住到河馬獸的洞裡。",
		th: "ถ้าหากหาหินเล็กขนาดพอเหมาะที่จะทำเป็นที่อยู่ไม่ได้ บางทีก็จะเข้าไปอาศัยอยู่ในโพรงของคาบัลดอน"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "たたく",
			'zh-tw': "敲擊",
			th: "ตี"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card