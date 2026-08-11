import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュペッタGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "シャドームーブ" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。おたがいの場のポケモンにのっているダメカンを1個、おたがいの場の別のポケモンにのせ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かげのじゅもん" },
			damage: "30+",
			cost: ["Psychic"],
			effect: {
				ja: "自分のトラッシュのサポートの枚数x10ダメージ追加。追加できるダメージはサポート10枚ぶんまで。",
			},
		},
		{
			name: { ja: "トゥームハントGX" },
			cost: ["Psychic"],
			effect: {
				ja: "自分のトラッシュにある好きなカードを3枚、相手に見せてから、手札に加える。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551601,
			},
		},
	],

	evolveFrom: {
		ja: "カゲボウズ",
	},

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [354],

	suffix: "GX",
};

export default card;
