import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
		de: "Dragoran"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Dragonair",
		fr: "Dragonir",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser",
				de: "Hyperstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 1 Münze. Bei 'Kopf' lege 1 Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Draco Meteor",
				fr: "Draco Météor",
				de: "Draco Meteor"
			},
			effect: {
				en: "Flip a coin for each of your opponent's Pokémon. If that coin flip is heads, this attack does 50 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce pour chaque Pokémon que possède votre adversaire. Si c'est une face, cette attaque inflige 50 dégâts au Pokémon correspondant. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Wirf für jedes Pokémon deines Gegners jeweils 1 Münze. Dieser Angriff fügt jedem Pokémon, für das auf diese Weise 'Kopf' geworfen wurde, 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		fr: "On raconte qu'il vit quelque part en mer. Il guide les équipages naufragés jusqu'à la terre ferme."
	},

	thirdParty: {
		cardmarket: 278151
	}
}

export default card
