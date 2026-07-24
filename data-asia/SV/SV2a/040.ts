import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "プクリンex",
		'zh-tw': "胖可丁ex",
		th: "พูคูรินex",
		id: "Wigglytuff ex",
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
				ja: "ふくらむボディ",
				'zh-tw': "膨脹之軀",
				th: "ร่างพอง",
				id: "Tubuh Menggelembung",
			},
			effect: {
				ja: "このポケモンに特殊エネルギーがついているなら、このポケモンの最大HPは「+100」される。",
				'zh-tw': "若這隻寶可夢身上附有特殊能量卡，則這隻寶可夢的最大HP「+100」。",
				th: "ถ้าโปเกมอนนี้มีพลังงานพิเศษติดอยู่ HP สูงสุดของโปเกมอนนี้จะถูก [+100]",
				id: "Jika Pokémon ini mengenakan Energi Spesial, HP maksimal Pokémon ini bertambah sejumlah 100.",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "フレンドタックル",
				'zh-tw': "朋友衝撞",
				th: "เฟรนด์แท็กเกิล",
				id: "Friend Tackle",
			},
			damage: "90+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "この番、手札からサポートを出して使っていたなら、90ダメージ追加。",
				'zh-tw': "在這個回合，若從手牌使出了支援者卡，則增加90點傷害。",
				th: "เทิร์นนี้ ถ้านำการ์ดซัพพอร์ตจากบนมือออกมาใช้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 90",
				id: "Jika pada giliran ini, Supporter telah dimainkan dari Kartu Pegangan, kerusakan yang diberikan bertambah sejumlah 90.",
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
		ja: "プリン",
	},

	retreat: 3,
	regulationMark: "G",
	rarity: "Double rare",
	dexId: [40],

	suffix: "EX",
};

export default card;
