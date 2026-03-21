import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Lileep",
		fr: "Lilia",
		de: "Liliep"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		345,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Root Fossil",
		fr: "Fossile racine"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Influence",
				fr: "Influencer",
				de: "Influence"
			},
			effect: {
				en: "Search your deck for Omanyte, Kabuto, Aerodactyl, Lileep, or Anorith and put up to 2 of them onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokémon as Basic Pokémon.",
				fr: "Cherchez dans votre deck Amonita, Kabuto, Ptera, Lilia ou Anorith et placez jusqu'à deux de ces Pokémon sur votre Banc. Ensuite, mélangez votre deck. Traitez les nouveaux Pokémon du Banc comme des Pokémon de base.",
				de: "Search your deck for Omanyte, Kabuto, Aerodactyl, Lileep, or Anorith and put up to 2 of them onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokémon as Basic Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Time Spiral",
				fr: "Spirale temporelle",
				de: "Time Spiral"
			},
			effect: {
				en: "If your opponent has any Evolved Pokémon in play, choose 1 of them and flip a coin. If heads, take the highest Stage Evolution card on that Pokémon and have your opponent shuffle it into his or her deck.",
				fr: "Si votre adversaire a un ou plusieurs Pokémon Évolués en jeu, choisissez-en un et lancez une pièce. Si c'est face, votre adversaire reprend la carte avec le niveau d'Évolution le plus élevé et la mélange à son deck.",
				de: "If your opponent has any Evolved Pokémon in play, choose 1 of them and flip a coin. If heads, remove the highest Stage Evolution card on that Pokémon and have your opponent shuffle it into his or her deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 275819,
		tcgplayer: 86785
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
