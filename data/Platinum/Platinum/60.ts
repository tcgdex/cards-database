import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Probopass",
		fr: "Tarinorme",
		de: "Voluminas"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [476],

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Nosepass",
		fr: "Tarinor",
		de: "Nasgnet"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Stealth Rock",
				fr: "Piège de Roc",
				de: "Tarnsteine"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
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
				de: "Wirf 1 Münze. Bei „Kopf“ lege 1 Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		en: "It freely controls three small units called Mini-Noses using magnetic force.",
		de: "Es steuert drei kleine Einheiten mithilfe von starkem Magnetismus. Man nennt sie Mininasen."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 88377,
				cardmarket: 278481
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278481,
				tcgplayer: 88377
			}
		}
	],

}

export default card
