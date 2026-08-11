import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナッシー",
		'zh-tw': "椰蛋樹",
		'th-th': "นัชชี",
		'id-id': "Exeggutor",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'ja-jp': "３つの 頭が 一丸となって 撃つ サイコパワーは 強力。 空が 曇ると 動きが 鈍る。",
		'zh-tw': "３顆頭團結一致發出的精神力量威力強大。天氣 變陰時動作就會變得遲緩。",
		'th-th': "พลังจิตที่หัวทั้ง 3 หัวรวมใจเป็นหนึ่งเดียวปล่อยออกมานั้นมีพลังแรง วันที่มีเมฆมากจะเคลื่อนไหวช้า",
		'id-id': "Kekuatan psikokinesis yang ditembakkan saat 3 kepala Exeggutor bekerja sama sangat kuat. Gerakannya menjadi lambat saat langit berawan.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "サイコキネシス",
				'zh-tw': "精神強念",
				'th-th': "ไซโคคิเนซิส",
				'id-id': "Psikis",
			},
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。",
				'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
				'th-th': "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30",
				'id-id': "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan.",
			},
		},
		{
			name: {
				'ja-jp': "ぶちかます",
				'zh-tw': "頭突",
				'th-th': "ตบหนัก",
				'id-id': "Hantaman Penuh Tenaga",
			},
			damage: 130,
			cost: ["Grass", "Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719556,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837434,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837435,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "タマタマ",
	},

	retreat: 3,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [103],
};

export default card;
