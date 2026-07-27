import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "ボスゴドラ",
	},

	illustrator: "Yoshinobu Saito",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		ja: "山を まるごと 縄張りに する。 傷が 多い ボスゴドラほど 戦っているので 侮れない。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "リベンジほう" },
			damage: "10+",
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチポケモンにのっているダメカンの数x10ダメージ追加。",
			},
		},
		{
			name: { ja: "バスタースイング" },
			damage: 120,
			cost: ["Metal", "Metal", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560346,
			},
		},
	],

	evolveFrom: {
		ja: "コドラ",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [306],
};

export default card;
