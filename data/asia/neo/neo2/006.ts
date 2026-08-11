import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "メタポッド",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [11],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "硬化します",
			},
			effect: {
				ja: "対戦相手の次のターン中に、メタポッドに20回以下の損傷が行われたときはいつでも（脱力感と抵抗を適用した後）、その損傷を防ぎます。 （攻撃の他の影響はまだ発生します）。",
			},
		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "ハッチ",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、メタポッドからすべてのダメージカウンターを削除します。次に、メタポッドから進化するカードをデッキで検索し、そのカードをメタポッドに取り付けます。これは進化するメタポッドとしてカウントされます。その後、デッキをシャッフルします。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
