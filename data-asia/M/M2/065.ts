import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "プクリン",
	},

	illustrator: "En Morikura",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "キメ細やかな 毛皮の 持ち主。 怒らせると どんどん ふくらみ のしかかってくるので 注意。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "りんしょう"}, "damage": "40x", "cost": ["Colorless", "Colorless"], "effect": {"ja": "自分の場の、ワザ「りんしょう」を持つポケモンの数×40ダメージ。"}}, {"name": {"ja": "ちきゅうなげ"}, "damage": 100, "cost": ["Colorless", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "プリン",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [40],

	thirdParty: {
		cardmarket: 850573,
		tcgplayer: 655844,
	},
};

export default card;