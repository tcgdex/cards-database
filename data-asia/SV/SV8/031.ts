import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノツツミ",
		'zh-tw': "鐵包袱",
		'zh-cn': "鐵包袱"
	},

	illustrator: "rika",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [991],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "古い 書物に 登場する 謎の 物体に 似た ポケモン。 目撃例は 過去 ２件のみ。",
		'zh-tw': "與古書裡記載的神秘物體 長得很相像的寶可夢。 過去只被目擊過２次。",
		'zh-cn': "與古書裡記載的神秘物體 長得很相像的寶可夢。 過去只被目擊過２次。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "ガストコリジョン",
			'zh-tw': "瞬風衝激",
			'zh-cn': "瞬風衝激"
		},

		damage: "200-",

		effect: {
			ja: "相手のバトルポケモンのにげるためのエネルギーの数×50ダメージぶん、このワザのダメージは小さくなる。",
			'zh-tw': "減少對手的戰鬥寶可夢【撤退】所需的能量的數量×50點傷害。",
			'zh-cn': "減少對手的戰鬥寶可夢【撤退】所需的能量的數量×50點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card