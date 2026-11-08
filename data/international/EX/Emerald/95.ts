import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Medicham ex",
		'fr-fr': "Charmina ex",
		'de-de': "Meditalis ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		308,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Wise Aura",
				'fr-fr': "Sage aura",
				'de-de': "Wise Aura"
			},
			effect: {
				'en-us': "As long as Medicham ex is your Active Pokémon, each Pokémon (excluding Pokémon-ex) (both yours and your opponent's) can't use any Poké-Powers.",
				'fr-fr': "Tant que Charmina ex est votre Pokémon Actif, chaque Pokémon (Pokémon-ex exclus) (les vôtres et ceux de votre adversaire), ne peut pas utiliser de Poké-Powers.",
				'de-de': "As long as Medicham ex is your Active Pokémon, each Pokémon (excluding Pokémon-ex) (both yours and your opponent's) can't use any Poké-Powers."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pure Power",
				'fr-fr': "Pouvoir pur",
				'de-de': "Pure Power"
			},
			effect: {
				'en-us': "Put 3 damage counters on your opponent's Pokémon in any way you like.",
				'fr-fr': "Placez 3 marqueurs de dégât sur les Pokémon de votre adversaire de la façon que vous voulez.",
				'de-de': "Put 3 damage counter on your opponent's Pokémon in any way you like"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sky Kick",
				'fr-fr': "Coup de pied céleste",
				'de-de': "Sky Kick"
			},
			effect: {
				'en-us': "If the Defending Pokémon has Fighting Resistance, this attack does 60 damage plus 40 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède une Résistance , cette attaque inflige 60 dégâts plus 40 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon has  Resistance, this attack does 60 damage plus 40 more damage."
			},
			damage: "60+",

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
		tcgplayer: 87277,
		cardmarket: 276606
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87277,
				cardmarket: 276606
			},
		},
		{
			type: "holo",
			stamp: ["curran-hill"],
			thirdParty: {
				tcgplayer: 477551,
				cardmarket: 871510
			},
		}
	],
}

export default card
