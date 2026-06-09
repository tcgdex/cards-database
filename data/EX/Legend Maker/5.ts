import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
		de: "Gengar"
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
		en: "Haunter",
		fr: "Spectrum"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Shadow Curse",
				fr: "Ombre maléfique",
				de: "Schattenfluch"
			},
			effect: {
				en: "If Gengar would be Knocked Out by damage from an opponent's attack, you may put 3 damage counters on 1 of your opponent's Pokémon.",
				fr: "Si Ectoplasma doit être mis K.O par les dégâts d'une attaque de votre adversaire, vous pouvez placer 3 marqueurs de dégât sur 1 des Pokémon de votre adversaire.",
				de: "Wenn Gengar durch die Schadenspunkte eines gegnerichen Angriffs kampfunfähig gemacht würde, kannst du 3 Schadensmarken auf 1 gegnerisches Pokémon legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Cursed Reaction",
				fr: "Réaction maléfique",
				de: "Reaktionsfluch"
			},
			effect: {
				en: "Put 2 damage counters on your opponent's Pokémon in any way you like. If Gengar has any React Energy cards attached to it, put 4 damage counters instead.",
				fr: "Placez 2 marqueurs de dégât sur les Pokémon de votre adversaire de la façon que vous voulez. Si Ectoplasma possède des cartes Énergie réaction, placez 4 marqueurs de dégât.",
				de: "Verteile 2 Schadensmarken auf die Pokémon deines Gegners. Wenn an Gengar mindestens eine Reaktions-Energiekarte angelegt ist, verteile stattdessen 4 Schadensmarken."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
				fr: "Super psy",
				de: "Super-Psischlag"
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
