import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua Technical Machine 01",
		fr: "Machine Technique 01 de Team Aqua",
		de: "Team Aqua Technical Machine 01"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Attach this card to 1 of your Pokémon that has Team Aqua in its name. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Team Aqua Technical Machine 01.",
		fr: "Attachez cette carte à 1 de vos Pokémon dont le nom comporte Team Aqua. Ce Pokémon peut utiliser l'attaque de cette carte à la place de ses attaques. À la fin du tour, défaussez Machine Technique 01 de Team Aqua.",
		de: "Lege diese Karte an eins deiner Pokémon mit „Team Aqua“ im Namen an. Dieses Pokémon kann diesen Angriff anstelle der eigenen benutzen. Lege Team Aqua Technische Maschine 01 am Ende deines Zuges auf deinen Ablagestapel."
	},

	attacks: [
		{
			name: {
				en: "Miracle",
				de: "Blaues Wunder",
				fr: "Miracle"
			},
			damage: 10,
			effect: {
				en: "Choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
				de: "Wähle 1 Speziellen Zustand. Das Verteidigende Pokémon ist jetzt von dem Speziellen Zustand betroffen.",
				fr: "Choisissez un État Spécial. Le Pokémon Défenseur est maintenant affecté par cet État Spécial."
			},
			cost: [
				"Colorless",
			]
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275856,
				tcgplayer: 89773
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275856,
				tcgplayer: 89773
			}
		},
	],

	retreat: 0
}

export default card
