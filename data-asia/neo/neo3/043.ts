import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "マークロウ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [198],
	hp: 40,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "家族を呼びます",
			},
			effect: {
				ja: "Murkrowという名前の基本的なポケモンカードをデッキに検索し、ベンチに置いてください。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "群れ攻撃",
			},
			effect: {
				ja: "ベンチのMurkrowsの数に等しい数のコインをひっくり返します。この攻撃は、10ダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
