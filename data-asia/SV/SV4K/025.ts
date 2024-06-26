import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ウミトリオ",
		'zh-tw': "三海地鼠",
		th: "อุมิทริโอ"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [961],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "見かけによらず 気性が 荒い。 長い 体で 獲物を 締め上げ 巣穴に 引きずりこむぞ。",
		'zh-tw': "有別於外表，性格非常粗暴。會用長長的身體勒緊獵物， 然後拖進自己的巢穴裡。",
		th: "มีนิสัยโหดร้ายขัดกับรูปลักษณ์ภายนอก ใช้ร่างกายที่ยาวของมันกอดรัดเหยื่อและลากเข้าไปในรัง"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "でたとこチョイス",
			'zh-tw': "臨場選擇",
			th: "เลือกฉับพลัน"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札から「ポケモンのどうぐ」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫選擇最多3張「寶可夢道具」卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง เลือกการ์ด [ไอเท็มติดโปเกมอน] ได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "さんれんのムチ",
			'zh-tw': "三連鞭",
			th: "ฟาดแส้สามครั้ง"
		},

		damage: "70×",

		effect: {
			ja: "コインを3回投げ、オモテの数×70ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×70點傷害。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x70"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card