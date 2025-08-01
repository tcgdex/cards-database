import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [888],

	name: {
		en: "Zacian",
		fr: "Zacian",
		es: "Zacian",
		it: "Zacian",
		pt: "Zacian",
		de: "Zacian"
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
				en: "Energy Stream",
				fr: "Courant d'Énergie",
				es: "Torrente de Energía",
				it: "Getto d'Energia",
				pt: "Fluxo de Energia",
				de: "Energiestrom"
			},
			effect: {
				en: "Attach a Metal Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie Metal de votre pile de défausse à ce Pokémon.",
				es: "Une 1 carta de Energía Metal de tu pila de descartes a este Pokémon.",
				it: "Assegna a questo Pokémon una carta Energia Metal dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia Metal da sua pilha de descarte a este Pokémon.",
				de: "Lege 1 Metal-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
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
				en: "Smashing Edge",
				fr: "Tranchant Fracassant",
				es: "Filo Devastador",
				it: "Schiaccialama",
				pt: "Gume Esmagador",
				de: "Schmetterklinge"
			},
			effect: {
				en: "Flip a coin. If tails, discard 2 Energy from this Pokémon.",
				fr: "Lancez une pièce. Si c'est pile, défaussez 2 Énergies de ce Pokémon.",
				es: "Lanza 1 moneda. Si sale cruz, descarta 2 Energías de este Pokémon.",
				it: "Lancia una moneta. Se esce croce, scarta due Energie da questo Pokémon.",
				pt: "Jogue 1 moeda. Se sair coroa, descarte 2 Energias deste Pokémon.",
				de: "Wirf 1 Münze. Lege bei Zahl 2 Energien von diesem Pokémon auf deinen Ablagestapel."
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Now armed with a weapon it used in ancient times, this Pokémon needs only a single strike to fell even Gigantamax Pokémon."
	},

	thirdParty: {
		cardmarket: 453298
	}
}

export default card
