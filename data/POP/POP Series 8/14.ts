import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Happiny",
		de: "Wonneira"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		440,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				de: "Baby Evolution"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Chansey from your hand onto Happiny (this counts as evolving Happiny) and remove all damage counters from Happiny.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du Chaneira von deiner Hand auf Wonneira legen (das zählt als Entwickeln von Wonneira). Entferne alle Schadensmarken von Wonneira."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Lively",
				de: "Aufpäppeln"
			},
			effect: {
				en: "Remove 2 damage counters from 1 of your Pokémon.",
				de: "Entferne 2 Schadensmarken von 1 deiner Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	description: {
		en: "It loves round white things. It carries an egg-shaped rock in imitation of CHANSEY.",
		de: "Es liebt runde, weiße Dinge. Es trägt einen eiförmigen Stein bei sich, und imitiert damit CHANEIRA."
	},

	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278415,
				tcgplayer: 86007
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 278415,
				tcgplayer: 86007
			}
		},
	],
}

export default card
