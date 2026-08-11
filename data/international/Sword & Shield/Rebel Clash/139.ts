import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [888],

	name: {
		'en-us': "Zacian",
		'fr-fr': "Zacian",
		'es-es': "Zacian",
		'it-it': "Zacian",
		'pt-br': "Zacian",
		'de-de': "Zacian"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Energy Stream",
				'fr-fr': "Courant d'Énergie",
				'es-es': "Torrente de Energía",
				'it-it': "Getto d'Energia",
				'pt-br': "Fluxo de Energia",
				'de-de': "Energiestrom"
			},
			effect: {
				'en-us': "Attach a Metal Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie Metal de votre pile de défausse à ce Pokémon.",
				'es-es': "Une 1 carta de Energía Metal de tu pila de descartes a este Pokémon.",
				'it-it': "Assegna a questo Pokémon una carta Energia Metal dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia Metal da sua pilha de descarte a este Pokémon.",
				'de-de': "Lege 1 Metal-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Smashing Edge",
				'fr-fr': "Tranchant Fracassant",
				'es-es': "Filo Devastador",
				'it-it': "Schiaccialama",
				'pt-br': "Gume Esmagador",
				'de-de': "Schmetterklinge"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard 2 Energy from this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez 2 Énergies de ce Pokémon.",
				'es-es': "Lanza 1 moneda. Si sale cruz, descarta 2 Energías de este Pokémon.",
				'it-it': "Lancia una moneta. Se esce croce, scarta due Energie da questo Pokémon.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, descarte 2 Energias deste Pokémon.",
				'de-de': "Wirf 1 Münze. Lege bei Zahl 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 120,

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
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 120,
	types: ["Metal"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Now armed with a weapon it used in ancient times, this Pokémon needs only a single strike to fell even Gigantamax Pokémon."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 453298,
				tcgplayer: 213237
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 453298,
				tcgplayer: 213237
			}
		},
	],
}

export default card
