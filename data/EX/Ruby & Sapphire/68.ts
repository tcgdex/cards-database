import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Ralts",
		fr: "Tarsal",
		de: "Trasla"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [280],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras'face",
				de: "Pfund"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Link Blast",
				fr: "Explosion en série",
				de: "Vereinigende Explosion"
			},
			effect: {
				en: "If Ralts and the Defending Pokémon have a different amount of Energy attached to them, this attack's base damage is 10 instead of 40.",
				fr: "Si Tarsal et le Pokémon Défenseur ont un total d'Énergie différent, les dégâts de base de cette attaque sont de 10 et non de 40.",
				de: "Wenn an Trasla und dem Verteidigenden Pokémon unterschiedlich viel Energie angelegt ist, beträgt der Grundschaden dieses Angriffs 10 statt 40."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275716,
				tcgplayer: 88556
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275716,
				tcgplayer: 88556
			}
		},
	],

}

export default card
