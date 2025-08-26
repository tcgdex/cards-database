import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "キラバ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [156],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire", "Fire"],
			name: {
				ja: "煙幕",
			},
			effect: {
				ja: "防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Fire", "Fire"],
			name: {
				ja: "char",
			},
			effect: {
				ja: "防御ポケモンにチャーカウンターがない場合は、コインをひっくり返します。頭の場合は、チャーカウンターを置きます。チャーカウンターでは、相手がターンするたびにコインをひっくり返す必要があります。尾の場合、そのチャーカウンターでポケモンに2つのダメージカウンターを入れます。 （Char Countersがプレイしている限り、ポケモンにとどまります。）",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
