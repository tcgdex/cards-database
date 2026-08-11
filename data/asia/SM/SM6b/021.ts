import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ビリリダマ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		'ja-jp': "発電所などに 現れる。 モンスターボールと 間違えて 触って しびれる 人が 多い。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エレキフロート" },
			effect: {
				'ja-jp': "このポケモンにエネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "でんきショック" },
			damage: 20,
			cost: ["Lightning", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559171,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [100],
};

export default card;
