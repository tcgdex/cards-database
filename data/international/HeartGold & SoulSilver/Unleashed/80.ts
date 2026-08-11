import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "PlusPower",
		'fr-fr': "PlusPower",
		'de-de': "PlusPower"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Attachez PlusPower à l’un de vos Pokémon. Une fois votre tour terminé, défaussez cette carte. Si la carte PlusPower est attachée à un Pokémon effectuant une attaque, cette dernière inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		'en-us': "Attach PlusPower to 1 of your Pokémon. Discard this card at the end of your turn. If the Pokémon PlusPower is attached to attacks, the attack does 10 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
		'de-de': "Während dieses Zuges fügen alle Angriffe deines Pokémon den Aktiven Pokémon 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden.)"
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88179,
				cardmarket: 279236
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88179,
				cardmarket: 279236
			}
		},
		{
			type: "normal",
			stamp: ["yuka-furusawa"],
			thirdParty: {
				cardmarket: 868809,
				tcgplayer: 480092
			}
		}
	],

}

export default card
