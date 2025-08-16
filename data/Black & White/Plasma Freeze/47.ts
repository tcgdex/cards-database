import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		es: "Mr. Mime",
		it: "Mr. Mime",
		pt: "Mr. Mime",
		de: "Pantimos"
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
				en: "Bench Barrier",
				fr: "Barrière de Banc",
				es: "Barrera de Banca",
				it: "Panchinafranca",
				pt: "Barreira de Banco",
				de: "Bankbarriere"
			},
			effect: {
				en: "Prevent all damage done to your Benched Pokémon by attacks.",
				fr: "Évitez tous les dégâts infligés à vos Pokémon de Banc par des attaques.",
				es: "Evita todo el daño infligido a tus Pokémon en Banca por ataques.",
				it: "Previeni tutto il danno inflitto dagli attacchi ai tuoi Pokémon in panchina.",
				pt: "Impede todos os danos causados por ataques a seus Pokémon no Banco.",
				de: "Verhindere allen Schaden, der Pokémon auf deiner Bank durch Angriffe zugefügt wird."
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
				en: "Psy Bolt",
				fr: "Choc Mental",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
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

	thirdParty: {
		cardmarket: 280925,
		tcgplayer: 87595
	}
}

export default card
