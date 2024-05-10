import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ピクシー",
		'zh-tw': "皮可西"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "satoma",
	dexId: [36],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "耳が 良くて １キロ 離れた ところで 落とした 針の音を 見事に 聞き分けられる。",
		'zh-tw': "聽覺靈敏，連１公里以外 針落地的聲音都能夠 分辨得一清二楚。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ゆびをふる",
			'zh-tw': "揮指"
		},

		effect: {
			ja: "相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢持有的招式，作為這個招式使用。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "マジカルショット",
			'zh-tw': "魔法射擊"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card