import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "マッギョ",
		'zh-tw': "泥巴魚",
		'th-th': "มักเกียว"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [618],
	hp: 120,
	types: ["Fighting"],

	description: {
		'ja-jp': "体の 黄色い 模様から 強い 電気を 放つとき なぜか すこし 微笑んでいる。",
		'zh-tw': "當從身上的黃色斑紋裡釋放出強大電流時，牠會莫名地露出微笑。",
		'th-th': "ไม่รู้ว่าทำไมจะต้องยิ้มอยู่เล็กน้อย เวลาปล่อยไฟฟ้าอันรุนแรงออกจากลวดลายสีเหลืองบนร่างกาย"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "カスタムトラップ",
			'zh-tw': "特製陷阱",
			'th-th': "คัสตอมแทรป"
		},

		effect: {
			'ja-jp': "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、このポケモンに「ポケモンのどうぐ」がついているなら、ワザを使ったポケモンにダメカンを5個のせる。",
			'zh-tw': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，若這隻寶可夢身上附有「寶可夢道具」卡，則在使用招式的寶可夢身上放置5個傷害指示物。",
			'th-th': "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม ถ้าโปเกมอนนี้มี [ไอเท็มติดโปเกมอน] ติดอยู่ วางตัวนับแดเมจ 5 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้"
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "じひびき",
			'zh-tw': "地鳴",
			'th-th': "พสุธากัมปนาท"
		},

		damage: 30,

		effect: {
			'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 724006,
				tcgplayer: 567013,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card