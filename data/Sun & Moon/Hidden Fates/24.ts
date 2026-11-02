import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Zapdos",
		fr: "Électhor",
		de: "Zapdos"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane Call",
				fr: "Appel à l’Ouragan",
				de: "Sturmruf"
			},
			effect: {
				en: "Flip 4 coins. For each heads, search your deck for a Lightning Energy card and attach it to 1 of your Pokémon-GX or Pokémon-EX. Then, shuffle your deck.",
				fr: "Lancez 4 pièces. Pour chaque côté face, cherchez une carte Énergie Lightning dans votre deck et attachez-la à l’un de vos Pokémon-GX ou Pokémon-EX. Mélangez ensuite votre deck.",
				de: "Wirf 4 Münzen. Durchsuche pro Kopf dein Deck nach 1 {L}-Energiekarte und lege sie an 1 deiner Pokémon-GX oder Pokémon-EX an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Sky-High Claws",
				fr: "Griffes Gratte-Ciel",
				de: "Himmelhohe Klauen"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "A legendary bird Pokémon that is said to appear from clouds while dropping enormous lightning bolts.",
		de: "Ein Legendäres Vogel-Pokémon, das im Sturzflug aus den Wolken bricht und Blitze schleudert."
	},

	thirdParty: {
		cardmarket: 394747,
		tcgplayer: 197668
	}
}

export default card
