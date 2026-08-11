import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ビビヨン",
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "生まれた 土地の 気候や 風土の 影響により 模様が 変わる。 花咲く 土地の 姿。",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "おおきなはね"}, "effect": {"ja": "自分の番に1回使える。相手は相手自身の手札をすべてウラにして切り、山札の下にもどす。その後、相手は山札を4枚引く。"}}],

	attacks: [{"name": {"ja": "ふきぬける"}, "damage": "60+", "cost": ["Grass"], "effect": {"ja": "場にスタジアムが出ているなら、60ダメージ追加。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "コフーライ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [666],

	thirdParty: {
		cardmarket: 867923,
		tcgplayer: 674328,
	},
};

export default card;