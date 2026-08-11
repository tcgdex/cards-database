import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Claydol",
		'fr-fr': "Kaorine",
		'de-de': "Lepumentas"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [344],

	hp: 90,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Antique Magic",
				'fr-fr': "Magie antique",
				'de-de': "Antike Magie"
			},
			effect: {
				'en-us': "Put 3 damage counters on any Pokémon (both yours and your opponent's) in any way you like.",
				'fr-fr': "Placez 3 marqueurs de dégât sur n'importe quel Pokémon (les vôtres et ceux de votre adversaire) de la façon que vous voulez.",
				'de-de': "Lege 3 Schadensmarken in beliebiger Verteilung auf 1 oder mehrere Pokémon im Spiel (deine und die deines Gegners)."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Synchro Attack",
				'fr-fr': "Attaque synchro",
				'de-de': "Synchro-Angriff"
			},
			effect: {
				'en-us': "If the Defending Pokémon has the same remaining HP as Claydol, this attack's base damage is 90 instead of 30.",
				'fr-fr': "Si le Pokémon Défenseur a le même nombre de PV que Kaorine, les dégâts de base de cette attaque sont de 90 au lieu de 30.",
				'de-de': "Wenn das Verteidigende Pokémon gleich viel verbliebene KP hat wie Lepumentas, beträgt der Grundschaden dieses Angriffs 90 Schadenspunkte anstelle von 30 Schadenspunkten."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "An ancient clay figurine that came to life as a Pokémon from exposure to a mysterious ray of light."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84338,
				cardmarket: 278713
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278713,
				tcgplayer: 84338
			}
		},
	],

}

export default card
