import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "キリキザン",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "大勢の コマタナを 従えて 獲物を 群れで 追いつめる。 とどめは キリキザンが 刺す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いってんづき" },
			damage: "30+",
			cost: ["Metal"],
			effect: {
				ja: "このポケモンにダメカンがのっていないなら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "パワーエッジ" },
			damage: 90,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558614,
			},
		},
	],

	evolveFrom: {
		ja: "コマタナ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [625],
};

export default card;
