import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [69],
	rarity: "Common",
	set: Set,

	name: {
		ja: "マダツボミ",
		'zh-tw': "喇叭芽",
		th: "มาดาซึโบมิ"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "人の 顔のような つぼみから 伝説の マンドラゴラの 一種ではないかと ささやかれている。",
		'zh-tw': "因為花苞長得像人臉，所以私底下有些人說牠是傳說生物曼德拉草的一種。",
		th: "มีเสียงซุบซิบกันว่า จากดอกตูมที่ดูราวกับใบหน้าคนนั้น อาจจะเป็นพันธุ์หนึ่งของแมนเดรกในตำนานหรือไม่"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "ベノムショック",
			'zh-tw': "毒液衝擊",
			th: "เวนอมช็อค"
		},

		effect: {
			ja: "相手のバトルポケモンがどくなら、40ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加40點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ [พิษ] การโจมตีนี้จะเพิ่มแดเมจอีก 40"
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533577, tcgplayer: 569042, cardtrader: 239997 } }
	]
}

export default card