import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "オドリドリ",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "羽毛を こすり合わせ 帯電。 踊るように 敵に 近づき 電撃パンチを お見舞いするぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "びりびりポンポン" },
			cost: ["Lightning"],
			effect: {
				ja: "おたがいの場の「ポケモンGX・EX」全員に、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ライトニングボール" },
			damage: 70,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558998,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [741],
};

export default card;
