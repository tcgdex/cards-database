import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
		es: "Mimikyu",
		it: "Mimikyu",
		pt: "Mimikyu",
		de: "Mimigma"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
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
				en: "Haunt",
				fr: "Hanter",
				es: "Espantar",
				it: "Infestare",
				pt: "Assombrar",
				de: "Spuk"
			},
			effect: {
				en: "Put 1 damage counter on your opponent’s Active Pokémon.",
				fr: "Placez 1 marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
				es: "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
				it: "Metti un segnalino danno sul Pokémon attivo del tuo avversario.",
				pt: "Coloque 1 contador de dano no Pokémon Ativo do seu oponente.",
				de: "Lege 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Astonish",
				fr: "Étonnement",
				es: "Impresionar",
				it: "Sgomento",
				pt: "Abismar",
				de: "Erstauner"
			},
			effect: {
				en: "Choose a random card from your opponent’s hand. Your opponent reveals that card and shuffles it into their deck.",
				fr: "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
				es: "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
				it: "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
				pt: "Escolha 1 carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no próprio baralho.",
				de: "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt jene Karte und mischt sie in sein Deck."
			},

		},
	],


	retreat: 1,



}

export default card
