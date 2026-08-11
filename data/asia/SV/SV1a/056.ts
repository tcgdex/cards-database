import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ハブネーク",
		'zh-tw': "飯匙蛇",
		'th-th': "ฮาบูเนค",
		'id-id': "Seviper"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [336],
	hp: 110,
	types: ["Darkness"],

	description: {
		'ja-jp': "硬い 岩で 刀の 尻尾を 研ぐ。 しげみに 隠れて 獲物に 近寄り 毒の キバで 襲う。",
		'zh-tw': "平時都用堅硬的岩石來打磨刀刃般的尾巴。會躲在樹叢裡， 然後趁獵物靠近時用毒牙襲擊。",
		'th-th': "ลับดาบที่หางด้วยโขดหินแข็ง ๆ ขยับเข้าใกล้เหยื่อในขณะที่ซ่อนตัวในพงหญ้า แล้วใช้เขี้ยวพิษจู่โจม",
		'id-id': "Seviper mengasah pedang di ekornya dengan batu keras. Pokémon ini bersembunyi, mendekati mangsanya melalui semak-semak, lalu menyerang mereka dengan taring beracunnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "するどいキバ",
			'zh-tw': "銳利之牙",
			'th-th': "เขี้ยวคม",
			'id-id': "Taring Tajam"
		},

		damage: 20
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'ja-jp': "ふりおろす",
			'zh-tw': "揮擊",
			'th-th': "ฟาด",
			'id-id': "Menebas Turun"
		},

		damage: "50+",

		effect: {
			'ja-jp': "相手のバトルポケモンが進化ポケモンなら、50ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加50點傷害。",
			'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอนวิวัฒนาการ การโจมตีนี้จะเพิ่มแดเมจอีก 50",
			'id-id': "Jika Pokémon Bertarung lawan adalah Pokémon Evolusi, kerusakan yang diberikan bertambah sejumlah 50."
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
				cardmarket: 701110,
				tcgplayer: 568179,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card