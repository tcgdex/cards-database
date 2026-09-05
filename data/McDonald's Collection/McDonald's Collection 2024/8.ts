import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Koraidon",
		fr: "Koraidon",
		es: "Koraidon",
		it: "Koraidon",
		pt: "Koraidon",
		de: "Koraidon"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [1007],

	hp: 130,

	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				en: "Claw Clash",
				de: "Klauenschlitzer"
			},
			damage: 70,
		},
		{
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			name: {
				en: "Wild Impact",
				de: "Tobende Fänge"
			},
			damage: 190,
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
				de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 802830,
				tcgplayer: 614377
			}
		}
	]
}

export default card

