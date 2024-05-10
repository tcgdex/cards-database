import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "サバイブギプス",
		'zh-tw': "倖存鍛鍊器"
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンのHPがまんたんの状態で、相手のポケモンからワザのダメージを受けてきぜつするとき、そのポケモンはきぜつせず、残りHPが「10」の状態で場に残る。その後、このカードをトラッシュする。",
		'zh-tw': "附有這張卡的寶可夢的HP是全滿的狀態下，受到對手的寶可夢招式的傷害而【昏厥】時，那隻寶可夢不會【昏厥】，而是以剩餘HP為「10」的狀態留在場上。然後，將這張卡丟棄。"
	},

	trainerType: "Tool",
	regulationMark: "H"
}

export default card