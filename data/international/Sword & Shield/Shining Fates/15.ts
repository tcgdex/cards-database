import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [830],
	set: Set,

	name: {
		'fr-fr': "Blancoton",
		'en-us': "Eldegoss",
		'es-es': "Eldegoss",
		'it-it': "Eldegoss",
		'pt-br': "Eldegoss",
		'de-de': "Cottomi"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'fr-fr': "Tournicoton",
		'en-us': "Gossifleur"
	},

	attacks: [{
		name: {
			'fr-fr': "Graines Fortifiantes",
			'en-us': "Enriching Seeds",
			'es-es': "Semillas Nutritivas",
			'it-it': "Semi Nutrienti",
			'pt-br': "Sementes Terapêuticas",
			'de-de': "Anreichernde Saat"
		},

		effect: {
			'fr-fr': "Soignez tous les dégâts de l'un de vos Pokémon de Banc.",
			'en-us': "Heal all damage from 1 of your Benched Pokémon.",
			'es-es': "Cura todos los puntos de daño a 1 de tus Pokémon en Banca.",
			'it-it': "Cura uno dei tuoi Pokémon in panchina da tutti i danni.",
			'pt-br': "Cure todo o dano de 1 dos seus Pokémon no Banco.",
			'de-de': "Heile allen Schaden bei 1 Pokémon auf deiner Bank."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Attaque Surprise",
			'en-us': "Surprise Attack",
			'es-es': "Ataque Sorpresa",
			'it-it': "Attacco a Sorpresa",
			'pt-br': "Ataque Surpresa",
			'de-de': "Überraschungsangriff"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 50,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "The cotton on the head of this Pokémon can be spun into a glossy, gorgeous yarn—a Galar regional specialty."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539098,
				tcgplayer: 232394
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539098,
				tcgplayer: 232394
			}
		},
	],
}

export default card
