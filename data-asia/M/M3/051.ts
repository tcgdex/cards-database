import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ドラピオン",
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "猛毒を もつが 使うことは  まれ。 車も 叩きつぶす  怪力で 暴れまわる。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "たたきつぶす"}, "damage": 60, "cost": ["Darkness", "Darkness"]}, {"name": {"ja": "ハザードテール"}, "damage": 100, "cost": ["Darkness", "Darkness", "Darkness"], "effect": {"ja": "このポケモンにも70ダメージ。相手のバトルポケモンをどくとマヒにする。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "スコルピ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [452],

	thirdParty: {
		cardmarket: 867973,
		tcgplayer: 674370,
	},
};

export default card;