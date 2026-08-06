import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル サンダーV",
		'zh-tw': "伽勒爾 閃電鳥V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "とうそうほんのう",
				'zh-tw': "鬥爭本能",
			},
			effect: {
				ja: "相手の場の「ポケモンV」の数ぶん、このポケモンがワザを使うための【無】エネルギーは少なくなる。",
				'zh-tw': "這隻寶可夢使用招式所需的【無】能量，減少對手的場上的「寶可夢【V】」的數量。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "らいめいげり",
				'zh-tw': "雷鳴蹴擊",
			},
			damage: 170,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "ダメージを与える前に、相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。",
				'zh-tw': "在造成傷害前，選擇1個對手的戰鬥寶可夢身上附加的特殊能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586600,
				tcgplayer: 571337,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [145],
};

export default card;
