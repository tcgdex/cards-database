import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘイラッシャ",
		'zh-tw': "潤水鴨",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		ja: "大食らいだが エサを 取るのは 苦手。 シャリタツと コンビを 組んで 獲物を 捕らえるのだ。",
		'zh-tw': "很久以前從遠方來到了 這裡棲息。羽毛分泌出的 凝膠有防水和防污的效果。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶちかます",
				'zh-tw': "水沫",
			},
			damage: 60,
			cost: ["Water", "Colorless", "Colorless"],
		},
		{
			name: { ja: "ひっさつウェーブ" },
			damage: "100+",
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、すべてオモテなら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 692251,
				tcgplayer: 587761,
			},
		},
	],

	retreat: 4,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [977],
};

export default card;
