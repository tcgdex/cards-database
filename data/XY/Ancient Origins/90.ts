import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Machamp EX",
		fr: "Mackogneur EX",
		es: "Machamp EX",
		it: "Machamp EX",
		pt: "Machamp EX",
		de: "Machomei EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 180,

	types: [
		"Fighting",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Steaming Mad",
				fr: "Fou Furax",
				es: "Enfurecimiento",
				it: "Escandescenza",
				pt: "Loucura Fumegante",
				de: "Kochende Wut"
			},
			effect: {
				en: "This attack does 20 damage times the number of damage counters on this Pokémon. This Pokémon is now Confused.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon. Ce Pokémon est maintenant Confus.",
				es: "Este ataque hace 20 puntos de daño más por cada contador de daño en este Pokémon. Este Pokémon pasa a estar Confundido.",
				it: "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon. Questo Pokémon viene confuso.",
				pt: "Este ataque causa 20 de danos vezes o número de contadores de danos neste Pokémon. Este Pokémon agora está Confuso.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Schadensmarken auf diesem Pokémon zu. Dieses Pokémon ist jetzt verwirrt."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Crazy Hammer",
				fr: "Marteau Fou",
				es: "Martillo Loco",
				it: "Martelpazzo",
				pt: "Martelo Louco",
				de: "Bekloppter Hammer"
			},
			effect: {
				en: "If this Pokémon is affected by a Special Condition, this attack does 80 more damage. Then, remove all Special Conditions from this Pokémon.",
				fr: "Si ce Pokémon est affecté par un État Spécial, cette attaque inflige 80 dégâts supplémentaires. Ensuite, retirez tous les États Spéciaux de ce Pokémon.",
				es: "Si este Pokémon se ve afectado por una Condición Especial, este ataque hace 80 puntos de daño más. Después, elimina todas las Condiciones Especiales de este Pokémon.",
				it: "Se questo Pokémon è influenzato da una condizione speciale, questo attacco infligge 80 danni in più. Poi, rimuovi tutte le condizioni speciali da questo Pokémon.",
				pt: "Se este Pokémon for afetado por uma Condição Especial, este ataque causará 80 de danos adicionais. Depois, remova todas as Condições Especiais deste Pokémon.",
				de: "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 80 weitere Schadenspunkte zu. Anschließend verlieren alle Speziellen Zustände auf diesem Pokémon ihre Wirkung."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic",

	thirdParty: {
		cardmarket: 284218
	}
}

export default card
