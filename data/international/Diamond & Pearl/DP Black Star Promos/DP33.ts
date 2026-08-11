import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Dusknoir",
		'fr-fr': "Noctunoir",
		'de-de': "Zwirrfinst"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		477,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Dusclops",
		'fr-fr': "Téraclope"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Dark Hide",
				'fr-fr': "Cachette obscure",
				'de-de': "Dunkles Versteck"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, look at your opponent's hand, choose a Pokémon you find there, and put it on the bottom of his or her deck. This power can't be used if Dusknoir is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, regardez la main de votre adversaire, choisissez-y un Pokémon et placez-le au dessous de son deck. Ce pouvoir ne peut pas être utilisé si Noctunoir est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen. Bei \"Kopf\" schau dir die Handkarten deines Gegners an, wähle 1 Pokémon-Karte, die du dort gefunden hast, und lege sie unter das Deck deines Gegners. Diese Poké-Power kann nicht benutzt werden, wenn Zwirrfinst von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Reaper Pulse",
				'fr-fr': "Pouls maléfique",
				'de-de': "Düsterpuls"
			},
			effect: {
				'en-us': "Move up to 2 damage counters from Dusknoir to 1 of your opponent's Benched Pokémon.",
				'fr-fr': "Déplacez jusqu'à 2 marqueurs de dégât de Noctunoir sur 1 des Pokémon de Banc de votre adversaire.",
				'de-de': "Entferne bis zu 2 Schadensmarken von Zwirrfinst und lege sie auf 1 Pokémon auf der Bank deines Gegners."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "The antenna on its head captures radio waves from the world of spirits that command it to take people there.",
		'fr-fr': "L'antenne sur sa tête capte les ondes radio du monde des esprits lui ordonnant d'y porter les gens."
	},

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
