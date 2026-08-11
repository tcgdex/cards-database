import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Inkay",
		'fr-fr': "Sepiatop",
		'es-es': "Inkay",
		'it-it': "Inkay",
		'pt-br': "Inkay",
		'de-de': "Iscalar"
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
				'en-us': "Rip Off",
				'fr-fr': "Arnaque",
				'es-es': "Estafa",
				'it-it': "Ruberia",
				'pt-br': "Tirar Tudo",
				'de-de': "Abzocken"
			},
			effect: {
				'en-us': "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck.",
				'fr-fr': "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
				'es-es': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
				'it-it': "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
				'pt-br': "Escolha um card aleatório da mão do seu oponente. Seu oponente revela aquele card e o embaralha de volta no próprio baralho.",
				'de-de': "Wähle 1 zufällige Karte aus der verdeckten Hand deines Gegners. Dein Gegner zeigt diese Karte und mischt sie zurück in sein Deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rafale Psy",
				'es-es': "Psicorrayo",
				'it-it': "Psicoraggio",
				'pt-br': "Feixe Psíquico",
				'de-de': "Psystrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Confuso.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt verwirrt."
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

	description: {
		'en-us': "It flashes the light-emitting spots on its body, which drains its opponent's will to fight. It takes the opportunity to scuttle away and hide.",
	},

	thirdParty: {
		cardmarket: 282709,
		tcgplayer: 98077
	}
}

export default card
