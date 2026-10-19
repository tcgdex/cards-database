import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	evolveFrom: { ja: "カラカラ" },
	dexId: [105],
	rarity: "Uncommon",
	set: Set,

	name: {
		ja: "ガラガラ",
		'zh-tw': "嘎啦嘎啦",
		th: "การะการะ"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "リズミカルに ホネを 打ち鳴らし 仲間と 連絡を 取りあっている。 そのパターンは ５０近く あるのだ。",
		'zh-tw': "會節奏性地敲響骨頭，藉此與夥伴進行聯絡。節奏有著將近５０種不同變化。",
		th: "จะเคาะกระดูกเป็นจังหวะเพื่อติดต่อกับพวกพ้อง โดยมีรูปแบบถึง 50 แบบเลยทีเดียว"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "ホネブーメラン",
			'zh-tw': "骨頭回力鏢",
			th: 'บูมเมอแรงกระดูก'
		},

		effect: {
			ja: "コインを2回投げ、オモテの数×90ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×90點傷害。",
			th: 'ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x90'
		},

		damage: "90×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	abilities: [{
		type: "Ability",

		name: {
			ja: "カブトアーマー",
			'zh-tw': "戰鬥盔甲",
			th: "เกราะแข็ง"
		},

		effect: {
			ja: "このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。",
			th: "แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับ จะถูก [-30]"
		}
	}],
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533777, tcgplayer: 569082, cardtrader: 240048 } }
	]
}

export default card
