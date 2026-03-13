import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ココロモリ",
		'zh-tw': "心蝙蝠",
		th: "โคโคโรโมริ"
	},

	illustrator: "Narumi Sato",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [528],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "鼻の 形が おめでたいと 幸福を 呼ぶ シンボルとして 祭る 地域も あるという。",
		'zh-tw': "據說有些地區的人覺得牠鼻子的形狀很吉利， 而把牠當成幸福的象徵來祭拜。",
		th: "รูปร่างของจมูกที่เป็นมงคลนี้ ว่ากันว่ามีบางท้องถิ่นนำมาบูชาเป็นสัญลักษณ์แห่งความสุข"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "メロメロウェーブ",
			'zh-tw': "迷人波",
			th: "คลื่นชวนเคลิบเคลิ้ม"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。このこんらんでのせるダメカンの数は6個になる。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。因這個【混亂】而放置的傷害指示物的數量改為6個。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน] จำนวนตัวนับแดเมจที่วางด้วยสภาวะ[สับสน]นี้จะเป็น 6 ตัว"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741349
	}
}

export default card