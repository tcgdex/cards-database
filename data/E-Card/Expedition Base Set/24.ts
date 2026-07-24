import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Nidoking",
		fr: "Tartard",
		de: "Quappo"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [34],

	hp: 110,

	types: [
		"Fighting"
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
				en: "Earth Rage",
				fr: "Plongeon",
				de: "Plunge"
			},
			effect: {
				en: "Once during your turn (before your attack), if Nidoking is your Active Pokémon, you may flip a coin. If heads, put a damage counter on each of your opponent's Benched Pokémon. This power can't be used if Nidoking is affected by a Special Condition.",
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
				en: "Giant Horn",
				fr: "Poing d'O",
				de: "Water Punch"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 30 more damage.",
				fr: "Lancez un nombre de pièces équivalent au nombre d'Énergie  attachées à Tartard. Cette attaque inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				de: "Flip a number of coins equal to the amount of  Energy attached to Poliwrath. This attack does 40 damage plus 10 more damage for each heads."
			},
			damage: "50+",

		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],,
	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88271,
				cardmarket: 274899
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
