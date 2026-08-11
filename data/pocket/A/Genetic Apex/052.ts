import { Card } from "models/database/card"
import Set from "../Genetic Apex"
const card: Card = {
	set: Set,

	name: {
		'en-us': "Centiskorch",
		'fr-fr': "Scolocendre",
		'es-es': "Centiskorch",
		'it-it': "Centiskorch",
		'de-de': "Infernopod",
		'ko-kr': "다태우지네",
		'pt-br': "Centiskorch"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",

	dexId: [851],
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Sizzlipede"
	},

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],
		name: {
			'en-us': "Fire Blast",
			'fr-fr': "Déflagration",
			'es-es': "Llamarada",
			'it-it': "Fuocobomba",
			'de-de': "Feuersturm",
			'ko-kr': "불대문자",
			'pt-br': "Rajada de Fogo"
		},
		effect: {
			'en-us': "Discard a {R} Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie {R} de ce Pokémon.",
			'es-es': "Descarta 1 Energía {R} de este Pokémon.",
			'it-it': "Rimuovi un'Energia {R} da questo Pokémon.",
			'de-de': "Lege 1 {R}-Energie von diesem Pokémon ab.",
			'ko-kr': "이 포켓몬에서 {R}에너지를 1개 트래쉬한다.",
			'pt-br': "Descarte 1 Energia {R} deste Pokémon."
		},
		damage: "130"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond",

	description: {
		'en-us': "When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies.",
		'fr-fr': "Quand il génère de la chaleur, sa température\nest d'environ 800 °C. Il se sert de son corps\ncomme d'un fouet pour sauter sur ses ennemis.",
		'es-es': "Cuando genera calor, su temperatura corporal\nalcanza aproximadamente los 800 °C. Usa el\ncuerpo a modo de látigo para lanzarse al ataque.",
		'it-it': "Quando genera calore, la temperatura del\nsuo corpo raggiunge gli 800 ºC. Si lancia\nall'attacco usando il corpo come una frusta.",
		'de-de': "Wenn es Hitze erzeugt, beträgt seine Temperatur\netwa 800 °C. Es bewegt seinen Körper wie eine\nPeitsche, um dann den Gegner anzuspringen.",
		'pt-br': "Ao se aquecer, seu corpo atinge temperaturas de\ncerca de 800 ºC. Usa seu corpo como um chicote,\nlançando-se contra seus inimigos.",
		'ko-kr': "발열 시의 체온은 약 800도.\n몸을 채찍처럼 휘면서\n덤벼든다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}
export default card