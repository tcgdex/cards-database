import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夢妖",
		ja: "ムウマ"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "潛藏於暗處，發出幼兒般的啜泣聲令旅人聽之膽寒。當牠以人們恐懼的模樣 取樂時，胸口的紅珠會發出妖異的光輝。",
		ja: "闇に潜み 稚児のごときに すすり泣き 旅人の肝を 冷やす。 怯える様 見て 喜びしとき 胸の赤き珠 妖しく光る。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "囈語",
			ja: "つぶやく"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [200]
}

export default card