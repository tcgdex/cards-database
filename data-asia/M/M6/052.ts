import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャラランガ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		ja: "ウロコを 打ち鳴らして 相手の 度胸を 試す。 弱い者は その 音に 恐れ 逃げ出すのだ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "スケイルビート" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から6枚見て、その中から基本エネルギーを好きなだけ選び、自分の[N]ポケモンに好きなようにつける。残りのカードは山札にもどして切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぶちかます" },
			damage: 170,
			cost: ["Lightning", "Fighting", "Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 899955,
				tcgplayer: 709205,
			},
		},
	],

	evolveFrom: {
		ja: "ジャランゴ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Rare",
	dexId: [784],
};

export default card;
