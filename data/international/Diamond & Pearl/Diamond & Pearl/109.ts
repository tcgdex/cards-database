import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "PlusPower",
		'fr-fr': "PlusPower",
		'de-de': "PlusPower"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Attach PlusPower to 1 of your Pokémon. Discard this card at the end of your turn. If the Pokémon PlusPower is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance).",
		'fr-fr': "Attachez PlusPower à 1 de vos Pokémon. Défaussez cette carte à la fin de votre tour. Pokémon auquel PlusPower est attachée attaque, cette attaque inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		'de-de': "Lege PlusPower an 1 deiner Pokémon an und lege die Karte am Ende deines Zuges auf deinen Ablagestapel.Falls das Pokémon, an das PlusPower angelegt ist, angreift, fügt der Angriff den Aktiven Pokémon 10 weitere Schadesnpunkte zu (bevor Schwäche und Resistenz verrechnet werden).",
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 277608,
		tcgplayer: 88176
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
