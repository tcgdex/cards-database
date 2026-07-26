import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドクロッグ",
		'zh-tw': "毒骷蛙",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "のど元に 毒袋を 持つ。 のどを 鳴らすと 溜まった 毒は 練りこまれ 強力になる。",
		'zh-tw': "喉嚨處有著毒囊。 從喉嚨發出鳴叫時， 積存的毒素就會被煉製得更加強勁。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "どつく",
				'zh-tw': "推擊",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "クリーンヒット",
				'zh-tw': "俐落一擊",
			},
			damage: "90+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが進化ポケモンなら、90ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加90點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773773,
				tcgplayer: 566275,
			},
		},
	],

	evolveFrom: {
		ja: "グレッグル",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [454],
};

export default card;
