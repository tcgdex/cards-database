import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ホルード",
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "大きな 耳は １トンを 超える 岩を 楽に 持ち上げる パワー。 工事現場で 大活躍する。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "じしん"}, "damage": 140, "cost": ["Colorless"], "effect": {"ja": "自分のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}, {"name": {"ja": "はりたおす"}, "damage": 100, "cost": ["Colorless", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ホルビー",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [660],

	thirdParty: {
		cardmarket: 868044,
		tcgplayer: 674383,
	},
};

export default card;