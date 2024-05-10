import { Card } from "../../../interfaces"
import Set from "../sv-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泰姆"
	},

	illustrator: "Akira Komayama",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的手牌選擇1張寶可夢卡，向對手宣言那隻寶可夢的名稱後，翻到反面放置。對手回答那隻寶可夢的HP。將翻到反面的寶可夢卡翻到正面，若正確，則對手從牌庫抽出4張卡。若不正確，則自己從牌庫抽出4張卡。然後，將放置的卡放回自己的手牌。"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card