import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Rotom Dex—Poké Finder Mode",
		'fr-fr': "Motisma-Dex – Mode Poké Scope",
		'es-es': "RotomDex Modo Pokévisor",
		'it-it': "Pokédex Rotom - Modalità Pokévisore",
		'pt-br': "Pokédex Rotom - Modo Pokévisor",
		'de-de': "Rotom-Pokédex: Pokémon-Sucher-Modus"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Regardez les 4 cartes du dessus de votre deck et replacez-les dans l’ordre de votre choix ou mélangez-les dans votre deck.",
		'en-us': "Look at the top 4 cards of your deck and put them back in any order or shuffle them into your deck.",
		'es-es': "Mira las 4 primeras cartas de tu baraja y vuelve a ponerlas en la parte superior de tu baraja en el orden que quieras o ponlas en tu baraja y barájalas todas.",
		'it-it': "Guarda le prime quattro carte del tuo mazzo e rimettile a posto nell’ordine che preferisci oppure rimischiale nel tuo mazzo.",
		'pt-br': "Olhe as 4 primeiras cartas do seu baralho e coloque-as de volta em qualquer ordem ou embaralhe-as no seu baralho.",
		'de-de': "Schau dir die obersten 4 Karten deines Decks an und lege sie in beliebiger Reihenfolge zurück auf dein Deck oder mische sie in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		tcgplayer: 138626
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
