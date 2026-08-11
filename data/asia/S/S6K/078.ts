import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ハピナスV",
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しぜんかいふく" },
			effect: {
				ja: "自分の手札からこのポケモンにエネルギーをつけるたび、このポケモンの特殊状態をすべて回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ハッピーボンバー" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーの数×30ダメージ追加。のぞむなら、ダメージを与えたあとに、トラッシュからエネルギーを3枚まで選び、このポケモンにつける。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560979,
				tcgplayer: 569306,
			},
		},
	],

	retreat: 4,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [242],
};

export default card;
