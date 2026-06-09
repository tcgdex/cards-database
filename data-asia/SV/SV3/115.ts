import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "デルビル",
		'zh-tw': "戴魯比",
		th: "เดลวิล"
	},

	illustrator: "KYUPIYAMA",
	category: "Pokemon",
	dexId: [228],
	hp: 50,
	types: ["Darkness"],

	description: {
		ja: "様々な 鳴き声を 使い分け 仲間と コミュニケーションしながら 狩りを おこなう 賢さを持つ。",
		'zh-tw': "擁有在狩獵的時候能使用各式各樣的叫聲 來與夥伴溝通的智慧。",
		th: "ฉลาด จะใช้เสียงร้องต่าง ๆ เพื่อสื่อสารกับฝูงระหว่างการล่า"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "むれのれんけい",
			'zh-tw': "群聚聯合",
			th: "ทีมเวิร์กของฝูง"
		},

		effect: {
			ja: "自分のベンチの「デルビル」全員に、山札から「基本エネルギー」を1枚ずつつける。そして山札を切る。",
			'zh-tw': "從牌庫附給自己的備戰區所有「戴魯比」各1張「基本【惡】能量」卡。並且重洗牌庫。",
			th: "นำการ์ด [พลังงานพื้นฐาน[ความมืด]] จากสำรับการ์ดมาติดที่ [เดลวิล] บนเบนช์ฝ่ายเราทุกตัว ตัวละ 1 ใบ แล้วสับสำรับการ์ด"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "きあいのキバ",
			'zh-tw': "真氣之牙",
			th: "เขี้ยวฮึดสู้"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 724023
	}
}

export default card