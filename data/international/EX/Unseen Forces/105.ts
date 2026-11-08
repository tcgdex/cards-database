import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Lugia ex",
		'fr-fr': "Lugia ex",
		'de-de': "Lugia ex"
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

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Silver Sparkle",
				'fr-fr': "Éclat argenté",
				'de-de': "Silver Sparkle"
			},
			effect: {
				'en-us': "If Lugia ex is your Active Pokémon and is damaged by an opponent's attack (even if Lugia ex is Knocked Out), flip a coin. If heads, choose an Energy card attached to the Attacking Pokémon and return it to your opponent's hand.",
				'fr-fr': "Si Lugia ex est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Lugia ex est mis K.O), lancez une pièce. Si c'est face, choisissez une carte Énergie attachée au Pokémon Attaquant et replacez-la dans la main de votre adversaire.",
				'de-de': "If Lugia ex is your Active Pokémon and is damaged by an opponent's attack (even if Lugia ex is Knocked Out), flip a coin. If heads, choose an Energy card attached to the Attacking Pokémon and return is to your opponent's hand."
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
				'en-us': "Elemental Blast",
				'fr-fr': "Explosion élémentaire",
				'de-de': "Elemental Blast"
			},
			effect: {
				'en-us': "Discard a Fire Energy, Water Energy, and Lightning Energy attached to Lugia ex.",
				'fr-fr': "Défaussez une Énergie , une Énergie  et une Énergie  attachée à Lugia ex.",
				'de-de': "Discard a  Energy,  Energy, and  Energy attached to Lugia ex."
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


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86912,
				cardmarket: 276751
			},
		},
		{
			type: "holo",
			stamp: ["hiroki-yano"],
			thirdParty: {
				tcgplayer: 477776,
				cardmarket: 869511
			},
		}
	],
}

export default card
