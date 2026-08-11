import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Mr. Mime",
		'fr-fr': "M. Mime",
		'es-es': "Mr. Mime",
		'it-it': "Mr. Mime",
		'pt-br': "Mr. Mime",
		'de-de': "Pantimos"
	},

	illustrator: "Hiroki Asanuma",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bench Barrier",
				'fr-fr': "Barrière de Banc",
				'es-es': "Barrera de Banca",
				'it-it': "Panchinafranca",
				'pt-br': "Barreira de Banco",
				'de-de': "Bankbarriere"
			},
			effect: {
				'en-us': "Prevent all damage done to your Benched Pokémon by attacks.",
				'fr-fr': "Évitez tous les dégâts infligés à vos Pokémon de Banc par des attaques.",
				'es-es': "Evita todo el daño infligido a tus Pokémon en Banca por ataques.",
				'it-it': "Previeni tutto il danno inflitto dagli attacchi ai tuoi Pokémon in panchina.",
				'pt-br': "Impede todos os danos causados por ataques a seus Pokémon no Banco.",
				'de-de': "Verhindere allen Schaden, der Pokémon auf deiner Bank durch Angriffe zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psy Bolt",
				'fr-fr': "Choc Mental",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It shapes an invisible wall in midair by minutely vibrating its fingertips to stop molecules in the air.",
	},

	thirdParty: {
		cardmarket: 280925,
		tcgplayer: 87595
	}
}

export default card
