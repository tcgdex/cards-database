import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "マダツボミ",
		'zh-tw': "喇叭芽",
		th: "มาดาซึโบมิ",
		id: "Bellsprout"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [69],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "人の 顔のような つぼみから 伝説の マンドラゴラの 一種ではないかと ささやかれている。",
		'zh-tw': "因為花苞長得像人臉， 所以私底下有些人說牠是 傳說生物曼德拉草的一種。",
		th: "มีเสียงซุบซิบกันว่า จากดอกตูมที่ดูราวกับใบหน้าคนนั้น อาจจะเป็นพันธุ์หนึ่งของแมนเดรกในตำนานหรือไม่",
		id: "Karena kuncupnya menyerupai wajah manusia, Bellsprout digosipkan sebagai sejenis Mandragora yang legendaris."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "いあいぎり",
			'zh-tw': "居合斬",
			th: "ตัด",
			id: "Potongan Iai"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "しばりつける",
			'zh-tw': "束縛",
			th: "มัดยึด",
			id: "Menjerat"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card