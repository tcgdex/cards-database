import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蘋裹龍",
		'zh-cn': "蘋裹龍",
		ja: "アップリュー"
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	description: {
		'zh-tw': "會用體液修補蘋果。 身經百戰的強者， 蘋果會佈滿黏土色。",
		'zh-cn': "會用體液修補蘋果。 身經百戰的強者， 蘋果會佈滿黏土色。",
		ja: "体液で りんごを 補修する。 歴戦の 強者の りんごは 全体的に 粘土色。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "酸味噴吐",
			'zh-cn': "酸味噴吐",
			ja: "サワースピット"
		},

		effect: {
			'zh-tw': "造成對手的戰鬥寶可夢身上放置的傷害指示物的數量×20點傷害。",
			'zh-cn': "造成對手的戰鬥寶可夢身上放置的傷害指示物的數量×20點傷害。",
			ja: "相手のバトルポケモンにのっているダメカンの数×20ダメージ。"
		},

		damage: "20×",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "高速飛行",
			'zh-cn': "高速飛行",
			ja: "スピードひこう"
		},

		damage: 70,
		cost: ["Grass", "Fire"]
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [841],

	thirdParty: {
		cardmarket: 787606
	}
}

export default card