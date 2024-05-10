import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミミズズ",
		'zh-tw': "拖拖蚓",
		th: "มิมิซึซึ"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [968],
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "敵に 襲われると 体毛を こぶしのように 使い パンチの 嵐を お見舞いするのだ。",
		'zh-tw': "遭到攻擊的時候，會把體毛如拳頭般地使用， 朝著敵人奉上拳擊風暴。",
		th: "เมื่อโดนศัตรูโจมตี จะใช้ขนตามร่างกายราวกับกำปั้นปล่อยพายุหมัดใส่ศัตรู"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "パンチ&ドロー",
			'zh-tw': "出拳&抽出",
			th: "ต่อยแล้วจั่ว"
		},

		damage: 20,

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。",
			th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "どたんばラッシュ",
			'zh-tw': "絕境衝刺",
			th: "พุ่งจู่โจมนาทีสุดท้าย"
		},

		damage: "90+",

		effect: {
			ja: "自分の山札の残り枚数が3枚以下なら、150ダメージ追加。",
			'zh-tw': "若自己的牌庫的剩餘張數為3張以下，則增加150點傷害。",
			th: "ถ้าจำนวนการ์ดที่เหลือในสำรับการ์ดฝ่ายเราน้อยกว่าหรือเท่ากับ 3 ใบ การโจมตีนี้จะเพิ่มแดเมจอีก 150"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card