import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "パオジアン",
	},

	illustrator: "Satoshi Ito",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "大昔に 剣によって 露と消えた 者たちの 憎しみが 雪を まとい ポケモンになった。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ひるがえす"}, "damage": 20, "cost": ["Darkness"], "effect": {"ja": "のぞむなら、このポケモンをベンチポケモンと入れ替える。"}}, {"name": {"ja": "ライジングブレード"}, "damage": "80+", "cost": ["Darkness", "Darkness", "Colorless"], "effect": {"ja": "相手のバトルポケモンが「ポケモンex」なら、80ダメージ追加。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [1002],

	thirdParty: {
		cardmarket: 867975,
		tcgplayer: 674372,
	},
};

export default card;