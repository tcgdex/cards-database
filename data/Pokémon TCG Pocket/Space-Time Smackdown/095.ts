import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Gallade ex",
		fr: "Gallame-ex",
		es: "Gallade ex",
		it: "Gallade-ex",
		de: "Galagladi-ex",
		'pt-br': "Gallade ex",
		ko: "엘레이드 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		en: "Kirlia"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Energized Blade",
			fr: "Lame Énergisée",
			es: "Cuchilla Vigorizada",
			it: "Lama Energetica",
			de: "Energieklinge",
			'pt-br': "Lâmina Energizada",
			ko: "에너지 블레이드"
		},

		damage: "70+",
		cost: ["Fighting", "Fighting"],

		effect: {
			en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			ko: "상대 배틀 포켓몬의 에너지의 개수 × 20데미지를 추가한다."
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
