import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ココロモリ",
		'zh-tw': "心蝙蝠",
		th: "โคโคโรโมริ",
		ko: "맘박쥐"
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
		th: "รูปร่างของจมูกที่เป็นมงคลนี้ ว่ากันว่ามีบางท้องถิ่นนำมาบูชาเป็นสัญลักษณ์แห่งความสุข",
		ko: "코의 모양이 복스럽다고 행복을 부르는 상징으로 여기는 지역도 있다고 한다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "メロメロウェーブ",
			'zh-tw': "迷人波",
			th: "คลื่นชวนเคลิบเคลิ้ม",
			ko: "헤롱헤롱 웨이브"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。このこんらんでのせるダメカンの数は6個になる。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。因這個【混亂】而放置的傷害指示物的數量改為6個。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน] จำนวนตัวนับแดเมจที่วางด้วยสภาวะ[สับสน]นี้จะเป็น 6 ตัว",
			ko: "상대의 배틀 포켓몬을 혼란으로 만든다. 이 혼란으로 올리는 데미지 카운터의 수는 6개가 된다."
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