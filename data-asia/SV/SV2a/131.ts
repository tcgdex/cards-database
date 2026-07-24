import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ラプラス",
		'zh-tw': "拉普拉斯",
		th: "ลาพลาซ",
		id: "Lapras",
	},

	illustrator: "LINNE",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "寒さに 強く 氷の 海も 平気。 皮膚は スベスベで 少しだけ ひんやり しているよ。",
		'zh-tw': "十分耐寒，不畏冰海。皮膚滑滑的， 摸起來會有點涼。",
		th: "ทนทานความหนาวเย็นแม้ทะเลน้ำแข็งก็ไม่เป็นไร ผิวหนังเรียบลื่นทำให้รู้สึกเย็นเล็กน้อย",
		id: "Lapras tahan dingin dan laut es pun tidak menjadi masalah baginya. Kulitnya mulus dan agak dingin.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "せなかにのせる",
				'zh-tw': "後背乘載",
				th: "ให้ขี่หลัง",
				id: "Letakkan ke Punggung",
			},
			cost: ["Water"],
			effect: {
				ja: "自分の山札からポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
				th: "เลือกการ์ดโปเกมอนได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
				id: "Pilih paling banyak 2 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
			},
		},
		{
			name: {
				ja: "アクアエッジ",
				'zh-tw': "水之刀鋒",
				th: "อควาเอดจ์",
				id: "Aqua Edge",
			},
			damage: 90,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719584,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837486,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837487,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [131],
};

export default card;
