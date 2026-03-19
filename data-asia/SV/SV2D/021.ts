import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "レントラー",
		'zh-tw': "倫琴貓",
		th: "เร็นโทรา",
		id: "Luxray"
	},

	illustrator: "aoki",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [405],
	hp: 150,
	types: ["Lightning"],

	description: {
		ja: "壁の向こうも 見える 力で 逃げた 獲物を 追いつめるほかにも 迷子の 子どもを 捜したりする。",
		'zh-tw': "擁有能看見牆壁另一側的力量，除了可以用來追捕逃跑的獵物， 還可以用來尋找迷路的孩子。",
		th: "ใช้พลังที่สามารถมองเห็นอีกฝั่งของกำแพงได้ในการไล่ต้อนเหยื่อที่หนีไป บางครั้งก็ใช้เพื่อช่วยตามหาเด็กที่หลงทาง",
		id: "Selain untuk memojokkan mangsa yang melarikan diri, kemampuan Luxray yang dapat melihat sesuatu di balik dinding juga digunakan untuk mencari anak tersesat."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みなぎるせんこう",
			'zh-tw': "充溢閃光",
			th: "แสงวาบเอ่อล้น",
			id: "Kilas Bergejolak"
		},

		effect: {
			ja: "自分の番に、このカードが手札にあり、自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、1回使える。このカードをベンチに出す。",
			'zh-tw': "在自己的回合，若手牌有這張卡，且自己剩餘獎賞卡的張數，比對手剩餘獎賞卡的張數多，則可使用1次。將這張卡放置於備戰區。",
			th: "ในเทิร์นฝ่ายเรา ถ้าการ์ดนี้อยู่บนมือ และจำนวนการ์ดรางวัลที่เหลือของฝ่ายเรา มากกว่าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้าม ใช้ได้ 1 ครั้ง วางการ์ดนี้บนเบนช์",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika kartu ini ada di Kartu Pegangan dan sisa Kartu Point sendiri lebih banyak dari sisa Kartu Point lawan. Masukkan kartu ini ke Cadangan."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "ワイルドボルト",
			'zh-tw': "瘋狂伏特",
			th: "ไวลด์โวลต์",
			id: "Wild Volt"
		},

		damage: 180,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 705325
	}
}

export default card