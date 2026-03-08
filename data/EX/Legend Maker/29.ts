import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Anorith",
		fr: "Anorith",
		de: "Anorith"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		347,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Claw Fossil",
		fr: "Fossile griffe"
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
				fr: "Cherchez dans votre deck Amonita, Kabuto, Ptera, Lilia ou Anorith et placez 2 de ces Pokémon sur votre Banc. Ensuite, mélangez votre deck. Traitez le nouveau Pokémon de Banc comme un Pokémon de base.",
				de: "Search your deck for Amonyte, Kabuto, Aerodactyl, Lileep, or Anorith and put to 2 of them onto your Bench, Shuffle your deck afterward. Treat the new Benched Pokémon as Basic Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stretch Claws",
				fr: "Allonge-griffes",
				de: "Stretch Claws"
			},
			effect: {
				en: "If Anorith has any React Energy cards attached to it, this attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si Anorith possède des cartes Énergie réaction, cette attaque inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "If Anorith has any React Energy attached to it, this attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276906,
		tcgplayer: 83559
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
