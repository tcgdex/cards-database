import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "グライオン",
		'zh-tw': "天蠍王",
		th: "ไกลออน"
	},

	illustrator: "GOSSAN",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [472],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "羽音を 立てずに 空を 飛ぶ。 長い 尻尾で 獲物を 捕まえ キバで 急所を 一突き。",
		'zh-tw': "可不發出振翅聲而在空中飛行。 先用長長的尾巴攫住獵物， 再用牙齒朝弱點給予一刺。",
		th: "บินบนท้องฟ้าได้แบบไร้เสียง จะใช้หางที่ยาวจับเหยื่อแล้วใช้เขี้ยวแทงจุดอ่อน"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "つきさす",
			'zh-tw': "突刺",
			th: "แทง"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "どくどくばり",
			'zh-tw': "劇毒針",
			th: "เหล็กในมหาพิษ"
		},

		damage: 80,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は2個になる。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為2個。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ] จำนวนตัวนับแดเมจที่วางด้วยสภาวะ[พิษ]นี้จะเป็น 2 ตัว"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 734262
	}
}

export default card