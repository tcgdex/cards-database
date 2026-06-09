import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ナッシー",
		'zh-tw': "椰蛋樹",
		'zh-cn': "椰蛋樹"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [103],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "ごくまれに 頭の どれか ひとつが 地面に 落ちると タマタマになって 動きだすという。",
		'zh-tw': "聽說在極少數的情況下， 當其中一顆頭掉落到地面， 就會變成蛋蛋並且動起來。",
		'zh-cn': "聽說在極少數的情況下， 當其中一顆頭掉落到地面， 就會變成蛋蛋並且動起來。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "たまなげアワー",
			'zh-tw': "投球時刻",
			'zh-cn': "投球時刻"
		},

		damage: "60×",

		effect: {
			ja: "おたがいのバトルポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×60ダメージ。",
			'zh-tw': "擲與雙方的戰鬥寶可夢身上附加的能量的數量相同次數的硬幣，造成正面出現的次數×60點傷害。",
			'zh-cn': "擲與雙方的戰鬥寶可夢身上附加的能量的數量相同次數的硬幣，造成正面出現的次數×60點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793436
	}
}

export default card