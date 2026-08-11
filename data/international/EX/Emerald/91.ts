import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Cacturne ex",
		'fr-fr': "Cacturne ex",
		'de-de': "Noktuska ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		332,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Cacnea",
		'fr-fr': "Cacnea"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Cursed Glare",
				'fr-fr': "Regard maléfique",
				'de-de': "Cursed Glare"
			},
			effect: {
				'en-us': "As long as Cacturne ex is your Active Pokémon, your opponent can't attach any Special Energy cards (except for Darkness and Metal Energy cards) from his or her hand to his or her Active Pokémon.",
				'fr-fr': "Tant que Cacturne ex est votre Pokémon Actif, votre adversaire ne peut pas attacher de cartes Énergie spéciales (sauf les cartes Énergie  et ) de sa main à son Pokémon Actif.",
				'de-de': "As long as Cacturne ex is your Active Pokémon, your Opponent cant attach any Special Energy cards (except for  and  Energy cards) from his or her hand to his or her Active Pokémon"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rafale psy",
				'de-de': "Psybeam"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "The Defending Pokémon is now Confused."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spike Rend",
				'fr-fr': "Pointe déchirante",
				'de-de': "Spike Rend"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, this attack does 50 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon already has any damage counters on it, this attack does 50 damage plus 20 more damage"
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 84084,
		cardmarket: 276602
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84084,
				cardmarket: 276602
			},
		},
	],
}

export default card
