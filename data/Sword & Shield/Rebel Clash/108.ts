import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Sandaconda V",
		fr: "Dunaconda V",
		es: "Sandaconda V",
		it: "Sandaconda V",
		pt: "Sandaconda V",
		de: "Sanaconda V"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Sand Eater",
				fr: "Sablivore",
				es: "Comearena",
				it: "Mangiasabbia",
				pt: "Devorador de Areia",
				de: "Sandfresser"
			},
			effect: {
				en: "Attach a Fighting Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie Fighting de votre pile de défausse à ce Pokémon.",
				es: "Une 1 carta de Energía Fighting de tu pila de descartes a este Pokémon.",
				it: "Assegna a questo Pokémon una carta Energia Fighting dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia Fighting da sua pilha de descarte a este Pokémon.",
				de: "Lege 1 Fighting-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sand Breath",
				fr: "Souffle Sableux",
				es: "Bocanada de Arena",
				it: "Sabbiaspiro",
				pt: "Bafo de Areia",
				de: "Sandhauch"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
				es: "Descarta 2 Energías de este Pokémon.",
				it: "Scarta due Energie da questo Pokémon.",
				pt: "Descarte 2 Energias deste Pokémon.",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 220,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 220,
	types: ["Fighting"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
