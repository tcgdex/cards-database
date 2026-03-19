import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "カメテテ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "２匹の カメテテが ひとつの 岩で 暮らす。 ケンカすると どちらかが ほかの 岩に 移る。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ダブルドロー"}, "cost": ["Fighting"], "effect": {"ja": "自分の山札を2枚引く。"}}, {"name": {"ja": "ひっかく"}, "damage": 30, "cost": ["Fighting", "Fighting"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [688],

	thirdParty: {
		cardmarket: 867963,
		tcgplayer: 674360,
	},
};

export default card;