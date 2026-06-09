import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "姆克鳥",
		ja: "ムクバード"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "棲息在森林和草原。如果遇上同類的團隊， 就會開始爭奪地盤。",
		ja: "森や 草原に 生息。 グループが 出くわすと なわばりを かけた 争いが はじまる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "翅膀攻擊",
			ja: "つばさでうつ"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [397],

	thirdParty: {
		cardmarket: 605930
	}
}

export default card