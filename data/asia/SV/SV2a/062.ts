import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニョロボン",
		'zh-tw': "蚊香泳士",
		'th-th': "เนียวโรบอน",
		'id-id': "Poliwrath",
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		'ja-jp': "泳ぎ だけでなく 格闘技も 得意。 鍛えあげた 腕から 豪快な パンチを 繰りだす。",
		'zh-tw': "除了游泳之外，也擅長使用格鬥技。完美鍛鍊的手臂 可以使出豪邁的拳擊。",
		'th-th': "เก่งทั้งด้านการว่ายน้ำและศิลปะการต่อสู้ ลำแขนที่ฝึกฝนมาเป็นอย่างดีนั้นปล่อยหมัดอันทรงพลังออกมาได้",
		'id-id': "Poliwrath tidak hanya ahli berenang, tapi juga ahli bela diri. Pokémon ini meluncurkan pukulan dahsyat menggunakan lengannya yang terlatih.",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				'ja-jp': "バブルこうせん",
				'zh-tw': "泡沫光線",
				'th-th': "บับเบิ้ลบีม",
				'id-id': "Sinar Gelembung",
			},
			damage: 50,
			cost: ["Water"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
				'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
				'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh.",
			},
		},
		{
			name: {
				'ja-jp': "ごうかいパンチ",
				'zh-tw': "豪邁拳",
				'th-th': "หมัดแรงถึงใจ",
				'id-id': "Pukulan Dahsyat",
			},
			damage: "100+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、150ダメージ追加。",
				'zh-tw': "擲1次硬幣若為正面，則增加150點傷害。",
				'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 150",
				'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 150.",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719504,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837342,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837343,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニョロゾ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [62],
};

export default card;
