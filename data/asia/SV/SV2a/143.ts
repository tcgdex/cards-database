import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カビゴン",
		'zh-tw': "卡比獸",
		'th-th': "คาบิกอน",
		'id-id': "Snorlax",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'ja-jp': "頑丈な 胃袋は カビの 生えたものや 腐ったものを 食べても 壊れることはない。",
		'zh-tw': "擁有一個結實的胃，即使吃了發霉腐爛的東西， 也完全不會吃壞肚子。",
		'th-th': "มีถุงกระเพาะที่แข็งแรง แม้จะกินของที่มีราขึ้นหรือของเน่าเสียก็ไม่เคยท้องเสีย",
		'id-id': "Karena perutnya kuat, Snorlax tidak akan sakit perut walau memakan makanan berjamur atau makanan busuk sekalipun.",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "くいいじ",
				'zh-tw': "貪嘴",
				'th-th': "เจริญอาหาร",
				'id-id': "Kemaruk",
			},
			effect: {
				'ja-jp': "自分の番に1回使える。自分のトラッシュから「たべのこし」を2枚まで選び、相手に見せて、手札に加える。",
				'zh-tw': "在自己的回合時可使用1次。從自己的棄牌區選擇最多2張「吃剩的東西」，在給對手看過後加入手牌。",
				'th-th': "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [อาหารเหลือ] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
				'id-id': "Dapat digunakan 1 kali pada giliran sendiri. Pilih paling banyak 2 lembar Sisa Makanan dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan.",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "バッタンプレス",
				'zh-tw': "養肥壓制",
				'th-th': "อัดตึงตัง",
				'id-id': "Tekanan Gedebuk",
			},
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも30ダメージ。",
				'zh-tw': "這隻寶可夢也受到30點傷害。",
				'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
				'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30.",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719596,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837510,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837511,
			},
		},
	],

	retreat: 4,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [143],
};

export default card;
