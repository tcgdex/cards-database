import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "オトスパス",
		'zh-tw': "八爪武師",
		th: "โอโทสพัส",
		ko: "케오퍼스"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [853],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "おのれの腕を 試すべく 陸に 上がり 対戦相手を 探す。 戦い終えると 海に 帰る。",
		'zh-tw': "會為了試自己的身手而登上陸地尋找對手。 戰鬥結束後就會回到海裡。",
		th: "ขึ้นบนบกเพื่อหาคู่ต่อสู้พิสูจน์ฝีมือของตน เมื่อต่อสู้เสร็จก็จะกลับลงทะเล",
		ko: "자신의 실력을 시험하기 위해 육지로 올라가 대전 상대를 찾는다. 싸움이 끝나면 바다로 돌아간다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "じわじわおとす",
			'zh-tw': "緩緩殞落",
			th: "ค่อย ๆ ล้ม",
			ko: "서서히떨구기"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番の終わりに、このワザを受けたポケモンはきぜつする。",
			'zh-tw': "在下個對手的回合結束時，受到這個招式的寶可夢會【昏厥】。",
			th: "เมื่อจบเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้จะ[หมดสภาพ]",
			ko: "상대의 다음 차례 마지막에 이 기술을 받은 포켓몬은 기절한다."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "マッハストレート",
			'zh-tw': "音速直擊",
			th: "มัคสเตรท",
			ko: "마하스트레이트"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card