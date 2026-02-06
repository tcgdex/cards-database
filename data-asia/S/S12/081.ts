import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "謝米",
		th: "เชมิน",
		ja: "シェイミ"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "葛拉西蒂亞花盛開的季節裡，據說牠會為了傳遞感謝之情 而飛向天空。",
		th: "ว่ากันว่าจะบินเพื่อส่งความรู้สึกขอบคุณต่อฤดูที่ดอกกราซิเดียเบ่งบาน",
		ja: "グラシデアの花が 咲く 季節 感謝の 心を 届けるために 飛び立つと 言われている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撿花",
			th: "เก็บดอกไม้",
			ja: "はなひろい"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張能量卡，在給對手看過後放回牌庫並重洗。",
			th: "เลือกการ์ดพลังงานได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู ใส่กลับไปในสำรับการ์ดแล้วสับ",
			ja: "自分のトラッシュからエネルギーを2枚まで選び、相手に見せて、山札にもどして切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "後踢",
			th: "เตะกลับหลัง",
			ja: "うしろげり"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [492],

	thirdParty: {
		cardmarket: 680220
	}
}

export default card