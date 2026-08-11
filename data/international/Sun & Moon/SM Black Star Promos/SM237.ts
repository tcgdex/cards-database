import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [470],
	set: Set,

	name: {
		'en-us': "Leafeon",
		'fr-fr': "Phyllali",
		'es-es': "Leafeon",
		'it-it': "Leafeon",
		'pt-br': "Leafeon",
		'de-de': "Folipurba"
	},

	illustrator: "chibi",
	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Aromax",
			'fr-fr': "Parfum Régénérant",
			'es-es': "Aromax",
			'it-it': "Curessenza",
			'pt-br': "Aromax",
			'de-de': "Aromax"
		},

		effect: {
			'en-us': "Heal all damage from 1 of your Benched Pokémon.",
			'fr-fr': "Soignez tous les dégâts de l’un de vos Pokémon de Banc.",
			'es-es': "Cura todos los puntos de daño a 1 de tus Pokémon en Banca.",
			'it-it': "Cura uno dei tuoi Pokémon in panchina da tutti i danni.",
			'pt-br': "Cure todo o dano de 1 dos seus Pokémon no Banco.",
			'de-de': "Heile allen Schaden bei 1 Pokémon auf deiner Bank."
		},

		cost: ["Grass"]
	}, {
		name: {
			'en-us': "Leaf Blade",
			'fr-fr': "Lame-Feuille",
			'es-es': "Hoja Aguda",
			'it-it': "Fendifoglia",
			'pt-br': "Lâmina de Folha",
			'de-de': "Laubklinge"
		},

		damage: "80+",

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
			'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu."
		},

		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "Although it doesn't like disputes, it will sharpen the leaf on its tail into a blade and fight if it has to protect its friends.",
	},
}

export default card
