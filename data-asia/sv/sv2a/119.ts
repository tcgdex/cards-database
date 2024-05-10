import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "アズマオウ",
		'zh-tw': "金魚王",
		th: "อซึมาโอ",
		id: "Seaking"
	},

	illustrator: "SIE NANAHARA",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [119],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "ツノで 川底の 岩を くりぬき 巣をつくるのは 産みつけた タマゴが 流されないように するためだ。",
		'zh-tw': "金魚王之所以會用角挖穿河底的岩石來築巢，是為了 防止產下的卵被水流沖走。",
		th: "ใช้เขาคว้านรูหินที่ก้นแม่น้ำสร้างรังเพื่อเก็บไข่ที่เพิ่งฟักออกมาไม่ให้ถูกน้ำพัด",
		id: "Seaking membuat sarang dengan melubangi batu karang di dasar sungai menggunakan tanduknya agar setelah bertelur, telur tersebut tidak akan hanyut terbawa arus."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "きままにおよぐ",
			'zh-tw': "隨興游水",
			th: "ว่ายตามใจชอบ",
			id: "Berenang Seenaknya"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "アクアホーン",
			'zh-tw': "水之角擊",
			th: "อควาฮอร์น",
			id: "Aqua Horn"
		},

		damage: "60+",

		effect: {
			ja: "このポケモンについているエネルギーの数×30ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×30點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[น้ำ]ที่ติดอยู่กับโปเกมอนนี้ x30",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi {Air} yang dikenakan pada Pokémon ini."
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