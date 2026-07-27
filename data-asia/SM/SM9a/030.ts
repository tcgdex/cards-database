import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "カラマネロ",
	},

	illustrator: "Yusuke Ohmura",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "強力な さいみんじゅつを 使う。 それを 利用し 悪事を 働く者は 後を 絶たない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "さいみんしはい" },
			cost: ["Darkness"],
			effect: {
				ja: "相手の手札を見る。のぞむなら、その中にあるポケモンを、1枚トラッシュする。その場合、そのポケモンが持っているワザ（GXワザをのぞく）を1つ選び、このワザとして使う。",
			},
		},
		{
			name: { ja: "ダークプレッシャー" },
			damage: 80,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558217,
			},
		},
	],

	evolveFrom: {
		ja: "マーイーカ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [687],
};

export default card;
