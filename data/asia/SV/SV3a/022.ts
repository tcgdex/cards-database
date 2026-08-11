import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "グライガー",
		'zh-tw': "天蠍",
		'th-th': "ไกลกา"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [207],
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "顔面 めがけて 飛んでくる。 張りつかれた 獲物が 驚く あいだに 毒針を 刺しこむ。",
		'zh-tw': "會朝著獵物迎面飛來， 然後趁著被纏上的獵物 驚慌失措時刺入毒針。",
		'th-th': "เล็งไปที่ใบหน้าแล้วบินเข้ามา จะแทงเข็มพิษเข้าไประหว่างที่เหยื่อถูกขึงติดไว้ตกใจ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "どくどく",
			'zh-tw': "劇毒",
			'th-th': "มหาพิษ"
		},

		effect: {
			'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は2個になる。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為2個。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ] จำนวนตัวนับแดเมจที่วางด้วยสภาวะ[พิษ]นี้จะเป็น 2 ตัว"
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
				cardmarket: 734261,
				tcgplayer: 566880,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card