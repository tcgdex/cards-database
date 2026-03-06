import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Cacturne ex",
		fr: "Cacturne ex",
		de: "Noktuska ex"
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
		en: "Cacnea",
		fr: "Cacnea"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cursed Glare",
				fr: "Regard maléfique",
				de: "Cursed Glare"
			},
			effect: {
				en: "As long as Cacturne ex is your Active Pokémon, your opponent can't attach any Special Energy cards (except for Darkness and Metal Energy cards) from his or her hand to his or her Active Pokémon.",
				fr: "Tant que Cacturne ex est votre Pokémon Actif, votre adversaire ne peut pas attacher de cartes Énergie spéciales (sauf les cartes Énergie  et ) de sa main à son Pokémon Actif.",
				de: "As long as Cacturne ex is your Active Pokémon, your Opponent cant attach any Special Energy cards (except for  and  Energy cards) from his or her hand to his or her Active Pokémon"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale psy",
				de: "Psybeam"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "The Defending Pokémon is now Confused."
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
				en: "Spike Rend",
				fr: "Pointe déchirante",
				de: "Spike Rend"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 50 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				de: "If the Defending Pokémon already has any damage counters on it, this attack does 50 damage plus 20 more damage"
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
		},
	]
}

export default card
