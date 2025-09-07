import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "Registeel Star",
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [379],
	hp: 90,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Metal"],
			name: {
				ja: "バリア攻撃",
			},
			effect: {
				ja: "対戦相手の次のターン中に、攻撃によるRegisteEel {{star | this Pokemon}}に与えられた損害は10（脱力感と抵抗を適用した後）に減少します。",
			},
			damage: 10,
		},
		{
			cost: ["Metal", "Metal", "Colorless"],
			name: {
				ja: "最終レーザー",
			},
			effect: {
				ja: "相手のポケモンに3つのダメージカウンターを、好きなように配置します。対戦相手が1枚の賞カードのみを残し、Registeel {{star | this pokemon}}があなたがプレイしている唯一のポケモンである場合、代わりに6つのダメージカウンターを入れます。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
