import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "カウンターキャッチャー",
		ko: "카운터 캐처"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分のサイドの残り枚数が、相手のサイドの残り枚数より多いときにしか使えない。\n\n相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
		ko: "이 카드는 자신의 남은 프라이즈 장수가 상대의 남은 프라이즈 장수보다 많을 때만 사용할 수 있다. 상대의 벤치 포켓몬을 1마리 선택해서 배틀 포켓몬과 교체한다."
	},

	trainerType: "Item"
}

export default card