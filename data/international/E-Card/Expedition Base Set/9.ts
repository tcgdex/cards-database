import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Dragonite",
		'fr-fr': "Dracolosse",
		'de-de': "Dragoran"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [149],

	hp: 100,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Dragonair",
		'fr-fr': "Draco"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Tailwind",
				'fr-fr': "Vent arrière",
				'de-de': "Rückenwind"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Dragonite is on your Bench, you may reduce your Active Pokémon's Retreat Cost to 0.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si Dracolosse est sur votre Banc, vous pouvez réduire le Coût de Retraite de votre Pokémon Actif à 0.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls Dragoran auf deiner Bank ist, die Rückzugskosten deines Aktiven Pokémon auf 0 reduzieren."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Water",
				"Fighting",
			],
			name: {
				'en-us': "Dragon Tail",
				'fr-fr': "Queue de dragon",
				'de-de': "Drachenschwanz"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque fait 40 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40×",

		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84910,
				cardmarket: 274884
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84910,
				cardmarket: 274884
			},
		},
	],
}

export default card
