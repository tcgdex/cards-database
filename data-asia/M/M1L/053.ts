import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "オニドリル",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "オニドリルの 縄張りで 食べ物を  持って 歩くのは 危険だ。  あっという 間に かっさらわれるぞ。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "マシンガンドリル"}, "damage": "30x", "cost": ["Colorless"], "effect": {"ja": "コインを5回投げ、オモテの数×30ダメージ。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "オニスズメ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [22],

	thirdParty: {
		cardmarket: 840348,
		tcgplayer: 647162,
	},
};

export default card;