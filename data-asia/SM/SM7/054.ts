import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "メタング",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "磁力を 放つ 鉱物が 好物。 時速 １００キロで ノズパスを 追いつめるぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "バレットパンチ" },
			damage: "20+",
			cost: ["Metal"],
			effect: {
				ja: "コインを2回投げ、オモテの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559015,
			},
		},
	],

	evolveFrom: {
		ja: "ダンバル",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [375],
};

export default card;
