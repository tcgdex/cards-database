import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ブロロン",
		'zh-tw': "噗隆隆",
		th: "โบรรอน",
		id: "Varoom"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [965],
	hp: 80,
	types: ["Metal"],

	description: {
		ja: "スクラップ工場に 放置された エンジンに 謎の 毒ポケモンが 入り込んで 生まれたと 言われる。",
		'zh-tw': "據說牠是神秘的毒寶可夢鑽進了被放置在廢鐵工廠 的引擎裡而誕生的。",
		th: "ว่ากันว่าเกิดจากการที่โปเกมอนพิษปริศนาเข้าไปในเครื่องยนต์ที่ถูกทิ้งไว้ในโรงงานเศษเหล็ก",
		id: "Dikatakan bahwa Varoom terlahir dari Pokémon racun misterius yang masuk ke dalam mesin terbengkalai di pabrik besi bekas."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "ぶちかます",
			'zh-tw': "頭突",
			th: "ตบหนัก",
			id: "Hantaman Penuh Tenaga"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card