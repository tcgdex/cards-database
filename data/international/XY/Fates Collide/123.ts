import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Altaria EX",
		'fr-fr': "Altaria EX",
		'es-es': "Altaria EX",
		'it-it': "Altaria EX",
		'pt-br': "Altaria EX",
		'de-de': "Altaria EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 170,

	types: [
		"Colorless",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Powerful Gain",
				'fr-fr': "Gain Puissant",
				'es-es': "Ganancia Poderosa",
				'it-it': "Curapotente",
				'pt-br': "Ganho Poderoso",
				'de-de': "Machtvoller Vorteil"
			},
			effect: {
				'en-us': "If this Pokémon was healed during this turn, this attack does 60 more damage and heal 30 damage from this Pokémon.",
				'fr-fr': "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 60 dégâts supplémentaires et vous soignez 30 dégâts à ce Pokémon.",
				'es-es': "Si este Pokémon ha sido curado durante este turno, este ataque hace 60 puntos de daño más y cura 30 puntos de daño a este Pokémon.",
				'it-it': "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 60 danni in più e curi questo Pokémon da 30 danni.",
				'pt-br': "Se este Pokémon foi curado durante esta vez de jogar, este ataque causará 60 de danos adicionais e curará 30 de danos deste Pokémon.",
				'de-de': "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt dieser Angriff 60 weitere Schadenspunkte zu und heilt 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
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
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,
	stage: "Basic",

	thirdParty: {
		cardmarket: 289943,
		tcgplayer: 117895
	}
}

export default card
