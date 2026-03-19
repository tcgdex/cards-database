import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Armaldo ex",
		fr: "Armaldo ex",
		de: "Armaldo ex"
	},

	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		348,
	],

	hp: 160,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Anorith",
		fr: "Anorith"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dual Armor",
				fr: "Double armure",
				de: "Doppelte Rüstung"
			},
			effect: {
				en: "As long as Armaldo ex has any React Energy cards attached to it, Armaldo ex is both Grass and Fighting type.",
				fr: "Tant qu'Armaldo ex possède des cartes Énergie réaction, il est de type  et .",
				de: "Solange an Armaldo ex mindestens eine Reaktions-Energiekarte angelegt ist, ist Armaldo ex ein Pokémon vom Typ  und ."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Fighting",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale épuisante",
				de: "Spiralsauger"
			},
			effect: {
				en: "Remove 2 damage counters from Armaldo ex.",
				fr: "Retirez à Armaldo ex 2 marqueurs de dégât.",
				de: "Entferne 2 Schadensmarken von Armaldo ex."
			},
			damage: 40,
		},
		{
			cost: [ "Colorless", 'Colorless', "Fighting" ],
			name: {
				fr: 'Coupe-tourbillon',
				de: "Wirbelsturmschlag"
			},
			effect: {
				fr: 'Si le Pokémon Défenseur possède une Résistance, les dégâts de base de cette attaque sont de 100 au lieu de 70.',
				de: "Wenn das Verteidigende Pokémon mindestens eine Resistenz hat, beträgt der Grundschaden dieses Angriffs 100 Schadenspunkte anstelle von 70 Schadenspunkten."
			},
			damage: 70
		  }
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 3,

	thirdParty: {
		cardmarket: 276961,
		tcgplayer: 83624
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
