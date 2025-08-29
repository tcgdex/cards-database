import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "Dark Porygon2",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [233],
	hp: 60,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "空間歪み",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、捨てられた山からスタジアムカードを選択して、それを演奏します。 （すでにスタジアムカードが存在している場合は、捨ててください。）Dark Porygon2が眠っている、混乱し、麻痺している場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "曲線攻撃",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、相手の次のターン中にDark Porygon2に攻撃によって行われたすべての損傷を防ぎます。 （攻撃の他の影響はまだ発生しています。）",
			},
			damage: 20,
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
