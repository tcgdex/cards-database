import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "キリンリキ",
		'zh-tw': "麒麟奇",
		'th-th': "คิรินริกิ",
		'id-id': "Girafarig"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [203],
	hp: 100,
	types: ["Colorless"],

	description: {
		'ja-jp': "尻尾の 脳は とても 小さいが 強力な エスパーパワーを 発揮する 大事な 器官なのだ。",
		'zh-tw': "尾巴上的腦雖然很小，但卻是可以發揮出 強大超能力的重要器官。",
		'th-th': "สมองที่หางเล็กมากก็จริง แต่เป็นอวัยวะสำคัญที่ใช้ในการสำแดงพลังจิตอันทรงพลัง",
		'id-id': "Meskipun sangat kecil, otak pada ekor Girafarig adalah organ penting yang menghasilkan kekuatan psikokinesis yang kuat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ねんりき",
			'zh-tw': "念力",
			'th-th': "จิตตานุภาพ",
			'id-id': "Psikokinesis"
		},

		damage: 30,

		effect: {
			'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ヘッドバング",
			'zh-tw': "鐵頭碰",
			'th-th': "เฮดแบงก์",
			'id-id': "Hantaman Kepala"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705363,
				tcgplayer: 565921,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card