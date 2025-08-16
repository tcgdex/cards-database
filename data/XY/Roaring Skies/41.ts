import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Inkay",
		fr: "Sepiatop",
		es: "Inkay",
		it: "Inkay",
		pt: "Inkay",
		de: "Iscalar"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		686,
	],

	hp: 50,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Rip Off",
				fr: "Arnaque",
				es: "Estafa",
				it: "Ruberia",
				pt: "Tirar Tudo",
				de: "Abzocken"
			},
			effect: {
				en: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck.",
				fr: "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
				es: "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
				it: "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
				pt: "Escolha um card aleatório da mão do seu oponente. Seu oponente revela aquele card e o embaralha de volta no próprio baralho.",
				de: "Wähle 1 zufällige Karte aus der verdeckten Hand deines Gegners. Dein Gegner zeigt diese Karte und mischt sie zurück in sein Deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale Psy",
				es: "Psicorrayo",
				it: "Psicoraggio",
				pt: "Feixe Psíquico",
				de: "Psystrahl"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Confuso.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt verwirrt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 282709,
		tcgplayer: 98077
	}
}

export default card
