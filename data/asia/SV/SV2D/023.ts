import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ズピカ",
		'zh-tw': "光蚪仔",
		'th-th': "ซุพีคา",
		'id-id': "Tadbulb"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [938],
	hp: 50,
	types: ["Lightning"],

	description: {
		'ja-jp': "尻尾を 振って 発電する。 危険を 感じると 頭を 点滅させて 仲間に 伝える。",
		'zh-tw': "會搖尾巴來發電。感覺到有危險時， 會閃爍頭部通知夥伴。",
		'th-th': "แกว่งหางเพื่อผลิตไฟฟ้า เมื่อรู้สึกถึงอันตรายจะทำให้ไฟบนหัวกะพริบเพื่อแจ้งพวกพ้อง",
		'id-id': "Tadbulb menghasilkan listrik dengan menggoyangkan ekornya. Ketika merasakan adanya bahaya, Pokémon ini memberitahukan sesamanya dengan mengedipkan cahaya kepalanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'ja-jp': "でんじは",
			'zh-tw': "電磁波",
			'th-th': "คลื่นแม่เหล็กไฟฟ้า",
			'id-id': "Gelombang Elektromagnetik"
		},

		damage: 10,

		effect: {
			'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
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
				cardmarket: 705327,
				tcgplayer: 565885,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card