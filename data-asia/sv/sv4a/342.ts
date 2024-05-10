import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジャッジマン",
		'zh-tw': "裁判",
		id: "Judge"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、それぞれ山札を4枚引く。",
		'zh-tw': "雙方玩家各將手牌全部放回牌庫並重洗。然後，各從牌庫抽出4張。",
		id: "Kedua pemain masing-masing mengocok kembali semua Kartu Pegangan ke Deck. Setelah itu, kedua pemain masing-masing mengambil 4 kartu dari atas Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card