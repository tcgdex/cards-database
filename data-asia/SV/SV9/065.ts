import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "Nのギギアル",
		'zh-tw': "N的齒輪組",
		'zh-cn': "N的齒輪組"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [600],
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "本気の ときは でかギアの 外の 歯車と ちびギアが 合致。 回転速度が 飛躍 するのだ。",
		'zh-tw': "如果認真起來，大齒輪外圈的 齒輪會和小齒輪完全接合。 此時轉速將會大幅提升。",
		'zh-cn': "如果認真起來，大齒輪外圈的 齒輪會和小齒輪完全接合。 此時轉速將會大幅提升。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぐるぐるギア",
			'zh-tw': "轉轉齒輪",
			'zh-cn': "轉轉齒輪"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			'zh-cn': "將對手的戰鬥寶可夢【混亂】。"
		}
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			ja: "がちんこ",
			'zh-tw': "正面對決",
			'zh-cn': "正面對決"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card