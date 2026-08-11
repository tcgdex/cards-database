import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Smeargle",
		'fr-fr': "Queulorior",
		'de-de': "Farbeagle"
	},

	illustrator: "Midori Harada",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [235],

	hp: 70,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Portrait",
				'fr-fr': "Portrait",
				'de-de': "Porträt"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Smeargle is your Active Pokémon, you may look at your opponent's hand. If you do, choose a Supporter card you find there and use the effect of that card as the effect of this power. This power can't be used if Smeargle is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si Queulorior est votre Pokémon Actif, vous pouvez demander à voir la main de votre adversaire. Dans ce cas, choisissez l'une des cartes Supporter qui s'y trouvent et utilisez les effets de cette carte pour ce Poké-Power. Ce pouvoir ne peut être utilisé si Queulorior est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dir, falls Farbeagle dein Aktives Pokémon ist, die Handkarten deines Gegners anschauen. Wenn du das machst, wähle 1 Unterstützerkarte, die du dort gefunden hast, und nutze den Effekt der Unterstützerkarte als Effekt dieser Poké-Power. Diese Poké-Power kann nicht benutzt werden, wenn Farbeagle von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Rap",
				'fr-fr': "Frap'keu",
				'de-de': "Schweifklopfen"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Once it becomes an adult, it has a tendency to let its comrades plant footprints on its back.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89357,
				cardmarket: 279664
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89357,
				cardmarket: 279664
			},
		},
	],

}

export default card
