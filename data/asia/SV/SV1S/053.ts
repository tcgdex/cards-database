import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ハブネーク",
		'zh-tw': "飯匙蛇",
		'th-th': "ฮาบูเนค",
		'id-id': "Seviper"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [336],
	hp: 120,
	types: ["Darkness"],

	description: {
		'ja-jp': "硬い 岩で 刀の 尻尾を 研ぐ。 しげみに 隠れて 獲物に 近寄り 毒の キバで 襲う。",
		'zh-tw': "平時都用堅硬的岩石來打磨刀刃般的尾巴。會躲在樹叢裡， 然後趁獵物靠近時用毒牙襲擊。",
		'th-th': "ลับดาบที่หางด้วยโขดหินแข็ง ๆ ขยับเข้าใกล้เหยื่อในขณะที่ซ่อนตัวในพงหญ้า แล้วใช้เขี้ยวพิษจู่โจม",
		'id-id': "Seviper mengasah pedang di ekornya dengan batu keras. Pokémon ini bersembunyi, mendekati mangsanya melalui semak-semak, lalu menyerang mereka dengan taring beracunnya."
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
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ベノムショック",
			'zh-tw': "毒液衝擊",
			'th-th': "เวนอมช็อค",
			'id-id': "Venoshock"
		},

		damage: "60+",

		effect: {
			'ja-jp': "相手のバトルポケモンがどくなら、120ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加120點傷害。",
			'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ] การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			'id-id': "Jika Pokémon Bertarung lawan mengalami kondisi Racun, kerusakan yang diberikan bertambah sejumlah 120."
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
				cardmarket: 693020,
				tcgplayer: 567170,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card