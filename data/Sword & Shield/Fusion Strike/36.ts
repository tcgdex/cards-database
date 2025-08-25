import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [494],
	set: Set,

	name: {
		en: "Victini",
		fr: "Victini",
		es: "Victini",
		it: "Victini",
		pt: "Victini",
		de: "Victini"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Mitsuhiro Arita",

	description: {
		en: "When it shares the infinite energy it creates, that being's entire body will be overflowing with power."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Fiery Cheering",
			fr: "Soutien Fougueux",
			de: "Feuriges Anfeuern",
			es: "Ovación Ardiente",
			pt: "Torcida Flamejante",
			it: "Incitamento Ardente"
		},

		effect: {
			en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			de: "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an.",
			es: "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
			pt: "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti."
		}
	}, {
		cost: ["Fire"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			de: "Flackern",
			es: "Llama",
			pt: "Chama",
			it: "Fiammata"
		},

		damage: 20
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582170,
		tcgplayer: 253136
	}
}

export default card