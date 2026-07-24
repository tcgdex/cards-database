import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトカゲ",
		'zh-tw': "小火龍",
		th: "ฮิโตคาเงะ",
		id: "Charmander",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "生まれたときから しっぽに 炎が ともっている。 炎が 消えたとき その 命は 終わって しまう。",
		'zh-tw': "從出生時開始尾巴上就有火焰在燃燒。火焰熄滅時，生命也會結束。",
		th: "มีหางที่ติดไฟตั้งแต่เกิด หากไฟดับนั่นหมายถึงการจบชีวิต",
		id: "Sejak lahir, api menyala di ekor Charmander. Hidupnya berakhir saat api tersebut padam.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "まるやけ",
				'zh-tw': "全部燒光",
				th: "เผาเตียน",
				id: "Bakar Bulat-bulat",
			},
			cost: ["Fire"],
			effect: {
				ja: "場に出ているスタジアムをトラッシュする。",
				'zh-tw': "將場上的競技場卡丟棄。",
				th: "ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด",
				id: "Buang Stadium yang ada di Arena ke Trash.",
			},
		},
		{
			name: {
				ja: "ひをはく",
				'zh-tw': "吐火",
				th: "พ่นอัคคี",
				id: "Memuntahkan Api",
			},
			damage: 30,
			cost: ["Fire", "Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719621,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Illustration rare",
	dexId: [4],
};

export default card;
