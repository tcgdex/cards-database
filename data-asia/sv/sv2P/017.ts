import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "マリルリ",
		'zh-tw': "瑪力露麗"
	},

	illustrator: "En Morikura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [184],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "長い 耳は 優れた センサー。 水の中の 音を 聞き分けて なにが 動いているのか わかる。",
		'zh-tw': "長長的耳朵是靈敏的感應器。能夠藉著聆聽水中的聲音 來分辨出是什麼在動。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "バブルドレイン",
			'zh-tw': "泡沫吸取"
		},

		damage: 50,

		effect: {
			ja: "このポケモンのHPを「30」回復する。",
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "たたきつける",
			'zh-tw': "摔打"
		},

		damage: "100×",

		effect: {
			ja: "コインを2回投げ、オモテの数×100ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×100點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card