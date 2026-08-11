import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli Niv. 38",
		'de-de': "Flamara"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [136],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Undevelop",
				'fr-fr': "Dé-développer",
				'de-de': "Unentwickelt"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may devolve Flareon and put Flareon into your hand. This power can't be used if Flareon is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez dés-évoluer Pyroli et le placer dans votre main. Ce pouvoir ne peut pas être utilisé si Pyroli est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du Flamara rückentwickeln und Flamara auf deine Hand nehmen. Diese Poké-Power kann nicht benutzt werden, wenn Flamara von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Slap",
				'fr-fr': "Coud'keu",
				'de-de': "Schweifschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Evolving Flare",
				'fr-fr': "Éclat évolutif",
				'de-de': "Fackel-Entwicklung"
			},
			effect: {
				'en-us': "If Flareon evolved from Eevee during this turn, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Burned.",
				'fr-fr': "Si Pyroli évolue d'Evoli lors de ce tour, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Wenn Flamara sich in diesem Zug aus Evoli entwickelt hat, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278593,
				tcgplayer: 85497
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278593,
				tcgplayer: 85497
			}
		},
	],

}

export default card
