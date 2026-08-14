import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
		de: "Guardevoir"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [282],

	hp: 100,

	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
		de: "Kirlia"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Psy Shadow",
				fr: "Ombre psy",
				de: "Psischatten"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Psychic Energy card and attach it to 1 of your Pokémon. Put 2 damage counters on that Pokémon. Shuffle your deck afterward. This power can't be used if Gardevoir is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez choisir dans votre deck une carte Énergie  et l'attacher à un de vos Pokémon. Placez deux marqueurs de dégât sur ce Pokémon. Mélangez ensuite votre deck. Ce pouvoir ne peut être utilisé si Gardevoir est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach einer {P}-Energiekarte durchsuchen und an 1 deiner Pokémon anlegen. Lege 2 Schadensmarken auf dieses Pokémon. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Guardevoir von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Burst",
				fr: "Explosion d'énergie",
				de: "Energieausbruch"
			},
			effect: {
				en: "Does 10 damage times the total amount of Energy attached to Gardevoir and the Defending Pokémon.",
				fr: "Inflige 10 dégâts pour chaque carte Énergie attachée à Gardevoir et au Pokémon Défenseur.",
				de: "Dieser Angriff fügt für jede Energie, die an Guardevoir und dem Verteidigenden Pokémon angelegt ist, 10 Schadenspunkte zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [		{
			type: "holo",
			thirdParty: {
				cardmarket: 275655,
				tcgplayer: 85632
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275655,
				tcgplayer: 85632
			}
		},
		{
			type: "holo",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125139
			}
		},
		{
			type: "reverse",
			subtype: "no-e-reader",
			thirdParty: {
				cardmarket: 275655,
			},

		},
		{
			type: "holo",
			stamp: ["kevin-nguyen"],
			thirdParty: {
				tcgplayer: 477386
			}
		}
	],

}

export default card
