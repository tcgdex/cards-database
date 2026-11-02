import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガブリアス",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "音速で 飛び 獲物を 探す。 エサを 巡り ボーマンダと 空中戦を 繰り広げる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぎゃくしゅうのオーラ" },
			effect: {
				ja: "自分のサイドの残り枚数が、相手より多いなら、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+80」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "オーバーエッジ" },
			damage: "80+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを、1個トラッシュする。その場合、40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557303,
			},
		},
	],

	evolveFrom: {
		ja: "ガバイト",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [445],
};

export default card;
