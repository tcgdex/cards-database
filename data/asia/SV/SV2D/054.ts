import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "シルシュルー",
		'zh-tw': "滋汁鼴",
		'th-th': "ชิรุชูลู",
		'id-id': "Shroodle"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	dexId: [944],
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "温厚だが 怒らせると 毒が 染みこんだ 鋭い 前歯で 咬みつき 痺れさせてくるぞ。",
		'zh-tw': "雖然性情溫馴，但一旦被激怒，就會用滲入了毒素的尖銳門牙 過來咬住你，讓你全身麻痺不已。",
		'th-th': "มีนิสัยอ่อนโยน แต่ถ้าโกรธขึ้นมาจะใช้ฟันหน้าอันแหลมคมที่ชุ่มไปด้วยพิษกัดและทำให้อีกฝ่ายตัวชา",
		'id-id': "Walaupun ramah, Shroodle akan menggigit dan melumpuhkan siapa pun yang membuatnya marah dengan gigi depan tajam berlumur racun miliknya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "どくえき",
			'zh-tw': "毒液",
			'th-th': "ของเหลวพิษ",
			'id-id': "Cairan Racun"
		},

		effect: {
			'ja-jp': "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705358,
				tcgplayer: 565916,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card