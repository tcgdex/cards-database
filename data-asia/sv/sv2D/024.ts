import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ズピカ",
		'zh-tw': "光蚪仔",
		th: "ซุพีคา",
		id: "Tadbulb"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [938],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "尻尾を 振って 発電する。 危険を 感じると 頭を 点滅させて 仲間に 伝える。",
		'zh-tw': "會搖尾巴來發電。感覺到有危險時， 會閃爍頭部通知夥伴。",
		th: "แกว่งหางเพื่อผลิตไฟฟ้า เมื่อรู้สึกถึงอันตรายจะทำให้ไฟบนหัวกะพริบเพื่อแจ้งพวกพ้อง",
		id: "Tadbulb menghasilkan listrik dengan menggoyangkan ekornya. Ketika merasakan adanya bahaya, Pokémon ini memberitahukan sesamanya dengan mengedipkan cahaya kepalanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふむ",
			'zh-tw': "踩",
			th: "เหยียบ",
			id: "Menginjak"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "バチバチ",
			'zh-tw': "劈哩啪啦",
			th: "ประกายไฟ",
			id: "Berpijar-pijar"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card