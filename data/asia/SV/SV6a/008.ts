import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘルガー",
		'zh-tw': "黑魯加",
	},

	illustrator: "burari",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "不気味な 遠吠えを 聞いた ポケモンは 震え 一目散に 自分の 巣に 戻る。",
		'zh-tw': "聽見牠恐怖長嚎的 寶可夢會渾身發抖， 一溜煙地回到自己的巢裡。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かみつく",
				'zh-tw': "咬住",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "バークアウト",
				'zh-tw': "大聲咆哮",
			},
			damage: 100,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-100」される。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-100」點。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773757,
				tcgplayer: 566259,
			},
		},
	],

	evolveFrom: {
		ja: "デルビル",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [229],
};

export default card;
