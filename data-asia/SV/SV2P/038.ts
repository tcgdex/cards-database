import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "マンキー",
		'zh-tw': "猴怪",
		th: "แมนคี",
		id: "Mankey"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [56],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "木の上で 群れをつくって 暮らす。 群れから はぐれた マンキーは 寂しくて すぐに 怒りだす。",
		'zh-tw': "在樹上群居的寶可夢。和夥伴走散的猴怪會因為 按捺不住寂寞而動不動就生氣。",
		th: "อาศัยอยู่กันเป็นฝูงบนต้นไม้ แมนคีที่พลัดจากฝูงจะเหงาจนโกรธขึ้นมา",
		id: "Pokémon ini hidup berkelompok di atas pohon. Mankey yang terpisah dari kawanannya langsung mengamuk karena kesepian."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "けたぐり",
			'zh-tw': "踢倒",
			th: "เตะเลียด",
			id: "Tendangan Rendah"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "ぶらさがる",
			'zh-tw': "垂吊",
			th: "ห้อยโตงเตง",
			id: "Bergantung"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 705271
	}
}

export default card