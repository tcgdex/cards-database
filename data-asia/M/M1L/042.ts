import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "フォクスライ",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "身軽な 体と 鋭い ツメで  エサや タマゴを 盗んで まわる。  パルスワンが 天敵。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "よくばりハント"}, "damage": 20, "cost": ["Colorless"], "effect": {"ja": "のぞむなら、自分の手札が6枚になるように、山札を引く。"}}, {"name": {"ja": "しっこくのキバ"}, "damage": 60, "cost": ["Darkness", "Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "クスネ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [828],

	thirdParty: {
		cardmarket: 840337,
		tcgplayer: 647151,
	},
};

export default card;