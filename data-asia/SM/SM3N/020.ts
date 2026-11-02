import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "サマヨール",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "体の 中で 燃えている 人魂を のぞきこむと 魂を 吸い取られてしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "よるにさまよう" },
			cost: ["Psychic"],
			effect: {
				ja: "おたがいのポケモン全員に、それぞれダメカンを1個のせる。",
			},
		},
		{
			name: { ja: "おそいかかる" },
			damage: "30+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561020,
			},
		},
	],

	evolveFrom: {
		ja: "ヨマワル",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [356],
};

export default card;
