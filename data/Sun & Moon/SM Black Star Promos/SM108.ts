import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Ash's Pikachu",
		fr: "Pikachu de Sacha",
		de: "Ashs Pikachu"
	},
	illustrator: "2017 Pikachu Project",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		25,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "I Choose You!",
				fr: "Je te choisis !",
				de: "Du bist dran!"
			},
			effect: {
				en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thunderbolt",
				fr: "Tonnerre",
				de: "Donnerblitz"
			},
			effect: {
				en: "Discard all Energy from this Pokémon.",
				fr: "Défaussez toute l’Énergie de ce Pokémon.",
				de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		en: "This Pikachu is wearing its Trainer's cap. Since the cap's not the right size, the fit is a bit loose.",
		de: "Dieses Pikachu trägt die Kappe des Trainers, mit dem es sich zusammengeschlossen hat. Sie ist ihm allerdings ein bisschen zu groß."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 301683,
				tcgplayer: 151973
			}
		}
	],
}

export default card
