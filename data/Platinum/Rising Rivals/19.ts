import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Flareon",
		fr: "Pyroli Niv. 38",
		de: "Flamara"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Undevelop",
				fr: "Dé-développer",
				de: "Unentwickelt"
			},
			effect: {
				en: "Once during your turn (before your attack), you may devolve Flareon and put Flareon into your hand. This power can't be used if Flareon is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez dés-évoluer Pyroli et le placer dans votre main. Ce pouvoir ne peut pas être utilisé si Pyroli est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du Flamara rückentwickeln und Flamara auf deine Hand nehmen. Diese Poké-Power kann nicht benutzt werden, wenn Flamara von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Slap",
				fr: "Coud'keu",
				de: "Schweifschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Evolving Flare",
				fr: "Éclat évolutif",
				de: "Fackel-Entwicklung"
			},
			effect: {
				en: "If Flareon evolved from Eevee during this turn, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Burned.",
				fr: "Si Pyroli évolue d'Evoli lors de ce tour, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wenn Flamara sich in diesem Zug aus Evoli entwickelt hat, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt verbrannt."
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

	thirdParty: {
		cardmarket: 278593,
		tcgplayer: 85497
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
