import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Trevenant V",
		'fr-fr': "Desséliande V",
		'es-es': "Trevenant V",
		'it-it': "Trevenant V",
		'pt-br': "Trevenant V",
		'de-de': "Trombork V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	illustrator: "MUGENUP",

	attacks: [{
		name: {
			'en-us': "Absorb Life",
			'fr-fr': "Absorption",
			'es-es': "Absorber Vida",
			'it-it': "Spolpavita",
			'pt-br': "Absorb Life",
			'de-de': "Lebensverkoster"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Heal 30 damage from this Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'en-us': "Shadow Claw",
			'fr-fr': "Griffe Ombre",
			'es-es': "Garra Umbría",
			'it-it': "Ombrartigli",
			'pt-br': "Shadow Claw",
			'de-de': "Dunkelklaue"
		},

		effect: {
			'en-us': "Discard a random card from your opponent's hand.",
			'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
			'pt-br': "Discard a random card from your opponent's hand.",
			'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 120,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	dexId: [709],
	regulationMark: "E",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574037,
				tcgplayer: 246699
			}
		},
	],
}

export default card
