import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Butterfree",
		fr: "Papilusion",
		de: "Smettbo"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		12,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sooth Dust",
				fr: "Poussière apaisante",
				de: "Beruhigender Staub"
			},
			effect: {
				en: "As long as Butterfree is your Active Pokémon, remove 1 damage counter from each of your Pokémon between turns.",
				fr: "Tant que Papilusion est votre Pokémon Actif, retirez à chacun de vos Pokémon un marqueur de dégât entre deux tours.",
				de: "Solange Smettbo dein Aktives Pokémon ist, entferne jedes Mal zwischen dn Zügen 1 Schadensmarke von jedem deiner Pokémon."
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
				en: "Whirlwind",
				fr: "Cyclone",
				de: "Wirbelwind"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec un des Pokémon de son Banc.",
				de: "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
				de: "Windstoß"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 276178,
		tcgplayer: 84065
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
