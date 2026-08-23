import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "诅咒娃娃",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "怨影娃娃",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "贡献玩偶" },
			effect: { 'zh-cn': "在自己的回合可以使用1次。选择自己弃牌区中的1张支援者，在给对手看过之后，加入手牌。然后，将这只宝可梦放于放逐区。（除宝可梦以外的卡牌，全部放于弃牌区。）" },
		},
	],
	attacks: [
		{
			cost: ["Psychic", "Psychic"],
			name: { 'zh-cn': "幽魂射击" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [354],
}

export default card
