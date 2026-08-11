import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カブト",
		'zh-tw': "化石盔",
		'th-th': "คาบูโตะ",
		'id-id': "Kabuto",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'ja-jp': "絶滅したとも 言われるが 一部の 地域では けっこう 普通に 見かける らしい。",
		'zh-tw': "雖然有人說這種寶可夢已經滅絕，但牠在一部分 地區似乎是相當常見的。",
		'th-th': "แม้จะเป็นที่กล่าวกันว่าได้สูญพันธุ์ไปแล้ว แต่ดูเหมือนว่าในบางพื้นที่จะยังสามารถพบเห็นได้โดยทั่วไป",
		'id-id': "Dikatakan bahwa Kabuto telah punah, tapi kabarnya Pokémon ini lumayan umum ditemukan di sebagian daerah.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ダブルひっかき",
				'zh-tw': "雙重抓",
				'th-th': "ข่วนทวีคูณ",
				'id-id': "Cakaran Ganda",
			},
			damage: "70×",
			cost: ["Fighting", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数×70ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×70點傷害。",
				'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x70",
				'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 70 untuk tiap lemparan dengan hasil sisi depan.",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719593,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837504,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837505,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [140],
};

export default card;
