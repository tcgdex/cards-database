import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Gardevoir EX",
		'fr-fr': "Gardevoir EX",
		'es-es': "Gardevoir EX",
		'it-it': "Gardevoir EX",
		'pt-br': "Gardevoir EX",
		'de-de': "Guardevoir EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 170,

	types: [
		"Fairy",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Life Leap",
				'fr-fr': "Projection Vitale",
				'es-es': "Salto Vital",
				'it-it': "Saltovita",
				'pt-br': "Salto Vital",
				'de-de': "Sprung ins Leben"
			},
			effect: {
				'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				'fr-fr': "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				'es-es': "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				'pt-br': "Cure neste Pokémon a mesma quantidade de danos que você causou ao Pokémon Ativo do seu oponente.",
				'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 20,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				'en-us': "Shining Wind",
				'fr-fr': "Vent Étincelant",
				'es-es': "Viento Brillante",
				'it-it': "Venlucente",
				'pt-br': "Vento Brilhante",
				'de-de': "Schimmernder Wind"
			},
			effect: {
				'en-us': "During your opponent's next turn, this Pokémon has no Weakness.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse.",
				'es-es': "Durante el próximo turno de tu rival, este Pokémon no tiene ninguna Debilidad.",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon non ha debolezza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, este Pokémon não terá Fraqueza.",
				'de-de': "Während des nächsten Zuges deines Gegners hat dieses Pokémon keine Schwäche."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 273636,
		tcgplayer: 96053
	}
}

export default card
