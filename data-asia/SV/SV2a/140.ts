import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カブト",
		'zh-tw': "化石盔",
		th: "คาบูโตะ",
		id: "Kabuto"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [140],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "絶滅したとも 言われるが 一部の 地域では けっこう 普通に 見かける らしい。",
		'zh-tw': "雖然有人說這種寶可夢已經滅絕，但牠在一部分 地區似乎是相當常見的。",
		th: "แม้จะเป็นที่กล่าวกันว่าได้สูญพันธุ์ไปแล้ว แต่ดูเหมือนว่าในบางพื้นที่จะยังสามารถพบเห็นได้โดยทั่วไป",
		id: "Dikatakan bahwa Kabuto telah punah, tapi kabarnya Pokémon ini lumayan umum ditemukan di sebagian daerah."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "ダブルひっかき",
			'zh-tw': "雙重抓",
			th: "ข่วนทวีคูณ",
			id: "Cakaran Ganda"
		},

		damage: "70×",

		effect: {
			ja: "コインを2回投げ、オモテの数×70ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×70點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x70",
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 70 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719593
	}
}

export default card