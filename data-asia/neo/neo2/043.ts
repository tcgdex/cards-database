import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "マグナイト",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [81],
	hp: 40,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ロックオン",
			},
			effect: {
				ja: "次のターン中に、マグネミテの電気ボルト攻撃を防御ポケモンに使用して頭が頭であるかのように尾を繰り返した尾を治療します。 （どちらかのポケモンがこの効果を終了するか、ベンチまたは進化します。）",
			},
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "電気ボルト",
			},
			effect: {
				ja: "2つのコインをフリップします。両方がヘッドである場合、防御するポケモンは現在麻痺しています。どちらかが尾の場合、この攻撃は何もしません（損傷さえありません）。",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
