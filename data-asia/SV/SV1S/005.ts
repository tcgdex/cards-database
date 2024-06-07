import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ミニーブ",
		'zh-tw': "迷你芙",
		th: "มินีฟ",
		id: "Smoliv"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [928],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "頭の 実から オイルを 出して 敵から 身を 守る。 オイルは とびあがるほど 苦くて 渋い。",
		'zh-tw': "會從頭上的果實噴出油來保護自己不受敵人攻擊。 油的味道苦澀到會讓人跳起來。",
		th: "ปล่อยน้ำมันออกมาจากผลบนหัวเพื่อปกป้องตัวเองจากศัตรู น้ำมันนั้นทั้งขมและฝาดจนน่าตกใจ",
		id: "Smoliv melindungi diri dari musuh dengan mengeluarkan minyak dari buah di kepalanya. Rasa minyaknya sangat pahit dan sepat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "たいあたり",
			'zh-tw': "撞擊",
			th: "พุ่งเข้าชน",
			id: "Serudukan"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card