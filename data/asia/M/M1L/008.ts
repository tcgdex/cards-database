import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "コノハナ",
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "森の奥で ひっそりと 暮らす。 縄張りに 入り込んだ 相手に 草笛の 音色で 警告する。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "はたく"}, "damage": 30, "cost": ["Grass"]}, {"name": {"ja": "けたぐり"}, "damage": 50, "cost": ["Grass", "Colorless"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "タネボー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [274],

	thirdParty: {
		cardmarket: 840157,
		tcgplayer: 647117,
	},
};

export default card;