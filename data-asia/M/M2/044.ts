import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "グライオン",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "わずかな 風の流れに うまく 乗ると １度も 羽ばたくことなく この星を １周 できる。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ポイズンサークル"}, "damage": 50, "cost": ["Fighting"], "effect": {"ja": "相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "グライガー",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [472],

	thirdParty: {
		cardmarket: 850551,
		tcgplayer: 655823,
	},
};

export default card;