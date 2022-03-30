import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Gardevoir EX",
		fr: "Gardevoir EX",
		es: "Gardevoir EX",
		it: "Gardevoir EX",
		pt: "Gardevoir EX",
		de: "Guardevoir EX"
	},

	illustrator: "Eske Yoshinob",
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
				en: "Life Leap",
				fr: "Projection Vitale",
				es: "Salto Vital",
				it: "Saltovita",
				pt: "Salto Vital",
				de: "Sprung ins Leben"
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				es: "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				it: "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				pt: "Cure neste Pokémon a mesma quantidade de danos que você causou ao Pokémon Ativo do seu oponente.",
				de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
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
	stage: "Basic"
}

export default card
