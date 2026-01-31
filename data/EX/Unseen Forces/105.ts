import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Lugia ex",
		fr: "Lugia ex",
		de: "Lugia ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		249,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Silver Sparkle",
				fr: "Éclat argenté",
				de: "Silver Sparkle"
			},
			effect: {
				en: "If Lugia ex is your Active Pokémon and is damaged by an opponent's attack (even if Lugia ex is Knocked Out), flip a coin. If heads, choose an Energy card attached to the Attacking Pokémon and return it to your opponent's hand.",
				fr: "Si Lugia ex est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Lugia ex est mis K.O), lancez une pièce. Si c'est face, choisissez une carte Énergie attachée au Pokémon Attaquant et replacez-la dans la main de votre adversaire.",
				de: "If Lugia ex is your Active Pokémon and is damaged by an opponent's attack (even if Lugia ex is Knocked Out), flip a coin. If heads, choose an Energy card attached to the Attacking Pokémon and return is to your opponent's hand."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Lightning",
			],
			name: {
				en: "Elemental Blast",
				fr: "Explosion élémentaire",
				de: "Elemental Blast"
			},
			effect: {
				en: "Discard a Fire Energy, Water Energy, and Lightning Energy attached to Lugia ex.",
				fr: "Défaussez une Énergie , une Énergie  et une Énergie  attachée à Lugia ex.",
				de: "Discard a  Energy,  Energy, and  Energy attached to Lugia ex."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276751,
		tcgplayer: 86912
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["hiroki-yano"]
		}
	]
}

export default card
