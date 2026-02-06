import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴニョニョ",
		'zh-tw': "咕妞妞",
		th: "โกเนียวเนียว"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [293],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "鳴きはじめると 自分の 声に 驚いて さらに 激しく 鳴く。 鳴き疲れると 眠ってしまう。",
		'zh-tw': "一旦叫了起來，就會被自己的聲音嚇到，然後用更大的聲音 大吼大叫。叫到累了就會睡著。",
		th: "พอเริ่มส่งเสียงร้องก็จะตกใจกับเสียงตัวเอง ทำให้ร้องดังมากขึ้น พอร้องจนเหนื่อยก็จะหลับไป"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "つきとばす",
			'zh-tw': "推倒",
			th: "ชนกระเด็น"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			th: "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ {ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้}"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741433
	}
}

export default card