import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のスリーパー",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "相手と 目が 合ったときに 催眠術など 数々の 超能力を 使うという。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "サイコショット" },
			damage: 40,
			cost: ["Psychic"],
		},
		{
			name: { ja: "ベンチをあやつる" },
			damage: "80×",
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "相手は相手自身のベンチポケモンの数ぶんコインを投げる。相手のバトルポケモンに、ウラの数×80ダメージ。このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863591,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のスリープ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [97],
};

export default card;
