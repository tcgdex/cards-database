import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ベラカス",
		'zh-tw': "蟲甲聖",
		'id-id': "Rabsca"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	dexId: [954],
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "玉を 支える 体は ほとんど 動かないため 本体は 玉の中にいると 考えられている。",
		'zh-tw': "支撐球的身體幾乎不動，因此人們認為牠的本體 其實是在球裡面。",
		'id-id': "Karena tubuh yang menyokong bolanya hampir tidak pernah bergerak, diduga tubuh asli Rabsca berada di dalam bolanya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "さいきのいのり",
			'zh-tw': "復生祈禱",
			'id-id': "Doa Kebangkitan"
		},

		effect: {
			'ja-jp': "自分のトラッシュからポケモンを1枚選び、ベンチに出す。",
			'zh-tw': "從自己的棄牌區選擇1張寶可夢卡，放置於備戰區。",
			'id-id': "Pilih 1 lembar Pokémon dari Trash sendiri, lalu masukkan ke Cadangan."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'ja-jp': "サイケこうせん",
			'zh-tw': "幻象光線",
			'id-id': "Sinar Psikedelik"
		},

		damage: 50,

		effect: {
			'ja-jp': "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
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
			type: "holo",
			thirdParty: {
				cardmarket: 747623,
				tcgplayer: 567670,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card