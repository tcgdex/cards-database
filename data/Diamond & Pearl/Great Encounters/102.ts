import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Rare Candy",
		fr: "Super bonbon",
		de: "Sonderbonbon"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez 1 de vos Pokémon de base en jeu. Si vous possédez dans votre main une carte Niveau 1 ou Niveau 2 qui évolue de ce Pokémon, placez-la sur le Pokémon de base. (Vous le faites ainsi évoluer.)",
		de: "Wähle 1 deiner Basis-Pokémon im Spiel. Falls du eine Phase 1- oder Phase 2-Karte auf der Hand hast, die sich aus diesem Pokémon entwickelt, lege sie auf das Basis-Pokémon. (Das zählt als Entwickeln des gewählten Pokémon.)"
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278004,
		tcgplayer: 88593
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["dylan-lefavour"]
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		},
		{
			type: "normal",
			stamp: ["stephen-silvestro"]
		},
		{
			type: "normal",
			stamp: ["jason-martinez"]
		},
		{
			type: "normal",
			stamp: ["david-cohen"]
		}
	]
}

export default card
