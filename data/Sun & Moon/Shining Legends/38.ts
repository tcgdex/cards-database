import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Jynx",
		fr: "Lippoutou",
		es: "Jynx",
		it: "Jynx",
		pt: "Jynx",
		de: "Rossana"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		124,
	],

	hp: 90,

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
				en: "Whiny Voice",
				fr: "Voix Suppliante",
				es: "Voz Quejica",
				it: "Moine",
				pt: "Voz Chorosa",
				de: "Jammerstimme"
			},
			effect: {
				en: "Choose a random card from your opponent’s hand. Your opponent reveals that card and shuffles it into their deck.",
				fr: "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
				es: "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
				it: "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
				pt: "Escolha 1 carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no próprio baralho.",
				de: "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Feverish Kiss",
				fr: "Bise Fébrile",
				es: "Beso Febril",
				it: "Bacio Febbrile",
				pt: "Beijo Fervoroso",
				de: "Intensiver Kuss"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 302176
	}
}

export default card
