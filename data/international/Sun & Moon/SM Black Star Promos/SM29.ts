import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Mimikyu",
		'fr-fr': "Mimiqui",
		'es-es': "Mimikyu",
		'it-it': "Mimikyu",
		'pt-br': "Mimikyu",
		'de-de': "Mimigma"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		778,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Haunt",
				'fr-fr': "Hanter",
				'es-es': "Espantar",
				'it-it': "Infestare",
				'pt-br': "Assombrar",
				'de-de': "Spuk"
			},
			effect: {
				'en-us': "Put 1 damage counter on your opponent’s Active Pokémon.",
				'fr-fr': "Placez 1 marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
				'es-es': "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
				'it-it': "Metti un segnalino danno sul Pokémon attivo del tuo avversario.",
				'pt-br': "Coloque 1 contador de dano no Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Astonish",
				'fr-fr': "Étonnement",
				'es-es': "Impresionar",
				'it-it': "Sgomento",
				'pt-br': "Abismar",
				'de-de': "Erstauner"
			},
			effect: {
				'en-us': "Choose a random card from your opponent’s hand. Your opponent reveals that card and shuffles it into their deck.",
				'fr-fr': "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
				'es-es': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
				'it-it': "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
				'pt-br': "Escolha 1 carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no próprio baralho.",
				'de-de': "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt jene Karte und mischt sie in sein Deck."
			},

		},
	],


	retreat: 1,




	description: {
		'en-us': "Its actual appearance is unknown. A scholar who saw what was under its rag was overwhelmed by terror and died from the shock.",
	},
}

export default card
