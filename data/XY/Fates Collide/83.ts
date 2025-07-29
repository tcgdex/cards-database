import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Altaria EX",
		fr: "Altaria EX",
		es: "Altaria EX",
		it: "Altaria EX",
		pt: "Altaria EX",
		de: "Altaria EX"
	},

	illustrator: "Eske Yoshinob",
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
				en: "Powerful Gain",
				fr: "Gain Puissant",
				es: "Ganancia Poderosa",
				it: "Curapotente",
				pt: "Ganho Poderoso",
				de: "Machtvoller Vorteil"
			},
			effect: {
				en: "If this Pokémon was healed during this turn, this attack does 60 more damage and heal 30 damage from this Pokémon.",
				fr: "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 60 dégâts supplémentaires et vous soignez 30 dégâts à ce Pokémon.",
				es: "Si este Pokémon ha sido curado durante este turno, este ataque hace 60 puntos de daño más y cura 30 puntos de daño a este Pokémon.",
				it: "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 60 danni in più e curi questo Pokémon da 30 danni.",
				pt: "Se este Pokémon foi curado durante esta vez de jogar, este ataque causará 60 de danos adicionais e curará 30 de danos deste Pokémon.",
				de: "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt dieser Angriff 60 weitere Schadenspunkte zu und heilt 30 Schadenspunkte bei diesem Pokémon."
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
				en: "Shining Wind",
				fr: "Vent Étincelant",
				es: "Viento Brillante",
				it: "Venlucente",
				pt: "Vento Brilhante",
				de: "Schimmernder Wind"
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon has no Weakness.",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse.",
				es: "Durante el próximo turno de tu rival, este Pokémon no tiene ninguna Debilidad.",
				it: "Durante il prossimo turno del tuo avversario, questo Pokémon non ha debolezza.",
				pt: "Durante a próxima vez de jogar do seu oponente, este Pokémon não terá Fraqueza.",
				de: "Während des nächsten Zuges deines Gegners hat dieses Pokémon keine Schwäche."
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
		cardmarket: 289904
	}
}

export default card
