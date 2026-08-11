import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レアコイル"
	},
	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	description: {
		'ja-jp': "3つのコイルは強い磁力で結びついている。そばに寄ると強い耳鳴りに襲われる。"
	},
	stage: "Stage1",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840583,
				tcgplayer: 647279,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コイル"
	},
	attacks: [{
		name: {
			'ja-jp': "でんきショック"
		},
		damage: 30,
		effect: {
			'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
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
