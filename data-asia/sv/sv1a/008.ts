import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "マメバッタ",
		'zh-tw': "豆蟋蟀",
		th: "มาเมะบัตตะ",
		id: "Nymble"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [919],
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "第３の脚が 畳まれている。 ピンチになると １０メートル以上 ジャンプする 脚力を 持つ。",
		'zh-tw': "總是將第３對腳折起來。擁有在遇到危機時能夠 跳超過１０公尺的跳躍力。",
		th: "พับขาที่ 3 เอาไว้ มีพลังขาที่สามารถกระโดดได้สูงกว่า 10 เมตรเมื่อตกอยู่ในสถานการณ์คับขัน",
		id: "Sepasang kaki ketiga Nymble terlipat. Pokémon ini memiliki kekuatan kaki untuk dapat melompat setinggi 10 meter ketika terdesak."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ちょっとはねる",
			'zh-tw': "跳一下",
			th: "ขอเด้งหน่อย",
			id: "Melompat Sedikit"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "むしくい",
			'zh-tw': "蟲咬",
			th: "แมลงกัด",
			id: "Gigitan Serangga"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card