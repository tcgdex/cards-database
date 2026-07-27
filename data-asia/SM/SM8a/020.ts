import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "バンギラス",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "バンギラスが 暴れると 山が 崩れ 川が 埋まるため 地図を 書き換える ことになる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "スピンテール" },
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "かみちぎる" },
			damage: "130+",
			cost: ["Darkness", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンGX・EX」なら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558594,
			},
		},
	],

	evolveFrom: {
		ja: "サナギラス",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [248],
};

export default card;
