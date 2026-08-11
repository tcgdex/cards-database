import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Gardevoir",
		'fr-fr': "Gardevoir",
		'de-de': "Guardevoir"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Psy Shadow",
				'fr-fr': "Ombre Psy",
				'de-de': "Psischatten"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Psychic Energy card and attach it to 1 of your Pokémon. Put 2 damage counters on that Pokémon. Shuffle your deck afterward. This power can't be used if Gardevoir is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck une carte Énergie  et l'attacher à 1 de vos Pokémon. Placez 2 marqueurs de dégât sur ce Pokémon. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Gardevoir est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach einer -Energiekarte durchsuchen und an 1 deiner Pokémon anlegen. Lege 2 Schadensmarken auf dieses Pokémon. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Guardevoir von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Energy Burst",
				'fr-fr': "Explosion d'énergie",
				'de-de': "Energieausbruch"
			},
			effect: {
				'en-us': "Does 10 damage times the total amount of Energy attached to Gardevoir and the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre total d'Énergies attachées à Gardevoir et au Pokémon Défenseur.",
				'de-de': "Dieser Angriff fügt für jede Energie, die an Guardevoir und dem Verteidigenden Pokémon angelegt ist, 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277315,
		tcgplayer: 85634
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
			type: "normal",
		}
	]
}

export default card
