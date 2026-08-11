import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Froslass GL",
		'fr-fr': "Momartik  Niv. 44",
		'de-de': "Frosdeje GL"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [478],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sleep Inducer",
				'fr-fr': "Poussododo",
				'de-de': "Schlafeinflößer"
			},
			effect: {
				'en-us': "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Asleep.",
				'fr-fr': "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Tausche das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus. Das neue Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Wake-Up Slap",
				'fr-fr': "Réveil Forcé",
				'de-de': "Weckruf"
			},
			effect: {
				'en-us': "If the Defending Pokémon is affected by any Special Conditions, this attack does 30 damage plus 20 more damage. Then, remove all Special Conditions from the Defending Pokémon.",
				'fr-fr': "Si le Pokémon Défenseur est affecté par n'importe lequel des États Spéciaux, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires. Ensuite, retirez au Pokémon Défenseur tous ses États Spéciaux.",
				'de-de': "Wenn das Verteidigende Pokémon von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu. Danach entferne alle Speziellen Zustände vom Verteidigenden Pokémon."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278574,
				tcgplayer: 85575
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278574,
				tcgplayer: 85575
			}
		},
	],

}

export default card
