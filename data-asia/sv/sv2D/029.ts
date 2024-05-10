import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "スナバァ",
		'zh-tw': "沙丘娃"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [769],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "スコップを なくすと 木の枝などを 代わりに 挿し 新たな スコップが 見つかるまで 気を 紛らわす。",
		'zh-tw': "萬一鏟子弄丟了，就會用樹枝等東西插著代替，好讓牠在 找到新鏟子前能分散注意力。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "つぶやく",
			'zh-tw': "囈語"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "マッドショット",
			'zh-tw': "泥巴射擊"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card