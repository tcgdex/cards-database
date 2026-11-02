import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ワナイダー",
		'zh-tw': "新葉喵",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "木の枝や 天井に 糸で 張りつき 音もなく 行動する。 獲物に 気づかれる前に 倒す。",
		'zh-tw': "毛茸茸的體毛有著 近似於植物的成分。 會勤快地洗臉以防止乾燥。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "いとでしばる",
				'zh-tw': "小吸取",
			},
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "將這隻寶可夢恢復「10」HP。",
			},
		},
		{
			name: { ja: "ジェットヘッド" },
			damage: 100,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 692248,
				tcgplayer: 587759,
			},
		},
	],

	evolveFrom: {
		ja: "タマンチュラ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [918],
};

export default card;
