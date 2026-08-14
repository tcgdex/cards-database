import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua Belt",
		fr: "Raclée de Team Aqua",
		de: "Team Aqua Gürtel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		en: "Attach Team Aqua Belt to 1 of your Pokémon with Team Aqua in its name that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. At any time between turns, if the Pokémon Team Aqua Belt is attached to is your Active Pokémon, search your deck for a card that evolves from that Pokémon and put it on that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward, then discard Team Aqua Belt.",
		fr: "Attachez Raclée de Team Magma à 1 de vos Pokémon dont le nom comporte Team Aqua et qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O., défaussez cette carte.\n\nN'importe quand entre deux tours, si le Pokémon auquel Raclée de Team Aqua est attaché est votre Pokémon Actif, cherchez dans votre deck une carte qui évolue de ce Pokémon et placez-la dessus. (Vous faites ainsi évoluer ce Pokémon). Ensuite, mélangez votre deck et défaussez Raclée de Team Aqua.",
		de: "Lege Team Aqua Gürtel an 1 deiner Pokémon mit „Team Aqua“ im Namen an, das keine Pokémon-Ausrüstung hat. Wenn das Pokémon kampfunfähig gemacht wird, lege Team Aqua Gürtel auf den Ablagestapel. Wenn Team Aqua Gürtel an deinem Aktiven Pokémon angelegt ist, kannst du zu einem beliebigen Zeitpunkt zwischen zwei Zügen dein Deck nach einem Pokémon durchsuchen, das sich aus diesem Aktiven Pokémon entwickelt und es darauf legen (das zählt als Entwickeln des Pokémon). Mische dein Deck danach und lege Team Aqua Gürtel auf deinen Ablagestapel."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275853,
				tcgplayer: 89769
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275853,
				tcgplayer: 89769
			}
		},
	],

	retreat: 0
}

export default card
