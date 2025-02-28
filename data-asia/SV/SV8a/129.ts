import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ノコッチ",
		id: "Dunsparce",
		th: "โนก็อจจิ",
		'zh-tw': "土龍弟弟",
		'zh-cn': "土龍弟弟"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "None",
	category: "Pokemon",
	dexId: [206],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "暗い場所に 迷路を 作る。 だれかに みられると 尻尾で 地面を 掘って 逃げようとする。",
		id: "Dunsparce membuat labirin di tempat gelap. Jika ada yang melihatnya, Pokémon ini akan melarikan diri dengan menggali lubang menggunakan ekornya.",
		th: "สร้างทางวงกตในที่มืด พอมีคนเจอก็จะใช้หางขุดมุดดินหนี",
		'zh-tw': "會在陰暗處做出迷宮。 只要被誰看見就會 用尾巴挖掘地面逃走。",
		'zh-cn': "會在陰暗處做出迷宮。 只要被誰看見就會 用尾巴挖掘地面逃走。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かじる",
			id: "Menggerogot",
			th: "แทะ",
			'zh-tw': "咬",
			'zh-cn': "咬"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "あなをほる",
			id: "Menggali",
			th: "ขุดรู",
			'zh-tw': "挖洞",
			'zh-cn': "挖洞"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan.",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			'zh-cn': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card