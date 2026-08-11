import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ムウマ",
		'zh-tw': "夢妖",
		'th-th': "มูมา",
		'id-id': "Misdreavus"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [200],
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "真夜中 人を 驚かせては 怖がる心を 集めて 自分の エネルギーに している ポケモン。",
		'zh-tw': "會在半夜嚇唬人類，然後把收集到的恐懼之心 轉化成自身能量的寶可夢。",
		'th-th': "โปเกมอนที่หลอกให้ผู้คนตกใจในยามค่ำคืนเพื่อสะสมจิตใจที่หวาดกลัวแล้วนำมาเป็นพลังงานของตัวเอง",
		'id-id': "Misdreavus adalah Pokémon yang mengejutkan manusia saat tengah malam untuk mengumpulkan ketakutan mereka dan menjadikannya energi untuk dirinya sendiri."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'ja-jp': "さいみんはどう",
			'zh-tw': "催眠波動",
			'th-th': "คลื่นสะกดจิต",
			'id-id': "Aura Hipnotis"
		},

		damage: 10,

		effect: {
			'ja-jp': "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701088,
				tcgplayer: 568157,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card