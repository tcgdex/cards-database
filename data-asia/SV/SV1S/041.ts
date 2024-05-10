import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ルカリオ",
		'zh-tw': "路卡利歐",
		th: "ลูคาริโอ",
		id: "Lucario"
	},

	illustrator: "Nurikabe",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [448],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "波動を キャッチすることで 見えない 相手の 姿でも 見えると 言われている。",
		'zh-tw': "只要透過捕捉波導，據說就能夠看見原本 看不見身影的對手。",
		th: "ว่ากันว่าสามารถมองเห็นอีกฝ่ายที่ซ่อนตัวอยู่ได้จากการจับคลื่นพลัง",
		id: "Dikatakan bahwa Lucario dapat melihat sosok lawan yang tak kasat mata dengan mendeteksi gelombang aura."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "アベンジナックル",
			'zh-tw': "復仇關節",
			th: "อเวนจ์นักเคิล",
			id: "Avenge Knuckle"
		},

		damage: "30+",

		effect: {
			ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、120ダメージ追加。",
			'zh-tw': "在上個對手的回合，若自己的【鬥】寶可夢因招式的傷害而【昏厥】了，則增加120點傷害。",
			th: "ในเทิร์นก่อนของฝ่ายตรงข้าม ถ้าโปเกมอน[ต่อสู้]ฝ่ายเรา[หมดสภาพ] ด้วยแดเมจของท่าต่อสู้ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			id: "Jika pada giliran lawan sebelumnya, ada Pokémon {Petarung} sendiri yang KO karena kerusakan akibat serangan, kerusakan yang diberikan bertambah sejumlah 120."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "かそくづき",
			'zh-tw': "加速突刺",
			th: "เร่งความเร็วพุ่งชน",
			id: "Tusukan Akselerasi"
		},

		damage: 120,

		effect: {
			ja: "次の自分の番、このポケモンは「かそくづき」が使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「加速突刺」。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [เร่งความเร็วพุ่งชน] ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Tusukan Akselerasi."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card