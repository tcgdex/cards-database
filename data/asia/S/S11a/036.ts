import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ラルトス",
		'zh-tw': "拉魯拉絲",
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "人や ポケモンの 感情を 敏感に キャッチ。 敵意を 感じると 物陰に 隠れる。",
		'zh-tw': "能敏銳地感知人和寶可夢的感情。一旦感受到敵意就會躲進暗處。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "メモリースキップ",
				'zh-tw': "記憶跳接",
			},
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。",
				'zh-tw': "選擇對手的戰鬥寶可夢持有的1個招式。在下個對手的回合，受到這個招式的寶可夢無法使用被選擇的招式。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673034,
				tcgplayer: 570799,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570886,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [280],
};

export default card;
