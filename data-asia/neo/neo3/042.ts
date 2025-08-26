import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "アエロダクチル",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [142],
	hp: 60,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "先史時代の記憶",
			},
			effect: {
				ja: "進化したポケモン攻撃<em>（たとえ対戦相手であっても）</em> </em>はいつでも、基本的なポケモンカードまたはそれに添付された進化カードからの攻撃を使用できます。その攻撃のエネルギーコストに対してまだ支払う必要があります。このパワーは、アエロダクチルが眠っている、混乱し、麻痺している間に機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "飛ぶ",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、Aerodactylに行われる損傷を含む攻撃のすべての影響を防ぎます。尾の場合、この攻撃は何もしません（ダメージさえありません）。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
