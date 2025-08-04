import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Wishiwashi",
		fr: "Froussardine",
		es: "Wishiwashi",
		it: "Wishiwashi",
		pt: "Wishiwashi",
		de: "Lusardin"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		746,
	],

	hp: 180,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Scatter",
				fr: "Éparpillement",
				es: "Dispersión",
				it: "Sparpagliamento",
				pt: "Dispersão",
				de: "Fliehen"
			},
			effect: {
				en: "At the end of your opponent’s turn, if this Pokémon has any damage counters on it, flip a coin. If tails, shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "À la fin du tour de votre adversaire, si ce Pokémon a des marqueurs de dégâts, lancez une pièce. Si c’est pile, mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
				es: "Al final del turno de tu rival, si este Pokémon tiene algún contador de daño sobre él, lanza 1 moneda. Si sale cruz, pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
				it: "Alla fine del turno del tuo avversario, se questo Pokémon ha dei segnalini danno, lancia una moneta. Se esce croce, rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				pt: "No final da vez de jogar do seu oponente, se este Pokémon tiver algum contador de dano nele, jogue 1 moeda. Se sair coroa, embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				de: "Wirf 1 Münze, wenn am Ende des nächsten Zuges deines Gegners auf diesem Pokémon mindestens 1 Schadensmarke liegt. Mische bei Zahl dieses Pokémon und alle an es angelegten Karten in dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hydro Splash",
				fr: "Hydro-Éclaboussure",
				es: "Hidroestallido",
				it: "Idrosplash",
				pt: "Hidroborrifada",
				de: "Hydroplatscher"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 398509,
		tcgplayer: 201238
	}
}

export default card
