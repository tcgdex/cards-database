import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "サーナイトGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Fairy"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ひみつのいずみ" },
			effect: {
				ja: "自分の番に1回使える。自分の手札にある[妖]エネルギーを1枚、自分のポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "インフィニットフォース" },
			damage: "30×",
			cost: ["Fairy"],
			effect: {
				ja: "おたがいのバトルポケモンについているエネルギーの数x30ダメージ。",
			},
		},
		{
			name: { ja: "トワイライトGX" },
			cost: ["Fairy"],
			effect: {
				ja: "自分のトラッシュにある好きなカードを10枚、相手に見せてから、山札にもどして切る。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 550956,
			},
		},
	],

	evolveFrom: {
		ja: "キルリア",
	},

	retreat: 2,
	rarity: "Double rare",
	dexId: [282],

	suffix: "GX",
};

export default card;
