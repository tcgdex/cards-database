import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Sandaconda V",
		'fr-fr': "Dunaconda V",
		'es-es': "Sandaconda V",
		'it-it': "Sandaconda V",
		'pt-br': "Sandaconda V",
		'de-de': "Sanaconda V"
	},

	illustrator: "aky CG Works",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [844],
	set: Set,

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Sand Eater",
				'fr-fr': "Sablivore",
				'es-es': "Comearena",
				'it-it': "Mangiasabbia",
				'pt-br': "Devorador de Areia",
				'de-de': "Sandfresser"
			},
			effect: {
				'en-us': "Attach a Fighting Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie Fighting de votre pile de défausse à ce Pokémon.",
				'es-es': "Une 1 carta de Energía Fighting de tu pila de descartes a este Pokémon.",
				'it-it': "Assegna a questo Pokémon una carta Energia Fighting dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia Fighting da sua pilha de descarte a este Pokémon.",
				'de-de': "Lege 1 Fighting-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
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
				'en-us': "Sand Breath",
				'fr-fr': "Souffle Sableux",
				'es-es': "Bocanada de Arena",
				'it-it': "Sabbiaspiro",
				'pt-br': "Bafo de Areia",
				'de-de': "Sandhauch"
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
				'es-es': "Descarta 2 Energías de este Pokémon.",
				'it-it': "Scarta due Energie da questo Pokémon.",
				'pt-br': "Descarte 2 Energias deste Pokémon.",
				'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
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


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 457953,
				tcgplayer: 213198
			}
		},
	],
}

export default card
