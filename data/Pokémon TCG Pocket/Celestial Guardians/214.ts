import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		es: "Exeggutor",
		it: "Exeggutor",
		de: "Kokowei",
		'pt-br': "Exeggutor",
		ko: "나시"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Exeggcute"
	},

	description: {
		en: "Each of Exeggutor's three heads is thinking different thoughts. The three don't seem to be very interested in one another.",
		fr: "Chacune de ses trois têtes pense de manière autonome.\nElles ne semblent s'intéresser qu'à elles-mêmes.",
		es: "Cada una de las tres cabezas piensa\nde forma independiente y apenas\nmuestra interés por el resto.",
		it: "Le sue tre teste ragionano in\nmodo indipendente. Sembra\nche ciascuna pensi solo a sé.",
		de: "Jeder der drei Köpfe hat einen\neigenen Willen und scheint sich\nnur für sich selbst zu interessieren.",
		'pt-br': "Cada uma das três cabeças de Exeggutor está\npensando em coisas diferentes. Elas não parecem\nse interessar umas pelas outras.",
		ko: "3개의 머리는 서로 다른\n생각을 하고 있다. 자신 외에는\n별로 흥미가 없는 듯하다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Psychic",
			fr: "Psyko",
			es: "Psíquico",
			it: "Psichico",
			de: "Psychokinese",
			'pt-br': "Psíquico",
			ko: "사이코키네시스"
		},

		damage: "80+",
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

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
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["lunala"]
}

export default card
