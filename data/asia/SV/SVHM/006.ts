import { Card } from "../../../interfaces"
import Set from "../SVHM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小灰怪",
		th: "ลีเกรย์",
		id: "Elgyem"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "當牠站在電視機旁邊時，畫面上會出現奇怪的景色。 據說那是牠的故鄉。",
		th: "ถ้าอยู่ข้าง ๆ ทีวีตรงมอนิเตอร์จะฉายภาพทิวทัศน์ประหลาด ว่ากันว่ามันคือภาพบ้านเกิดของลีเกรย์",
		id: "Ketika berada di samping televisi, pemandangan aneh akan ditampilkan di layar. Dikatakan bahwa itu adalah tampilan kampung halaman Elgyem."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "躲藏",
			th: "ซ่อน",
			id: "Bersembunyi"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card