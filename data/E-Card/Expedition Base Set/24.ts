import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Poliwrath",
		fr: "Tartard",
		de: "Quappo"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Plunge",
				fr: "Plongeon",
				de: "Plunge"
			},
			effect: {
				en: "Once during your turn (before you attack), if Poliwrath is on your Bench, you may flip a coin. If heads, take all Energy cards attached to your Active Pokémon, if any, and attach them to Poliwrath. Then switch Poliwrath with your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Tartard est sur votre Banc, vous pouvez lancer une pièce. Si c'est face, prenez toutes les cartes Énergie attachées à votre Pokémon Actif, s'il en possède, et attachez-les à Tartard. Échangez ensuite Tartard contre votre Pokémon Actif.",
				de: "Once during your turn (before your attack), if Poliwrath is on your Bench, you may flip a coin. If heads, take all Energy cards attached to your Active Pokémon, if any, and attach them to Poliwrath. Then switch Poliwrath with your Active Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Punch",
				fr: "Poing d'O",
				de: "Water Punch"
			},
			effect: {
				en: "Flip a number of coins equal to the amount of W Energy cards attached to Poliwrath. This attack does 40 damage plus 10 more damage for each heads.",
				fr: "Lancez un nombre de pièces équivalent au nombre d'Énergie  attachées à Tartard. Cette attaque inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				de: "Flip a number of coins equal to the amount of  Energy attached to Poliwrath. This attack does 40 damage plus 10 more damage for each heads."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274899,
		tcgplayer: 88271
	},

	variants:[
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
