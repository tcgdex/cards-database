import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "コイキング",
		'zh-tw': "鯉魚王",
		th: "คอยคิง",
		id: "Magikarp",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		ja: "力のない 情けない ポケモン。 たまに 高く 飛び跳ねても ２メートルを 超すのが やっとだ。",
		'zh-tw': "沒力量的可憐寶可夢。偶爾跳得比較高時， 也只是勉強高過2公尺而已。",
		th: "เป็นโปเกมอนที่อ่อนแอและน่าสมเพช นาน ๆ ทีกระโดดสูงเกิน 2 เมตรก็นับว่าดีแล้ว",
		id: "Pokémon menyedihkan yang tidak memiliki kekuatan. Walau kadang Magikarp melompat tinggi, ketinggiannya hampir tidak dapat melampaui 2 meter.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はねにはねる",
				'zh-tw': "跳了又跳",
				th: "ดิ้นกระแด่วกระแด่ว",
				id: "Lompatan Demi Lompatan",
			},
			cost: ["Water"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数ぶん、自分の山札を引く。",
				'zh-tw': "擲硬幣直到出現反面，從自己的牌庫抽出與正面出現的次數相同數量的卡。",
				th: "ทอยเหรียญจนกว่าจะออกก้อย จั่วการ์ดจากสำรับการ์ดฝ่ายเรา ตามจำนวนครั้งที่ออกหัว",
				id: "Lempar koin hingga hasilnya sisi belakang. Ambil kartu dari atas Deck sendiri untuk tiap lemparan dengan hasil sisi depan.",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719582,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837482,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837483,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [129],
};

export default card;
