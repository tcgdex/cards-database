import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ヘイラッシャ",
		'zh-tw': "吃吼霸"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [977],
	hp: 160,
	types: ["Water"],

	description: {
		ja: "大食らいだが エサを 取るのは 苦手。 シャリタツと コンビを 組んで 獲物を 捕らえるのだ。",
		'zh-tw': "雖然是個大胃王，但不擅長捕食。 會和米立龍聯手捕捉獵物。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "いかりちらす",
			'zh-tw': "洩怒"
		},

		damage: 50,

		effect: {
			ja: "自分のトラッシュにある「シャリタツ」の枚数×50ダメージ。",
			'zh-tw': "造成自己的棄牌區的「米立龍」的張數×50點傷害。"
		}
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			ja: "ヘビースプラッシュ",
			'zh-tw': "重磅飛濺"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card