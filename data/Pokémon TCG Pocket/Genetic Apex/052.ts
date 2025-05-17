import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
const card: Card = {
	set: Set,
	name: {
		en: "Centiskorch",
		fr: "Scolocendre",
		es: "Centiskorch",
		it: "Centiskorch",
		de: "Infernopod",
		ko: "다태우지네",
		'pt-br': "Centiskorch"
	},
	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Sizzlipede"
	},
	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],
		name: {
			en: "Fire Blast",
			fr: "Déflagration",
			es: "Llamarada",
			it: "Fuocobomba",
			de: "Feuersturm",
			ko: "불대문자",
			'pt-br': "Rajada de Fogo"
		},
		effect: {
			en: "Discard a {R} Energy from this Pokémon.",
			fr: "Défaussez une Énergie {R} de ce Pokémon.",
			es: "Descarta 1 Energía {R} de este Pokémon.",
			it: "Rimuovi un'Energia {R} da questo Pokémon.",
			de: "Lege 1 {R}-Energie von diesem Pokémon ab.",
			ko: "이 포켓몬에서 {R}에너지를 1개 트래쉬한다.",
			'pt-br': "Descarte 1 Energia {R} deste Pokémon."
		},
		damage: "130"
	}],
	retreat: 3,
	rarity: "Two Diamond",
	description: {
		en: "When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies.",
		fr: "Quand il génère de la chaleur, sa température\nest d'environ 800 °C. Il se sert de son corps\ncomme d'un fouet pour sauter sur ses ennemis.",
		es: "Cuando genera calor, su temperatura corporal\nalcanza aproximadamente los 800 °C. Usa el\ncuerpo a modo de látigo para lanzarse al ataque.",
		it: "Quando genera calore, la temperatura del\nsuo corpo raggiunge gli 800 ºC. Si lancia\nall'attacco usando il corpo come una frusta.",
		de: "Wenn es Hitze erzeugt, beträgt seine Temperatur\netwa 800 °C. Es bewegt seinen Körper wie eine\nPeitsche, um dann den Gegner anzuspringen.",
		'pt-br': "Ao se aquecer, seu corpo atinge temperaturas de\ncerca de 800 ºC. Usa seu corpo como um chicote,\nlançando-se contra seus inimigos.",
		ko: "발열 시의 체온은 약 800도.\n몸을 채찍처럼 휘면서\n덤벼든다."
	}
}
export default card