import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ウォーグル",
	},

	illustrator: "kamonabe",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "仲間のため 危険を かえりみず 戦う。 自動車を つかんだまま 大空を 舞う ことが できる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "つばめがえし" },
			damage: "40+",
			cost: ["Colorless"],
			effect: { ja: "コインを1回投げオモテなら、40ダメージ追加。" },
		},
		{
			name: { ja: "スピードウイング" },
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		ja: "ワシボン",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [628],
	thirdParty: {
		cardmarket: 829516,
		tcgplayer: 636710,
	},
};

export default card;
