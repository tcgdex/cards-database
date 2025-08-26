import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "マグカルゴ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [219],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "マグマプール",
			},
			effect: {
				ja: "Magcargoがアクティブなポケモンであり、ベンチに移動する場合は、Magcargoに取り付けられた1つのFire Energyカードを削除し、新しいアクティブポケモンに取り付けます。 <em>（リトリートコストを支払うために使用したエネルギーカードを選択することはできません。）</em>",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire", "Fire"],
			name: {
				ja: "溶岩流",
			},
			effect: {
				ja: "この攻撃を使用すると、Magcargoに取り付けられた火災エネルギーカードを廃棄することができます。もしそうなら、この攻撃は40ダメージに加えて、この方法で廃棄した火災エネルギーカードごとに20のダメージをさらに20回かけます。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
