import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	dexId: [895],
	set: Set,


	name: {
		'en-us': "Regidrago",
		'fr-fr': "Regidrago",
		'es-es': "Regidrago",
		'it-it': "Regidrago",
		'pt-br': "Regidrago",
		'de-de': "Regidrago"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "Kouki Saitou",

	attacks: [{
		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Hammer In",
			'de-de': "Einhämmern"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Dragon Energy",
			'fr-fr': "Draco-Énergie",
			'es-es': "Dracoenergía",
			'it-it': "Dragoenergia",
			'pt-br': "Dragon Energy",
			'de-de': "Drachenkräfte"
		},

		effect: {
			'en-us': "This attack does 20 less damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño menos por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 20 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "This attack does 20 less damage for each damage counter on this Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte weniger zu."
		},

		damage: "240-",
		cost: ["Grass", "Grass", "Fire"]
	}],

	retreat: 3,

	description: {
		'en-us': "Its body is composed of crystallized dragon energy. Regidrago is said to have the powers of every dragon Pokémon."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574172,
				tcgplayer: 246923
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574172,
				tcgplayer: 246923
			}
		},
	],
}

export default card
