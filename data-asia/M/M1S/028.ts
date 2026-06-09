import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "レアコイル"
	},
	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	description: {
		ja: "3つのコイルは強い磁力で結びついている。そばに寄ると強い耳鳴りに襲われる。"
	},
	stage: "Stage1",
	evolveFrom: {
		ja: "コイル"
	},
	attacks: [{
		name: {
			ja: "でんきショック"
		},
		damage: 30,
		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		},
		cost: ["Lightning"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [82]
}

export default card
