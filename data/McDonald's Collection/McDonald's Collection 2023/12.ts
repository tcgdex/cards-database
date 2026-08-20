import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie",
		es: "Blissey",
		it: "Blissey",
		pt: "Blissey",
		de: "Heiteira"
	},

	illustrator: "chibi",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [242],

	hp: 150,

	types: ["Colorless"],

	stage: "Stage2",

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
		es: "Chansey",
		it: "Chansey",
		pt: "Chansey",
		de: "Chaneira"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Busybody Nurse",
				de: "Emsige Pflege"
			},
			effect: {
				en: "Once during your turn, you may use this Ability. Your Active Pokémon recovers from all Special Conditions.",
				de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Dein Aktives Pokémon erholt sich von allen Speziellen Zuständen."
			}
		}
	],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				en: "Happy Cyclone",
				de: "Freudiger Wirbel"
			},
			effect: {
				en: "Move all Energy from this Pokémon to 1 of your Benched Pokémon.",
				de: "Verschiebe alle Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank."
			},
			damage: 150,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725429,
				tcgplayer: 516523
			}
		}
	]
}

export default card

