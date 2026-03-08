import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
		de: "Guardevoir"
	},

	illustrator: "Ken Sugimori",
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
		en: "Kirlia",
		fr: "Kirlia"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Psy Shadow",
				fr: "Ombre psy",
				de: "Psy Shadow"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Psychic Energy card and attach it to 1 of your Pokémon. Put 2 damage counters on that Pokémon. Shuffle your deck afterward. This power can't be used if Gardevoir is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez choisir dans votre deck une carte Énergie  et l'attacher à un de vos Pokémon. Placez deux marqueurs de dégât sur ce Pokémon. Mélangez ensuite votre deck. Ce pouvoir ne peut être utilisé si Gardevoir est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), you may search your Deck for a  Energy card and attach it to 1 of your Pokémon. Put 2 damage counters on that Pokémon. Shuffle your Deck afterward. This power can't be used if Gardevoir is affected by a Special Condition."
			},
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
				de: "Energy Burst"
			},
			effect: {
				en: "Does 10 damage times the total amount of Energy attached to Gardevoir and the Defending Pokémon.",
				fr: "Inflige 10 dégâts pour chaque carte Énergie attachée à Gardevoir et au Pokémon Défenseur.",
				de: "Does 10 damage times the total amount of Energy attached to Gardevoir and the Defending Pokémon."
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
		cardmarket: 275655,
		tcgplayer: 85632
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
		{
			type: "holo",
			subtype: "no-e-reader"
		},
		{
			type: "reverse",
			subtype: "no-e-reader"
		},
		{
			type: "holo",
			stamp: ["kevin-nguyen"]
		}
	]
}

export default card
