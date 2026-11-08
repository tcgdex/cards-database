import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラフレシア",
		'zh-tw': "霸王花",
		'th-th': "รัฟเฟรเซีย",
		'id-id': "Vileplume",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'ja-jp': "花びらが 大きいほど たくさん 花粉を 出すが 頭が 重たくて 疲れてしまうという。",
		'zh-tw': "雖然花瓣越大就能放出越多的花粉，但頭部也會 隨之變重而容易疲倦。",
		'th-th': "ว่ากันว่ายิ่งกลีบดอกใหญ่เท่าไรยิ่งปล่อยละอองเกสรได้มากเท่านั้น แต่หัวหนักจนทำให้รู้สึกเหนื่อย",
		'id-id': "Makin besar kelopak bunga Vileplume, makin banyak pula serbuk sari yang dapat dikeluarkan olehnya. Akan tetapi, dikatakan bahwa kepalanya yang berat membuat Pokémon ini kelelahan.",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "まんかいエナジー",
				'zh-tw': "全開能量",
				'th-th': "พลังงานบานสะพรั่ง",
				'id-id': "Energi Mekar Penuh",
			},
			effect: {
				'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を上から8枚見て、その中から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。",
				'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。查看自己的牌庫上方8張卡，從其中選擇任意數量的基本能量卡，以任意方式附於自己的寶可夢身上。將剩餘卡放回牌庫並重洗。",
				'th-th': "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง ดูการ์ด 8 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดพลังงานพื้นฐานจากในนั้นตามจำนวนที่ชอบ ติดที่โปเกมอนฝ่ายเราตามชอบ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
				'id-id': "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Lihat 8 kartu dari atas Deck sendiri, pilih sesukanya Energi Dasar di antaranya, lalu kenakan sesukanya pada Pokémon sendiri. Kocok kembali sisa kartu ke Deck.",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "ソーラービーム",
				'zh-tw': "日光束",
				'th-th': "โซล่าร์บีม",
				'id-id': "Solar Beam",
			},
			damage: 90,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719487,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837307,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837308,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "クサイハナ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [45],
};

export default card;
