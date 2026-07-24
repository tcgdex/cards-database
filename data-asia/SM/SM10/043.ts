import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ディグダ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],

	description: {
		ja: "地下に トンネルを 掘って 移動。 光が 嫌いなので 地上に 出てくるのは 日が 沈んでから。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ちかこうさく" },
			effect: {
				ja: "このポケモンが、「サカキの追放」の効果でトラッシュされたとき、相手の山札を上から1枚トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ひっかける" },
			damage: 10,
			cost: ["Fighting"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557398,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [50],
};

export default card;
