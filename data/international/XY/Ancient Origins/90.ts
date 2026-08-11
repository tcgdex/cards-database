import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Machamp EX",
		'fr-fr': "Mackogneur EX",
		'es-es': "Machamp EX",
		'it-it': "Machamp EX",
		'pt-br': "Machamp EX",
		'de-de': "Machomei EX"
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
				'en-us': "Steaming Mad",
				'fr-fr': "Fou Furax",
				'es-es': "Enfurecimiento",
				'it-it': "Escandescenza",
				'pt-br': "Loucura Fumegante",
				'de-de': "Kochende Wut"
			},
			effect: {
				'en-us': "This attack does 20 damage times the number of damage counters on this Pokémon. This Pokémon is now Confused.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon. Ce Pokémon est maintenant Confus.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada contador de daño en este Pokémon. Este Pokémon pasa a estar Confundido.",
				'it-it': "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon. Questo Pokémon viene confuso.",
				'pt-br': "Este ataque causa 20 de danos vezes o número de contadores de danos neste Pokémon. Este Pokémon agora está Confuso.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Schadensmarken auf diesem Pokémon zu. Dieses Pokémon ist jetzt verwirrt."
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
				'en-us': "Crazy Hammer",
				'fr-fr': "Marteau Fou",
				'es-es': "Martillo Loco",
				'it-it': "Martelpazzo",
				'pt-br': "Martelo Louco",
				'de-de': "Bekloppter Hammer"
			},
			effect: {
				'en-us': "If this Pokémon is affected by a Special Condition, this attack does 80 more damage. Then, remove all Special Conditions from this Pokémon.",
				'fr-fr': "Si ce Pokémon est affecté par un État Spécial, cette attaque inflige 80 dégâts supplémentaires. Ensuite, retirez tous les États Spéciaux de ce Pokémon.",
				'es-es': "Si este Pokémon se ve afectado por una Condición Especial, este ataque hace 80 puntos de daño más. Después, elimina todas las Condiciones Especiales de este Pokémon.",
				'it-it': "Se questo Pokémon è influenzato da una condizione speciale, questo attacco infligge 80 danni in più. Poi, rimuovi tutte le condizioni speciali da questo Pokémon.",
				'pt-br': "Se este Pokémon for afetado por uma Condição Especial, este ataque causará 80 de danos adicionais. Depois, remova todas as Condições Especiais deste Pokémon.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 80 weitere Schadenspunkte zu. Anschließend verlieren alle Speziellen Zustände auf diesem Pokémon ihre Wirkung."
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
		cardmarket: 284218,
		tcgplayer: 101512
	}
}

export default card
