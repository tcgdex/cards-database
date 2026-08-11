import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Muk ex",
		'fr-fr': "Grotadmorv ex",
		'de-de': "Sleimok ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [89],

	hp: 100,

	stage: "Basic",
	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Toxic Gas",
				'fr-fr': "Gaz chimique",
				'de-de': "Toxic Gas"
			},
			effect: {
				'en-us': "As long as Muk ex is your Active Pokémon, ignore all Poké-Powers and Poké-Bodies other than Toxic Gas.",
				'fr-fr': "Tant que Grotadmorv ex est votre Pokémon Actif, ignorez tous les Poké-Powers et les Poké-Bodies autres que Puanteur.",
				'de-de': "As long as Muk is your active Pokémon, ignore all Poke-Powers and Poke-Bodies other than Toxic Gas."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poison Breath",
				'fr-fr': "Haleine empoisonnée",
				'de-de': "Poison Breath"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned"
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Slimy Water",
				'fr-fr': "Eau gluante",
				'de-de': "Slimy Water"
			},
			effect: {
				'en-us': "Does 40 damage plus 10 more damage for each Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost).",
				'fr-fr': "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  dans le Coût de retraite du Pokémon Défenseur (après application des effets sur le Coût de retraite).",
				'de-de': "Does 40 damage plus 10 more damage for each  Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost)."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87628,
				cardmarket: 275973
			},
		},
	],

}

export default card
