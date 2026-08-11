import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Bellossom",
		'fr-fr': "Joliflor",
		'de-de': "Blubella"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [182],

	hp: 110,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Gloom",
		'fr-fr': "Ortide"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Hustle Step",
				'fr-fr': "Foulée rapide",
				'de-de': "Übereifriger Schritt"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may remove 1 damage counter from each of your Pokémon. This power can't be used if Bellossom is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez retirer un marqueur de dégât à chacun de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Joliflor est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Schadensmarke von jedem deiner Pokémon entfernen. Diese Poké-Power kann nicht benutzt werden, wenn Blubella von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Dance 'til Dawn",
				'fr-fr': "Danse nocturne",
				'de-de': "Tanz bis zum Morgen"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads. Bellossom is now Asleep.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face. Joliflor est maintenant Endormi.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu. Blubella schläft jetzt."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Bellossom gather at times and seem to dance. They say that the dance is a ritual to summon the sun."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279254,
				tcgplayer: 83801
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279254,
				tcgplayer: 83801
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125047
			}
		},
	],
}

export default card
