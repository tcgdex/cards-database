import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ストライク",
		'zh-tw': "飛天螳螂",
		th: "สไตรค์",
		id: "Scyther"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	dexId: [123],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "切れ味 鋭い カマを 使って 草むらを 切り進む。 あまりに 速い 動きで 目が 追いつかない。",
		'zh-tw': "會用鋒利的鐮刀割開草叢前進。因為動作實在太快， 甚至無法用肉眼看清。",
		th: "ใช้เคียวคมกริบถางหญ้าที่ขวางทาง เคลื่อนไหวได้เร็วจนมองตามไม่ทัน",
		id: "Scyther melaju sambil memotong rerumputan menggunakan sabit tajamnya. Pergerakannya tidak bisa diikuti karena terlalu cepat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "こうそくいどう",
			'zh-tw': "高速移動",
			th: "สปีดี้",
			id: "Gerakan Cepat"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "いあいぎり",
			'zh-tw': "居合斬",
			th: "ตัด",
			id: "Potongan Iai"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card