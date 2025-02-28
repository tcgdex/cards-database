import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ハスボー",
		'zh-tw': "蓮葉童子",
		'zh-cn': "蓮葉童子"
	},

	illustrator: "Ayako Ozaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [270],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "頭の 葉っぱは 汚れを 弾く 性質。 泥だらけの ポケモンを 乗せても 葉っぱは きれいなままだ。",
		'zh-tw': "頭上的葉子具有防污的性質。 即使載了滿身是泥的寶可夢， 葉子也能常保乾淨。",
		'zh-cn': "頭上的葉子具有防污的性質。 即使載了滿身是泥的寶可夢， 葉子也能常保乾淨。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "みずでっぽう",
			'zh-tw': "水槍",
			'zh-cn': "水槍"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card