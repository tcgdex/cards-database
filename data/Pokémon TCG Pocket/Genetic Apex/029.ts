import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Petilil",
		fr: "Chlorobule",
		es: "Petilil",
		it: "Petilil",
		de: "Lilminip",
		'pt-br': "Petilil",
		ko: "치릴리"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Blot",
			fr: "Pâté",
			es: "Absorción",
			it: "Macchia",
			de: "Klecks",
			'pt-br': "Borrão",
			ko: "조금흡수"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon.",
			es: "Cura 10 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 10 danni.",
			de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon.",
			ko: "이 포켓몬의 HP를 10회복."
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "The leaves on its head grow right back even if they fall out. These bitter leaves refresh those who eat them.",
		fr: "Les feuilles sur sa tête repoussent très vite.\nElles sont fort amères, mais elles revigorent\nles corps les plus éreintés.",
		es: "Las hojas de su cabeza vuelven a crecer\nrápidamente aunque se caigan. A pesar\nde ser amargas, restablecen la vitalidad.",
		it: "Se le foglie sul suo capo cadono, ricrescono subito. Sono\nmolto amare, ma se masticate rimettono subito in forze.",
		de: "Die Blätter auf seinem Kopf schmecken äußerst\nbitter, wirken aber erfrischend. Fallen sie aus,\nwachsen sie sofort nach.",
		'pt-br': "As folhas em sua cabeça crescem imediatamente\nde volta mesmo quando caem. Essas folhas amargas\nrefrescam aqueles que as comem.",
		ko: "빠져도 바로 자라나는\n머리의 잎사귀는 아주 쓰지만\n갉아 먹으면 바로 기운이 난다."
	}
}

export default card
