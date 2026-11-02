import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "シロデスナex",
		'zh-tw': "噬沙堡爺ex",
		'zh-cn': "噬沙堡爺ex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Psychic"],

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "すなじごく",
				'zh-tw': "流沙地獄",
				'zh-cn': "流沙地獄",
			},
			damage: 160,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
				'zh-cn': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
		{
			name: {
				ja: "バライトジェイル",
				'zh-tw': "重晶石之獄",
				'zh-cn': "重晶石之獄",
			},
			cost: ["Water", "Psychic", "Fighting"],
			effect: {
				ja: "相手のベンチポケモン全員に、それぞれ残りHPが「100」になるように、ダメカンをのせる。",
				'zh-tw': "在對手的所有備戰寶可夢身上放置傷害指示物直到各自的剩餘HP變為「100」為止。",
				'zh-cn': "在對手的所有備戰寶可夢身上放置傷害指示物直到各自的剩餘HP變為「100」為止。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793491,
				tcgplayer: 587637,
			},
		},
	],

	evolveFrom: {
		ja: "スナバァ",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [770],

	suffix: "EX",
};

export default card;
