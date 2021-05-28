import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Delcatty",
		fr: "Delcatty",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		301,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Skitty",
		fr: "Eneco",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Attracting Body",
				fr: "Corps attrayant",
			},
			effect: {
				en: "If Delcatty is your Active Pokémon and is damaged by an opponent's attack (even if Delcatty is Knocked Out), flip a coin. If heads, the Attacking Pokémon is now Confused.",
				fr: "Si Delcatty est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Delcatty est mis K.O), lancez une pièce. Si c'est face, le Pokémon Attaquant est maintenant Confus.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Assist",
				fr: "Assist-Énergie",
			},
			effect: {
				en: "Search your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à 1 des Pokémon de votre Banc.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
