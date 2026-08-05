import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "フーパ",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "空間を ゆがめる リングで あらゆる ものを 離れた 場所へ 飛ばしてしまう トラブルメーカー。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あくのいましめ" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "相手の場の特性を持つポケモンの数×20ダメージ追加。",
			},
		},
		{
			name: { ja: "マインドショック" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557308,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [720],
};

export default card;
