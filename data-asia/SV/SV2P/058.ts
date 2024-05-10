import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "キャモメ",
		'zh-tw': "長翅鷗",
		th: "คาโมเมะ",
		id: "Wingull"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [278],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "上昇 気流に 乗って グライダーのように 大空を 舞い くちばしに 挟んだ エサを運ぶ。",
		'zh-tw': "會乘著上升氣流，如同滑翔機般地飛在空中 輸送鳥嘴銜著的食物。",
		th: "คาบอาหารไว้ในปากแล้วอาศัยกระแสลมไหลขึ้นเพื่อบินสูงขึ้นไปบนฟ้ากว้างราวเครื่องร่อน",
		id: "Wingull menggunakan aliran angin untuk terbang ke langit layaknya pesawat luncur. Pokémon ini menjepit dan membawa makanannya dengan paruhnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かぜおこし",
			'zh-tw': "起風",
			th: "เรียกลม",
			id: "Hembusan Angin"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card