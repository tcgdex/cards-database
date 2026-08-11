import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ルガルガン",
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "気に入らない 命令は 平気で 無視。 相手を 仕留めるためなら 傷つくことも まるで 気にしない。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ちがたぎる" },
			effect: {
				ja: "相手の場に「ポケモンGX・EX」がいるなら、このポケモンが使うワザに必要なエネルギーは、【無】エネルギー3個ぶん少なくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ボルテージクロー" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンに特殊エネルギーがついているなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 554893,
			},
		},
	],

	evolveFrom: {
		ja: "イワンコ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [745],
};

export default card;
