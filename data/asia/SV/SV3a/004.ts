import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "オクタン",
		'zh-tw': "章魚桶",
		'th-th': "ออคตัน"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [224],
	hp: 110,
	types: ["Water"],

	description: {
		'ja-jp': "頑丈な 石頭。 吸盤つきの 脚を 絡ませ ひたすら 頭で 打ちすえる。",
		'zh-tw': "有著堅硬結實的腦袋。會用帶有吸盤的腳纏住對手， 然後不停地用頭猛撞。",
		'th-th': "มีหัวแข็งแรงเหมือนก้อนหิน พันด้วยขาที่มีปุ่มดูดแล้วใช้หัวทุบตีแบบไม่ยั้ง"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "きゅうばんドロー",
			'zh-tw': "吸盤抽出",
			'th-th': "ปุ่มดูดขอจั่ว"
		},

		effect: {
			'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を3枚引く。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫抽出3張卡。",
			'th-th': "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "えんまくだん",
			'zh-tw': "煙幕彈",
			'th-th': "กระสุนพ่นควัน"
		},

		damage: 60,

		effect: {
			'ja-jp': "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式時，對手擲1次硬幣。若為反面，則那個招式失敗。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนที่ได้รับท่าต่อสู้นี้จะใช้ท่าต่อสู้ ฝ่ายตรงข้ามทอยเหรียญ 1 ครั้ง ถ้าออกก้อยท่าต่อสู้นั้นจะล้มเหลว"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 734243,
				tcgplayer: 566862,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card