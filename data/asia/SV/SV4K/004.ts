import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "イシズマイ",
		'zh-tw': "石居蟹",
		'th-th': "อิชิซึไม",
		'ko-kr': "돌살이"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	dexId: [557],
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "家に ちょうどいい 小石が 見つからないと カバルドンの 穴に 棲んでしまうことも。",
		'zh-tw': "如果找不到大小合適的石頭來當成自己的家， 牠也會住到河馬獸的洞裡。",
		'th-th': "ถ้าหากหาหินเล็กขนาดพอเหมาะที่จะทำเป็นที่อยู่ไม่ได้ บางทีก็จะเข้าไปอาศัยอยู่ในโพรงของคาบัลดอน",
		'ko-kr': "집으로 삼기 딱 좋은 돌멩이를 발견하지 못하면 하마돈의 구멍에 살기도 한다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "たたく",
			'zh-tw': "敲擊",
			'th-th': "ตี",
			'ko-kr': "때리기"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 741201,
				tcgplayer: 565759,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card