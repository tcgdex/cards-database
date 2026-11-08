import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [842],

	name: {
		'en-us': "Appletun",
		'fr-fr': "Dratatin",
		'es-es': "Appletun",
		'it-it': "Appletun",
		'pt-br': "Appletun",
		'de-de': "Schlapfel"
	},

	illustrator: "Akira Komayama",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'es-es': "Applin",
		'it-it': "Applin",
		'pt-br': "Applin",
		'de-de': "Knapfel"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Delicious Aroma",
				'fr-fr': "Arôme Délicieux",
				'es-es': "Aroma Delicioso",
				'it-it': "Aroma Delizioso",
				'pt-br': "Aroma Delicioso",
				'de-de': "Köstliches Aroma"
			},
			effect: {
				'en-us': "Once during your turn, you may flip a coin. If heads, switch 1 of your opponent's Benched Basic Pokémon with their Active Pokémon.",
				'fr-fr': "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, échangez l'un des Pokémon de Banc de base de votre adversaire contre son Pokémon Actif.",
				'es-es': "Una vez durante tu turno, puedes lanzar 1 moneda. Si sale cara, cambia 1 de los Pokémon Básicos en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, puoi lanciare una moneta. Se esce testa, scambia uno dei Pokémon Base nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Uma vez durante o seu turno, você poderá jogar 1 moeda. Se sair cara, troque 1 dos Pokémon Básicos no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				'de-de': "Einmal während deines Zuges kannst du 1 Münze werfen. Tausche bei Kopf 1 Basis-Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Solar Beam",
				'fr-fr': "Lance-Soleil",
				'es-es': "Rayo Solar",
				'it-it': "Solarraggio",
				'pt-br': "Raio Solar",
				'de-de': "Solarstrahl"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 90,
	types: ["Grass"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Eating a sweet apple caused its evolution. A nectarous scent wafts from its body, luring in the bug Pokémon it preys on."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 456418,
				tcgplayer: 213098
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 456418,
				tcgplayer: 213098
			}
		},
	],
}

export default card
