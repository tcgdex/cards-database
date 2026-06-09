import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "キュウコン",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "９本の 尻尾には それぞれ 違う 神秘的な 力が 秘められている という 話だ。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "あやかしへんげ"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札を上から1枚トラッシュし、そのカードがサポートなら、その効果を、このワザの効果として使う。"}}, {"name": {"ja": "かえん"}, "damage": 60, "cost": ["Fire", "Colorless"]}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ロコン",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [38],

	thirdParty: {
		cardmarket: 840160,
		tcgplayer: 647120,
	},
};

export default card;