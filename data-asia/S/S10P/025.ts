import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ クレベース",
		'zh-tw': "洗翠 冰岩怪",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		ja: "下顎を 覆う 氷塊の装甲は 鋼に勝り 岩石を 砕くこと 容易なり。 深雪を かき分け 険しい 山道を 猛進す。",
		'zh-tw': "包覆下顎的冰塊裝甲硬度更勝鋼鐵，能輕易地擊碎岩石。冰岩怪藉此剷開 厚重積雪，在險峻的山路上猛衝。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ぶあついこおり",
				'zh-tw': "渾厚冰",
			},
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-30」される。",
				'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ひょうざんおろし",
				'zh-tw': "冰山風",
			},
			damage: "100+",
			cost: ["Water", "Water", "Colorless", "Colorless"],
			effect: {
				ja: "場にスタジアムが出ているなら、120ダメージ追加。その後、そのスタジアムをトラッシュする。",
				'zh-tw': "若場上有競技場卡，則增加120點傷害。然後，將那張競技場卡丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651084,
				tcgplayer: 569868,
			},
		},
	],

	evolveFrom: {
		ja: "カチコール",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [713],
};

export default card;
