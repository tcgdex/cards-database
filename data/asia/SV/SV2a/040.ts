import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "プクリンex",
		'zh-tw': "胖可丁ex",
		'th-th': "พูคูรินex",
		'id-id': "Wigglytuff ex",
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ふくらむボディ",
				'zh-tw': "膨脹之軀",
				'th-th': "ร่างพอง",
				'id-id': "Tubuh Menggelembung",
			},
			effect: {
				'ja-jp': "このポケモンに特殊エネルギーがついているなら、このポケモンの最大HPは「+100」される。",
				'zh-tw': "若這隻寶可夢身上附有特殊能量卡，則這隻寶可夢的最大HP「+100」。",
				'th-th': "ถ้าโปเกมอนนี้มีพลังงานพิเศษติดอยู่ HP สูงสุดของโปเกมอนนี้จะถูก [+100]",
				'id-id': "Jika Pokémon ini mengenakan Energi Spesial, HP maksimal Pokémon ini bertambah sejumlah 100.",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "フレンドタックル",
				'zh-tw': "朋友衝撞",
				'th-th': "เฟรนด์แท็กเกิล",
				'id-id': "Friend Tackle",
			},
			damage: "90+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "この番、手札からサポートを出して使っていたなら、90ダメージ追加。",
				'zh-tw': "在這個回合，若從手牌使出了支援者卡，則增加90點傷害。",
				'th-th': "เทิร์นนี้ ถ้านำการ์ดซัพพอร์ตจากบนมือออกมาใช้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 90",
				'id-id': "Jika pada giliran ini, Supporter telah dimainkan dari Kartu Pegangan, kerusakan yang diberikan bertambah sejumlah 90.",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719482,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "プリン",
	},

	retreat: 3,
	regulationMark: "G",
	rarity: "Double rare",
	dexId: [40],

	suffix: "EX",
};

export default card;
