import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ガケガニ",
		'zh-tw': "毛崖蟹",
		'zh-cn': "毛崖蟹"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [950],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "逆さまになって 崖の 上から 獲物を 狙うが 頭に 血が上るので 長くは 待てない。",
		'zh-tw': "會倒立在懸崖上等獵物上門， 但由於那會讓牠的血液倒流， 因此等不了太長的時間。",
		'zh-cn': "會倒立在懸崖上等獵物上門， 但由於那會讓牠的血液倒流， 因此等不了太長的時間。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ちょっきんバサミ",
			'zh-tw': "喀嚓鉗",
			'zh-cn': "喀嚓鉗"
		},

		effect: {
			ja: "コインを2回投げ、オモテの数ぶん、相手のバトルポケモンについているエネルギーを選び、トラッシュする。",
			'zh-tw': "擲2次硬幣，選擇與正面出現的次數相同數量的對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "擲2次硬幣，選擇與正面出現的次數相同數量的對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ぶちかます",
			'zh-tw': "頭突",
			'zh-cn': "頭突"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card