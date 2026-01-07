import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
		es: "Pangoro",
		it: "Pangoro",
		pt: "Pangoro",
		de: "Pandagro"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [675],

	hp: 130,

	types: ["Darkness"],

	stage: "Stage1",

	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
		es: "Pancham",
		it: "Pancham",
		pt: "Pancham",
		de: "Pam-Pam"
	},

	attacks: [
		{
			cost: ["Darkness", "Colorless"],
			name: {
				en: "Knuckle Punch",
				fr: "Coup de Poing",
				es: "Puñetazo",
				it: "Pugno",
				pt: "Soco",
				de: "Knöchelhieb"
			},
			damage: 40,
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
				es: "Martillazo",
				it: "Martellata",
				pt: "Martelada",
				de: "Einhämmern"
			},
			damage: 90,
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

