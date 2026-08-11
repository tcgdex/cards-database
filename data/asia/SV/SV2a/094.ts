import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゲンガー",
		'zh-tw': "耿鬼",
		'th-th': "เก็งกา",
		'id-id': "Gengar",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'ja-jp': "命を 奪おうと 決めた 獲物の 影に 潜り込み じっと チャンスを 狙ってる。",
		'zh-tw': "會潛進獵物的影子裡，然後靜靜地等待 奪取性命的機會到來。",
		'th-th': "เข้าไปในเงาของเหยื่อที่เล็งไว้ แล้วรอโอกาสปลิดชีพ",
		'id-id': "Untuk merebut nyawa targetnya, Gengar menyelinap ke dalam bayangan targetnya, dan terus terdiam menunggu kesempatan.",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				'ja-jp': "ポルターガイスト",
				'zh-tw': "靈騷",
				'th-th': "โพลเตอร์ไกสท์",
				'id-id': "Poltergeist",
			},
			damage: "50×",
			cost: ["Psychic"],
			effect: {
				'ja-jp': "相手の手札を見て、その中にあるトレーナーズの枚数×50ダメージ。",
				'zh-tw': "查看對手的手牌，造成其中訓練家卡的張數×50點傷害。",
				'th-th': "ดูการ์ดบนมือฝ่ายตรงข้าม แดเมจจะเท่ากับจำนวนการ์ดเทรนเนอร์ที่อยู่ในนั้น x50",
				'id-id': "Lihat Kartu Pegangan lawan, serangan ini memberikan kerusakan sejumlah 50 untuk tiap lembar Trainer yang ada di antaranya.",
			},
		},
		{
			name: {
				'ja-jp': "ホロウダイブ",
				'zh-tw': "陰森奇襲",
				'th-th': "ฮอลโลว์ไดฟ์",
				'id-id': "Hollow Dive",
			},
			damage: 110,
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "ダメカン3個を、相手のベンチポケモンに好きなようにのせる。",
				'zh-tw': "將3個傷害指示物以任意方式放置於對手的備戰寶可夢身上。",
				'th-th': "วางตัวนับแดเมจ 3 ตัว บนโปเกมอนบนเบนช์ฝ่ายตรงข้ามตามชอบ",
				'id-id': "Letakkan sejumlah 3 Token Kerusakan pada Pokémon Cadangan lawan sesukanya.",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719547,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837416,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837417,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ゴースト",
	},

	retreat: 0,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [94],
};

export default card;
