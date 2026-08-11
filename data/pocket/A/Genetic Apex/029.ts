import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
		'es-es': "Petilil",
		'it-it': "Petilil",
		'de-de': "Lilminip",
		'pt-br': "Petilil",
		'ko-kr': "치릴리"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",

	dexId: [548],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Blot",
			'fr-fr': "Pâté",
			'es-es': "Absorción",
			'it-it': "Macchia",
			'de-de': "Klecks",
			'pt-br': "Borrão",
			'ko-kr': "조금흡수"
		},

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
			'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
			'es-es': "Cura 10 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 10 danni.",
			'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon.",
			'ko-kr': "이 포켓몬의 HP를 10회복."
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
		'en-us': "The leaves on its head grow right back even if they fall out. These bitter leaves refresh those who eat them.",
		'fr-fr': "Les feuilles sur sa tête repoussent très vite.\nElles sont fort amères, mais elles revigorent\nles corps les plus éreintés.",
		'es-es': "Las hojas de su cabeza vuelven a crecer\nrápidamente aunque se caigan. A pesar\nde ser amargas, restablecen la vitalidad.",
		'it-it': "Se le foglie sul suo capo cadono, ricrescono subito. Sono\nmolto amare, ma se masticate rimettono subito in forze.",
		'de-de': "Die Blätter auf seinem Kopf schmecken äußerst\nbitter, wirken aber erfrischend. Fallen sie aus,\nwachsen sie sofort nach.",
		'pt-br': "As folhas em sua cabeça crescem imediatamente\nde volta mesmo quando caem. Essas folhas amargas\nrefrescam aqueles que as comem.",
		'ko-kr': "빠져도 바로 자라나는\n머리의 잎사귀는 아주 쓰지만\n갉아 먹으면 바로 기운이 난다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
