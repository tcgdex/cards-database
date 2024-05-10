import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミュウツー",
		'zh-tw': "超夢",
		th: "มิวทู",
		id: "Mewtwo"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [150],
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "ミュウの 遺伝子を 組み替えて 生み出された。ポケモンで 一番 凶暴な 心を 持つという。",
		'zh-tw': "藉著重組夢幻的基因而誕生。 據說有著所有寶可夢中最殘暴的心。",
		th: "ถูกสร้างขึ้นมาจากการดัดแปลงหน่วยพันธุกรรมของมิว ว่ากันว่ามันมีจิตใจที่โหดร้ายที่สุดในบรรดาโปเกมอน",
		id: "Mewtwo terlahir dari rekayasa genetik Mew. Dikatakan sebagai Pokémon dengan hati paling brutal."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "リフレクトバリア",
			'zh-tw': "反射屏障",
			th: "รีเฟล็กต์บาเรีย",
			id: "Reflect Barrier"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、受けたダメージぶんのダメカンを、ワザを使ったポケモンにのせる。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害時，將與受到的傷害相同數值的傷害指示物，放置於使用招式的寶可夢身上。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้ วางตัวนับแดเมจบนโปเกมอนที่ใช้ท่าต่อสู้ ตามจำนวนแดเมจที่ได้รับมา",
			id: "Pada giliran lawan berikutnya, saat Pokémon ini menerima kerusakan akibat serangan, letakkan Token Kerusakan sejumlah kerusakan yang diterima pada Pokémon yang telah menggunakan serangan."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "サイコストライク",
			'zh-tw': "精神強襲",
			th: "ไซโคสไตรค์",
			id: "Psychostrike"
		},

		damage: 130,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card