import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルダック",
		'zh-tw': "哥達鴨",
		th: "โกลดัก",
		id: "Golduck",
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "水かきのついた 長い 手足を 使い 全力で 泳ぎだすと なぜか 額が 光り輝く。",
		'zh-tw': "當牠用帶有水蹼的修長手腳全力游泳時， 不知為何額頭會閃閃發光。",
		th: "ไม่รู้ทำไม พอใช้แขนขายาวที่มีพังผืดว่ายน้ำสุดกำลัง บริเวณหน้าผากจะเรืองแสงขึ้นมา",
		id: "Entah kenapa kening Golduck bersinar ketika ia berenang sekuat tenaga menggunakan kaki dan tangan panjang berselaputnya.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "すいなんきゅうじょ",
				'zh-tw': "水難救助",
				th: "กู้ภัยทางน้ำ",
				id: "Penyelamatan Bencana Air",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュからポケモンを4枚まで選び、相手に見せて、手札に加える。",
				'zh-tw': "從自己的棄牌區選擇最多4張寶可夢卡，在給對手看過後加入手牌。",
				th: "เลือกการ์ดโปเกมอนได้สูงสุด 4 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
				id: "Pilih paling banyak 4 lembar Pokémon dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan.",
			},
		},
		{
			name: {
				ja: "スーパースプラッシュ",
				'zh-tw': "超級飛濺",
				th: "ซูเปอร์สแปลช",
				id: "Super Splash",
			},
			damage: 120,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719497,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837327,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837328,
			},
		},
	],

	evolveFrom: {
		ja: "コダック",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [55],
};

export default card;
