import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "七夕青鳥",
		ja: "チルタリス"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		'zh-tw': "在晴朗的日子會混在雲朵中，自在地在空中來回飛行。會用美妙的高音歌唱。",
		ja: "晴れた日 綿雲に まぎれながら 大空を 自由に 飛び回り 美しい ソプラノで 歌う。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "勸誘曲調",
			ja: "いざなうしらべ"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫選擇1張支援者卡，給對手看過。重洗剩餘牌庫，將所選的卡放回牌庫上方。",
			ja: "自分の番に1回使える。自分の山札からサポートを1枚選び、相手に見せる。残りの山札を切り、選んだカードを山札の上にもどす。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "滑翔",
			ja: "かっくう"
		},

		damage: 60,
		cost: ["Water", "Metal"]
	}],

	retreat: 0,
	regulationMark: "E",
	dexId: [334]
}

export default card