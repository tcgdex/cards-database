import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Terrakion",
		fr: "Terrakium",
		es: "Terrakion",
		it: "Terrakion",
		pt: "Terrakion",
		de: "Terrakium"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		639,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Boulder Crush",
				fr: "Rocher Écrasant",
				de: "Felsenquetscher"
			},

			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sacred Sword",
				fr: "Lame Sainte",
				de: "Sanctoklinge"
			},
			effect: {
				en: "This Pokémon can't use Sacred Sword during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Lame Sainte pendant votre prochain tour.",
				de: "Dieses Pokémon kann während deines nächsten Zuges Sanctoklinge nicht einsetzen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		en: "This Pokémon came to the defense of Pokémon that had lost their homes in a war among humans.",
		de: "Einst bäumte es sich gegen die Menschen auf, deren Kriege zahllose Pokémon heimatlos gemacht hatten."
	},

	thirdParty: {
		cardmarket: 280028,
		tcgplayer: 89886
	}
}

export default card
