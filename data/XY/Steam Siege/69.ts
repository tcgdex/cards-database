import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Shieldon",
		fr: "Dinoclier",
		es: "Shieldon",
		it: "Shieldon",
		pt: "Shieldon",
		de: "Schilterus"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		410,
	],

	hp: 90,

	types: [
		"Metal",
	],

	stage: "RESTORED",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Head",
				fr: "Tête de Roc",
				es: "Cabeza Roca",
				it: "Testadura",
				pt: "Cabeça de Pedra",
				de: "Steinhaupt"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	evolveFrom: {
		en: "Armor Fossil Shieldon",
		fr: "Fossile Armure Dinoclier",
		es: "Fósil Coraza Shieldon",
		it: "Fossilscudo di Shieldon",
		pt: "Fóssil Armadura de Shieldon",
		de: "Schilterus' Panzerfossil"
	}
}

export default card
