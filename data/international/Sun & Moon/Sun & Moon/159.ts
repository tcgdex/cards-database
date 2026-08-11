import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Rotom Dex",
		'fr-fr': "Motisma-Dex",
		'es-es': "RotomDex",
		'it-it': "Pokédex Rotom",
		'pt-br': "Pokédex Rotom",
		'de-de': "Rotom-Pokédex"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Après avoir compté vos cartes Récompense, mélangez-les avec votre deck. Prenez alors le même nombre de cartes du dessus de votre deck et placez-les faces cachées comme cartes Récompense.",
		'en-us': "After counting your Prize cards, shuffle them into your deck. Then, take that many cards from the top of your deck and put them face down as your Prize cards.",
		'es-es': "Después de contar tus cartas de Premio, ponlas en tu baraja y barájalas todas. Después, coge la misma cantidad de cartas de la parte superior de tu baraja y ponlas boca abajo como tus cartas de Premio.",
		'it-it': "Dopo aver contato le tue carte Premio, rimischiale nel tuo mazzo. Poi prendi la stessa quantità di carte dalle carte in cima al tuo mazzo e mettile a faccia in giù come carte Premio.",
		'pt-br': "Após contar as suas cartas de Prêmio, embaralhe-as no seu baralho. Em seguida, pegue aquele mesmo número de cartas de cima do seu baralho e coloque-as viradas para baixo como as suas cartas de Prêmio.",
		'de-de': "Mische deine Preiskarten in dein Deck, nachdem du sie gezählt hast. Nimm anschließend dieselbe Anzahl Karten von deinem Deck und lege sie als deine verdeckten Preiskarten ab."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 295472,
		tcgplayer: 127198
	}
}

export default card
