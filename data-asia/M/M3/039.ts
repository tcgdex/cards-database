import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "カバルドン",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "体内に 溜めた 砂を 体の 穴から 噴き上げて 巨大な 竜巻を 作り 攻撃する。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "たつまきふんしゃ"}, "damage": 80, "cost": ["Fighting", "Fighting", "Colorless"], "effect": {"ja": "この番に、手札から「タラゴン」を出して使っていたなら、相手の山札を上から3枚トラッシュする。"}}, {"name": {"ja": "ヘビーインパクト"}, "damage": 130, "cost": ["Fighting", "Fighting", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ヒポポタス",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [450],

	thirdParty: {
		cardmarket: 867961,
		tcgplayer: 674358,
	},
};

export default card;