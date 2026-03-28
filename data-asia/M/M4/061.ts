import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ナットレイ",
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "どっきりおとし"}, "effect": {"ja": "相手の番に、このカードが相手のワザ・特性・グッズ・サポートの効果で山札からトラッシュされたとき、相手の山札を上から8枚トラッシュする。"}}],

	attacks: [{"name": {"ja": "スペシャルウィップ"}, "cost": ["Metal", "Metal"], "damage": "70＋", "effect": {"ja": "このポケモンに特殊エネルギーがついているなら、70ダメージ追加。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "テッシード",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [598],
};

export default card;
