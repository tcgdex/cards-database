import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "紳士蛾",
		ja: "ガーメイル"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "夜裡會活躍地飛來飛去，從睡著的三蜜蜂的巢穴裡 搶奪蜂蜜後逃走。",
		ja: "夜中 活発に 飛び回り 眠っている ミツハニーの 巣から ミツを 奪って 逃げる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "襲擊",
			ja: "しゅうげき"
		},

		effect: {
			'zh-tw': "在這個回合，若這隻寶可夢從「結草兒」進化，則增加90點傷害。",
			ja: "この番、このポケモンが「ミノムッチ」から進化していたなら、90ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "起風",
			ja: "かぜおこし"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 0,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [414],

	thirdParty: {
		cardmarket: 605862
	}
}

export default card