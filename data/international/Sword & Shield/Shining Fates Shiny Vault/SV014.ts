import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [842],
	set: Set,

	name: {
		'fr-fr': "Dratatin",
		'en-us': "Appletun",
		'es-es': "Appletun",
		'it-it': "Appletun",
		'pt-br': "Appletun",
		'de-de': "Schlapfel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'fr-fr': "Verpom",
		'en-us': "Applin"
	},

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Arôme Délicieux",
			'en-us': "Delicious Aroma",
			'es-es': "Aroma Delicioso",
			'it-it': "Aroma Delizioso",
			'pt-br': "Aroma Delicioso",
			'de-de': "Köstliches Aroma"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, échangez l'un des Pokémon de Banc de base de votre adversaire contre son Pokémon Actif.",
			'en-us': "Once during your turn, you may flip a coin. If heads, switch 1 of your opponent's Benched Basic Pokémon with their Active Pokémon.",
			'es-es': "Una vez durante tu turno, puedes lanzar 1 moneda. Si sale cara, cambia 1 de los Pokémon Básicos en Banca de tu rival por su Pokémon Activo.",
			'it-it': "Una sola volta durante il tuo turno, puoi lanciare una moneta. Se esce testa, scambia uno dei Pokémon Base nella panchina del tuo avversario con il suo Pokémon attivo.",
			'pt-br': "Uma vez durante o seu turno, você poderá jogar 1 moeda. Se sair cara, troque 1 dos Pokémon Básicos no Banco do seu oponente pelo Pokémon Ativo dele(a).",
			'de-de': "Einmal während deines Zuges kannst du 1 Münze werfen. Tausche bei Kopf 1 Basis-Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Lance-Soleil",
			'en-us': "Solar Beam",
			'es-es': "Rayo Solar",
			'it-it': "Solarraggio",
			'pt-br': "Raio Solar",
			'de-de': "Solarstrahl"
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "Eating a sweet apple caused its evolution. A nectarous scent wafts from its body, luring in the bug Pokémon it preys on."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539458,
				tcgplayer: 232361
			}
		},
	],
}

export default card
