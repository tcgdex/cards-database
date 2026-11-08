import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Ludicolo",
		'fr-fr': "Ludicolo",
		'es-es': "Ludicolo",
		'it-it': "Ludicolo",
		'pt-br': "Ludicolo",
		'de-de': "Kappalores"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		272,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'es-es': "Lombre",
		'it-it': "Lombre",
		'pt-br': "Lombre",
		'de-de': "Lombrero"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'fr-fr': "Régénération α",
				'en-us': "α Recovery",
				'es-es': "{title}:",
				'it-it': "{title}:",
				'pt-br': "{title}:",
				'de-de': "{title}:"
			},
			effect: {
				'fr-fr': "Lorsque ce Pokémon est soigné, doublez la quantité de soins.",
				'en-us': "When this Pokémon is healed, double the amount healed.",
				'es-es': "{title}: Cuando este Pokémon sea curado, dobla la cantidad curada.",
				'it-it': "{title}: Quando curi questo Pokémon, raddoppia la quantità di danni che stai curando.",
				'pt-br': "{title}: Quando este Pokémon for curado, dobre a quantidade curada.",
				'de-de': "{title}: Wenn dieses Pokémon geheilt wird, verdoppele die geheilten Schadenspunkte."
			},
		},
	],

	attacks: [
		{
			cost: [
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
				'en-us': "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck.",
				'fr-fr': "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
				'es-es': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
				'it-it': "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
				'pt-br': "Escolha um card aleatório da mão do seu oponente. Seu oponente revela esse card e o embaralha de volta no próprio baralho.",
				'de-de': "Wähle 1 zufällige Karte aus der verdeckten Hand deines Gegners. Dein Gegner zeigt diese Karte und mischt sie zurück in sein Deck."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Splash Dance",
				'fr-fr': "Danse Éclaboussante",
				'es-es': "Danza Chapoteo",
				'it-it': "Danzaspruzzo",
				'pt-br': "Dança Borrifante",
				'de-de': "Spritztanz"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Splash Dance attack does 60 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l'attaque Danse Éclaboussante de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, el ataque Danza Chapoteo de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, l'attacco Danzaspruzzo di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante sua próxima vez de jogar, o ataque Dança Borrifante deste Pokémon causará 60 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügt die Attacke Spritztanz dieses Pokémon 60 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The rhythm of bright, festive music activates Ludicolo's cells, making it more powerful.",
	},

	thirdParty: {
		cardmarket: 273543,
		tcgplayer: 95929
	}
}

export default card
