import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電燈怪",
		'zh-cn': "電燈怪",
		ja: "ランターン"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "會放出刺眼的亮光 讓對手看不見東西。 然後趁對手無法動彈時一口吞下。",
		'zh-cn': "會放出刺眼的亮光 讓對手看不見東西。 然後趁對手無法動彈時一口吞下。",
		ja: "眩しい 光を 放って 相手の 目を くらませ 動けない あいだに 丸飲みに してしまう。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "錯亂閃光",
			'zh-cn': "錯亂閃光",
			ja: "さくらんフラッシュ"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。因這個【混亂】而放置的傷害指示物的數量改為8個。",
			'zh-cn': "將對手的戰鬥寶可夢【混亂】。因這個【混亂】而放置的傷害指示物的數量改為8個。",
			ja: "相手のバトルポケモンをこんらんにする。このこんらんでのせるダメカンの数は8個になる。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "閃電伏特",
			'zh-cn': "閃電伏特",
			ja: "サンダーボルト"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。",
			ja: "次の自分の番、このポケモンはワザが使えない。"
		},

		damage: 140,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [171],

	thirdParty: {
		cardmarket: 779045
	}
}

export default card