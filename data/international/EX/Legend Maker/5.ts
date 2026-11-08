import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Gengar",
		'fr-fr': "Ectoplasma",
		'de-de': "Gengar"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Shadow Curse",
				'fr-fr': "Ombre maléfique",
				'de-de': "Schattenfluch"
			},
			effect: {
				'en-us': "If Gengar would be Knocked Out by damage from an opponent's attack, you may put 3 damage counters on 1 of your opponent's Pokémon.",
				'fr-fr': "Si Ectoplasma doit être mis K.O par les dégâts d'une attaque de votre adversaire, vous pouvez placer 3 marqueurs de dégât sur 1 des Pokémon de votre adversaire.",
				'de-de': "Wenn Gengar durch die Schadenspunkte eines gegnerichen Angriffs kampfunfähig gemacht würde, kannst du 3 Schadensmarken auf 1 gegnerisches Pokémon legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Cursed Reaction",
				'fr-fr': "Réaction maléfique",
				'de-de': "Reaktionsfluch"
			},
			effect: {
				'en-us': "Put 2 damage counters on your opponent's Pokémon in any way you like. If Gengar has any React Energy cards attached to it, put 4 damage counters instead.",
				'fr-fr': "Placez 2 marqueurs de dégât sur les Pokémon de votre adversaire de la façon que vous voulez. Si Ectoplasma possède des cartes Énergie réaction, placez 4 marqueurs de dégât.",
				'de-de': "Verteile 2 Schadensmarken auf die Pokémon deines Gegners. Wenn an Gengar mindestens eine Reaktions-Energiekarte angelegt ist, verteile stattdessen 4 Schadensmarken."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Super Psy Bolt",
				'fr-fr': "Super psy",
				'de-de': "Super-Psischlag"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276882,
		tcgplayer: 85674
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			stamp: ["gym-challenge"]
		}
	]
}

export default card
