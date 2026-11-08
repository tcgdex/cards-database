import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Aggron",
		'fr-fr': "Galeking Niv. 53",
		'de-de': "Stolloss"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [306],

	hp: 130,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Lairon",
		'fr-fr': "Galegon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Return Blow",
				'fr-fr': "Retour de coup",
				'de-de': "Umkehrhieb"
			},
			effect: {
				'en-us': "If Aggron was damaged by an attack during your opponent's last turn, this attack does the same amount of damage done to Aggron to the Defending Pokémon.",
				'fr-fr': "Si une attaque a infligé des dégâts à Galeking lors du dernier tour de votre adversaire, cette attaque inflige le même nombre de dégâts au Pokémon Défenseur.",
				'de-de': "Wenn Stolloss im letzten Zug deines Gegners durch einen Angriff Schaden zugefügt wurde, fügt dieser Angriff dem Verteidigenden Pokémon die gleiche Anzahl Schadenspunkte, die Stolloss zugefügt wurde, zu."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metal Fang",
				'fr-fr': "Croc métallique",
				'de-de': "Metallfänge"
			},
			effect: {
				'en-us': "You may discard the top card of your deck. If you do, remove 2 damage counters and all Special Conditions from Aggron.",
				'fr-fr': "Vous pouvez défausser la carte du dessus de votre deck. Retirez alors à Galeking 2 marqueurs de dégât ainsi que tous ses États Spéciaux.",
				'de-de': "Du kannst die oberste Karte deines Decks auf deinen Ablagestapel legen. Wenn du das machst, entferne 2 Schadensmarken und alle Speziellen Zustände von Stolloss."
			},
			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Impact",
				'fr-fr': "Gros impact",
				'de-de': "Schwerer Einschlag"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278588,
				tcgplayer: 83479
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278588,
				tcgplayer: 83479
			}
		},
	],

}

export default card
