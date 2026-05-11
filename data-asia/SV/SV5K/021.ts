import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ウミディグダ",
		'zh-tw': "海地鼠",
		th: "อุมิดิกดา",
		ko: "바다그다"
	},

	illustrator: "OKUBO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [960],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "２０メートル先の ミガルーサが 放つ 匂いも 嗅ぎとって 砂の中に 身を 隠すのだ。",
		'zh-tw': "就算身處於２０公尺外，牠都能嗅出輕身鱈散發出 的氣味，躲進沙子裡面藏身。",
		th: "จะหลบซ่อนตัวในทรายเมื่อได้กลิ่นที่มิกาลูซาปล่อยออกมาแม้จะห่างออกไปกว่า 20 เมตร",
		ko: "20m 떨어진 가비루사에게서 나는 냄새도 맡을 수 있어서 모래 속에 몸을 숨긴다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ほりだしもの",
			'zh-tw': "挖到寶",
			th: "ของเลหลัง",
			ko: "득템"
		},

		effect: {
			ja: "自分の山札からグッズを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張物品卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดไอเท็ม 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			ko: "자신의 덱에서 아이템을 1장 선택해서 상대에게 보여주고 패로 가져온다. 그리고 덱을 섞는다."
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "アクアボム",
			'zh-tw': "水炸彈",
			th: "อควาบอมบ์",
			ko: "아쿠아봄"
		},

		damage: 40,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			ko: "이 포켓몬에게도 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card