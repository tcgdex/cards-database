import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ロズレイド",
		'zh-tw': "羅絲雷朵",
		th: "โรสเรด"
	},

	illustrator: "Gapao",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [407],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "かぐわしい 花の 香りで 相手を 惑わせ いばらの ムチで 激しく 打ちつける。",
		'zh-tw': "會用馥郁芬芳的花香迷惑敵人，並用荊棘上 的鞭子猛力抽打對方。",
		th: "ทำให้ฝ่ายตรงข้ามหลงด้วยกลิ่นดอกไม้หอมรัญจวน แล้วตีอย่างรุนแรงด้วยแส้จากพุ่มไม้"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "どくのトゲ",
			'zh-tw': "毒刺",
			th: "หนามพิษ"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをどくにする。",
			'zh-tw': "這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害時，將使用招式的寶可夢【中毒】。",
			th: "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม ทำให้โปเกมอนที่ใช้ท่าต่อสู้เป็นสภาวะ[พิษ]"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "しばりつける",
			'zh-tw': "束縛",
			th: "มัดยึด"
		},

		damage: 70,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card