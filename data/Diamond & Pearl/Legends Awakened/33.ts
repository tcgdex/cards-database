import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Lopunny",
		fr: "Lockpin",
		de: "Schlapor"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		428,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Buneary",
		fr: "Haspiror",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Healing Tail",
				fr: "Queue guérisseuse",
				de: "Heilpuschel"
			},
			effect: {
				en: "As long as Lopunny is your Active Pokémon, remove 1 damage counter from each of your Benched Pokémon between turns.",
				fr: "Tant que Lockpin est votre Pokémon Actif, retirez à chacun de vos Pokémon de Banc 1 marqueur de dégât entre deux tours.",
				de: "Solange Schlapor dein Aktives Pokémon ist, entferne zwischen den Zügen 1 Schadensmarke von jedem Pokémon auf deiner Bank."
			},
		},
	],

	attacks: [
		{

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
				en: "Cross-Cut",
				fr: "Coupe transversale",
				de: "Überkreuzzerschneider"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 30 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon ein entwickeltes Pokémon ist, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		fr: "Un Pokémon extrêmement prudent. Il couvre son corps de ses oreilles pelucheuses en cas de danger."
	},

	thirdParty: {
		cardmarket: 278182,
		tcgplayer: 86824
	}
}

export default card
