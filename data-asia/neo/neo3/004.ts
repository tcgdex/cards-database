import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルバット",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [42],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "金切り声",
			},
			effect: {
				ja: "次のターンの終わりまで、攻撃が防御ポケモンに損傷を与えた場合（脱力感と抵抗を適用した後）、その攻撃は防御ポケモンに20回以上のダメージを与えます。",
			},
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "毒の噛み込み",
			},
			effect: {
				ja: "この攻撃が防御ポケモンを損傷すると、防御ポケモンが毒され、そのダメージの半分に等しいゴルバットから多くのダメージカウンターを除去します（最も近い10に丸められます）。 Golbatのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。いずれにせよ、防御ポケモンは現在毒されています。",
			},
			damage: 10,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
