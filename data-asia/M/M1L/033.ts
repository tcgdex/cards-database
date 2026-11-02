import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "イシヘンジン",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "体の 岩石の 成分は 生息地から 遠く 離れた 土地の 岩盤と 一致した。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ストーンキック"}, "damage": 20, "cost": ["Fighting"], "effect": {"ja": "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}, {"name": {"ja": "そこぢから"}, "damage": 140, "cost": ["Fighting", "Fighting", "Colorless"], "effect": {"ja": "次の自分の番、このポケモンはワザが使えない。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [874],

	thirdParty: {
		cardmarket: 840328,
		tcgplayer: 647142,
	},
};

export default card;