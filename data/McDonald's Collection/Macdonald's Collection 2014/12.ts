import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2014'

const card: Card = {
	dexId: [
		676,
	],
	illustrator: "5ban Graphics",
	description: {
		en: "Trimming its fluffy fur not only makes it more elegant but also increases the swiftness of its movements."
	},
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	name: {
		en: "Furfrou",
		fr: "Couafarel",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: [
		"Colorless",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110417,
	},
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tight Jaw",
				fr: "Mâchoire Serrée",
			},
			damage: "20",
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc Aiguisé",
			},
			damage: "50",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [

	],
	retreat: 1,
}

export default card
