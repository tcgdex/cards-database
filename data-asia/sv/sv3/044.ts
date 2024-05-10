import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "トゲチック",
		'zh-tw': "波克基古",
		th: "โทเกชิก"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	dexId: [176],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "優しい人の そばに いないと 元気が でなくなってしまう。 羽を動かさずに 空に浮かべる。",
		'zh-tw': "不待在溫柔的人身邊就會變得沒有精神。不揮動翅膀也能浮在空中。",
		th: "ถ้าไม่ได้อยู่ข้าง ๆ คนที่ใจดีก็จะไม่มีชีวิตชีวาเลย ลอยอยู่บนฟ้าได้โดยไม่ขยับปีก"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "シェアピース",
			'zh-tw': "平分和平",
			th: "แบ่งปันสันติสุข"
		},

		effect: {
			ja: "おたがいのプレイヤーは、それぞれ山札を3枚引く。",
			'zh-tw': "雙方玩家各從牌庫抽出3張卡。",
			th: "ผู้เล่นทั้งสองฝ่าย แต่ละฝ่ายจั่วการ์ด 3 ใบจากสำรับการ์ด"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スピードひこう",
			'zh-tw': "高速飛行",
			th: "บินเร็วจี๋"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card