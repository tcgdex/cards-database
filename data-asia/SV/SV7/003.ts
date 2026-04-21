import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "觸手百合",
		'zh-cn': "觸手百合",
		ja: "リリーラ"
	},

	illustrator: "Ounishi",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'zh-tw': "從化石復原而來的寶可夢。 曾經棲息在大約１億年前 的溫暖大海裡。",
		'zh-cn': "從化石復原而來的寶可夢。 曾經棲息在大約１億年前 的溫暖大海裡。",
		ja: "化石から 復元した ポケモン。 およそ １億年前の 温かい 海に 生息していた。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "束縛",
			'zh-cn': "束縛",
			ja: "しばりつける"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'zh-cn': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		},

		damage: 50,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [345],

	thirdParty: {
		cardmarket: 778996
	}
}

export default card