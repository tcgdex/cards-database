import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のニドリーノ",
		'zh-tw': "<火箭隊的>尼多力諾",
		'zh-cn': "<火箭隊的>尼多力諾",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "神経質で 喧嘩っ早い。 体内の アドレナリンが 増えると 毒素の 濃度も 高まるぞ。",
		'zh-tw': "神經質且容易發脾氣打架。 當體內的腎上腺素增加時， 毒素的濃度也會提升。",
		'zh-cn': "神經質且容易發脾氣打架。 當體內的腎上腺素增加時， 毒素的濃度也會提升。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ぶちかます",
				'zh-tw': "頭突",
				'zh-cn': "頭突",
			},
			damage: 30,
			cost: ["Darkness", "Colorless"],
		},
		{
			name: {
				ja: "つのでえぐる",
				'zh-tw': "角裂",
				'zh-cn': "角裂",
			},
			damage: "60+",
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、60ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加60點傷害。",
				'zh-cn': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加60點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821894,
				tcgplayer: 628703,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のニドラン♂",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [33],
};

export default card;
