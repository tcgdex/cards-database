import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "パモット",
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "群れが 襲われたときは 電撃を 駆使した 格闘技で 真っ先に 戦いを 挑み 敵を 倒す。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ビリリパンチ"}, "damage": 60, "cost": ["Lightning", "Lightning"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "パモ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [922],

	thirdParty: {
		cardmarket: 850540,
		tcgplayer: 655812,
	},
};

export default card;