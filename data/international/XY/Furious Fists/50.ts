import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Breloom",
		'fr-fr': "Chapignon",
		'es-es': "Breloom",
		'it-it': "Breloom",
		'pt-br': "Breloom",
		'de-de': "Kapilz"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		286,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon",
		'es-es': "Shroomish",
		'it-it': "Shroomish",
		'pt-br': "Shroomish",
		'de-de': "Knilz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giga Drain",
				'fr-fr': "Giga-Sangsue",
				'es-es': "Gigadrenado",
				'it-it': "Gigassorbimento",
				'pt-br': "Gigadreno",
				'de-de': "Gigasauger"
			},
			effect: {
				'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				'fr-fr': "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				'es-es': "Cura a este Pokémon el mismo número de puntos de daño que hayas hecho al Pokémon Activo de tu rival.",
				'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				'pt-br': "Cure neste Pokémon a mesma quantidade de danos que você causou ao Pokémon Ativo do seu oponente.",
				'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Sky Uppercut",
				'fr-fr': "Stratopercut",
				'es-es': "Gancho Alto",
				'it-it': "Stramontante",
				'pt-br': "Upper-cut Celeste",
				'de-de': "Himmelhieb"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "Il danno di questo attacco non è influenzato dalla resistenza.",
				'pt-br': "Os danos deste ataque não são afetados por Resistência.",
				'de-de': "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its short arms stretch when it throws punches. Its technique is equal to that of pro boxers.",
	},

	thirdParty: {
		cardmarket: 281714,
		tcgplayer: 92227
	}
}

export default card
