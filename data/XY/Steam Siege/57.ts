import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Armaldo",
		fr: "Armaldo",
		es: "Armaldo",
		it: "Armaldo",
		pt: "Armaldo",
		de: "Armaldo"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		348,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Anorith",
		fr: "Anorith",
		es: "Anorith",
		it: "Anorith",
		pt: "Anorith",
		de: "Anorith"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rushing Water",
				fr: "Courant Fort",
				es: "Fuerte Corriente",
				it: "Forte Corrente",
				pt: "Água Veloz",
				de: "Stromschnelle"
			},
			effect: {
				en: "Move an Energy from your opponent's Active Pokémon to 1 of his or her Benched Pokémon.",
				fr: "Déplacez une Énergie attachée au Pokémon Actif de votre adversaire vers l'un de ses Pokémon de Banc.",
				es: "Mueve 1 Energía del Pokémon Activo de tu rival a 1 de sus Pokémon en Banca.",
				it: "Sposta un'Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
				pt: "Mova uma Energia do Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco dele(a).",
				de: "Verschiebe 1 an das Aktive Pokémon deines Gegners angelegte Energie auf 1 Pokémon auf der Bank deines Gegners."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guard Claw",
				fr: "Griffe de Garde",
				es: "Garra Guardia",
				it: "Difesartiglio",
				pt: "Garra Protetora",
				de: "Abwehrklaue"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 30 (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 30, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 30 (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 291627,
		tcgplayer: 121187
	}
}

export default card
