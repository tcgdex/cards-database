import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブロロローム",
		'zh-tw': "普隆隆姆",
		th: "โบรโรโรม",
		id: "Revavroom"
	},

	illustrator: "DOM",
	category: "Pokemon",
	dexId: [966],
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "毒素と 岩の 成分を 混ぜた ガスを ８つに 増えた シリンダーで 爆発させ エネルギーを 作る。",
		'zh-tw': "在增加到了８個的汽缸裡引爆混有毒素和岩石成分的 氣體來製造能量。",
		th: "ทำให้แก๊สที่เกิดจากการผสมสารพิษกับส่วนประกอบของหินระเบิดด้วยกระบอกสูบที่เพิ่มเป็น 8 อันเพื่อสร้างพลังงาน",
		id: "Revavroom menciptakan energi dengan cara meledakkan gas yang tercampur dari zat beracun dan komponen batu pada silinder motornya yang bertambah menjadi 8."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ランブルエンジン",
			'zh-tw': "轟鳴引擎",
			th: "เครื่องยนต์กระหึ่ม",
			id: "Rumble Engine"
		},

		effect: {
			ja: "自分の番に、自分の手札からエネルギーを1枚トラッシュするなら、1回使える。自分の手札が6枚になるように、山札を引く。",
			'zh-tw': "在自己的回合，若從自己的手牌將1張能量卡丟棄，則可使用1次。從牌庫抽卡直到自己的手牌滿6張為止。",
			th: "ในเทิร์นฝ่ายเรา ถ้าทิ้งการ์ดพลังงาน 1 ใบจากบนมือฝ่ายเราที่ตำแหน่งทิ้งการ์ด ใช้ได้ 1 ครั้ง จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 6 ใบ",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika membuang 1 lembar Energi dari Kartu Pegangan sendiri ke Trash. Ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 6 lembar."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "はねとばす",
			'zh-tw': "擊飛",
			th: "ตบกระเด็น",
			id: "Menghempaskan"
		},

		damage: "90+",

		effect: {
			ja: "コインを1回投げオモテなら、90ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加90點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 90."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card