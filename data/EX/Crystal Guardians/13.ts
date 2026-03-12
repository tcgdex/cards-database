import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
		de: "Knuddeluff"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		40,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fluffy Fur",
				fr: "Douce fourrure",
				de: "Kuscheliges Fell"
			},
			effect: {
				en: "If Wigglytuff is your Active Pokémon and is damaged by an opponent's attack (even if Wigglytuff is Knocked Out), the Attacking Pokémon is now Asleep.",
				fr: "Si Grodoudou est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Grodoudou est mis K.O), le Pokémon Attaquant est maintenant Endormi.",
				de: "Wenn Knuddeluff dein Aktives Pokémon ist und ihm Schaden durch einen gegnerischen Angriff zugefügt wird (auch wenn Knuddeluff kampfunfähig wird), schläft das Angreifende Pokémon jetzt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collectionner",
				de: "Sammeln"
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
				de: "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pester",
				fr: "Abattre",
				de: "Verfolgung"
			},
			effect: {
				en: "If the Defending Pokémon is affected by a Special Condition, this attack does 30 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277094,
		tcgplayer: 90597
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
