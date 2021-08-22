import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Yanmega BREAK",
		fr: "Yanmega TURBO",
		es: "Yanmega TURBO",
		it: "Yanmega TURBO",
		pt: "Yanmega TURBO",
		de: "Yanmega-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		469,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Yanmega",
		fr: "Yanmega",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Barrier Break",
				fr: "Brise Barrière",
				es: "Rotura Barrera",
				it: "Infrangibarriera",
				pt: "Quebra-barreira",
				de: "Barrierebrecher"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness, Resistance, or any other effects on your opponent’s Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en el Pokémon Activo de tu rival.",
				it: "I danni di questo attacco non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "Os danos deste ataque não são afetados por Fraqueza, Resistência ou qualquer outro efeito no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieses Angriffs wird durch Schwäche, Resistenz oder alle anderen Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 100,

		}
	],

	retreat: 0
}

export default card
