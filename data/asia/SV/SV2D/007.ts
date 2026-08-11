import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "タマンチュラ",
		'zh-tw': "團珠蛛",
		'th-th': "ทามันทูล่า",
		'id-id': "Tarountula"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	dexId: [917],
	hp: 50,
	types: ["Grass"],

	description: {
		'ja-jp': "体を 包みこむ 糸玉は 天敵の ストライクの カマを はね返す 弾力性を 持つ。",
		'zh-tw': "包裹著身體的線球擁有足以把天敵飛天螳螂 的鐮刀反彈回去的彈力。",
		'th-th': "ก้อนเส้นใยที่พันหุ้มลำตัวมีความยืดหยุ่นที่สามารถดีดเคียวของสไตรค์ซึ่งเป็นศัตรูตามธรรมชาติกลับไปได้",
		'id-id': "Bola benang yang melilit di tubuh Tarountula memiliki elastisitas yang dapat menangkis sabit tajam Scyther, musuh alaminya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "しばりつける",
			'zh-tw': "束縛",
			'th-th': "มัดยึด",
			'id-id': "Menjerat"
		},

		damage: 10,

		effect: {
			'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705311,
				tcgplayer: 565869,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card