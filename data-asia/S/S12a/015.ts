import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝噴火龍",
		th: "เรเดียนต์ลิซาร์ดอน",
		ja: "かがやくリザードン"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],

	description: {
		'zh-tw': "會噴出彷彿連岩石都能燒焦的灼熱火焰。 有時會引發森林火災。",
		th: "พ่นไฟอันร้อนแรงพอที่จะแผดเผาหินได้ บางครั้งก็ทำให้เกิดไฟป่า",
		ja: "岩石も 焼けるような 灼熱の 炎を 吐いて 山火事を 起こすことが ある。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "激動之心",
			th: "เอ็กซ์ไซต์ฮาร์ต",
			ja: "エキサイトハート"
		},

		effect: {
			'zh-tw': "這隻寶可夢使用招式所需的【無】能量，減少對手已經獲得的獎賞卡的張數數量。",
			th: "พลังงาน[ไร้สี]ที่จำเป็นสำหรับใช้ท่าต่อสู้ของโปเกมอนนี้จะลดลง ตามจำนวนการ์ดรางวัลที่ฝ่ายตรงข้ามหยิบไปแล้ว",
			ja: "相手がすでにとったサイドの枚数ぶん、このポケモンがワザを使うためのエネルギーは少なくなる。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "烈焰爆",
			th: "เปลวเพลิงปะทุ",
			ja: "かえんばく"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「烈焰爆」。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [เปลวเพลิงปะทุ] ไม่ได้",
			ja: "次の自分の番、このポケモンは「かえんばく」が使えない。"
		},

		damage: 250,
		cost: ["Fire", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F",
	dexId: [6],

	thirdParty: {
		cardmarket: 687493
	}
}

export default card