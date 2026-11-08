import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gallade ex",
		'fr-fr': "Gallame-ex",
		'es-es': "Gallade ex",
		'it-it': "Gallade-ex",
		'de-de': "Galagladi-ex",
		'pt-br': "Gallade ex",
		'ko-kr': "엘레이드 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [475],
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Kirlia"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Energized Blade",
			'fr-fr': "Lame Énergisée",
			'es-es': "Cuchilla Vigorizada",
			'it-it': "Lama Energetica",
			'de-de': "Energieklinge",
			'pt-br': "Lâmina Energizada",
			'ko-kr': "에너지 블레이드"
		},

		damage: "70+",
		cost: ["Fighting", "Fighting"],

		effect: {
			'en-us': "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'ko-kr': "상대 배틀 포켓몬의 에너지의 개수 × 20데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
