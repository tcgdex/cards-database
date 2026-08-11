import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ルチャブル",
		'zh-tw': "泥泥鰍",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "翼を 使い 軽やかに 跳び 相手を 華麗に 仕留める 技は 生まれ育った 森で 磨かれる。",
		'zh-tw': "２根鬍子是靈敏的雷達。即使在因為泥濘而渾濁的水中，也能偵查到獵物的位置。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "フライングエントリー" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手のベンチポケモン2匹に、それぞれダメカンを1個のせる。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "つばさでうつ",
				'zh-tw': "躲藏",
			},
			damage: 70,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 691010,
				tcgplayer: 587791,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [701],
};

export default card;
