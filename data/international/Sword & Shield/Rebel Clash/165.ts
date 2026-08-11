import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Scoop Up Net",
		'fr-fr': "Épuisette de Rappel",
		'es-es': "Red Levante",
		'it-it': "Retino di Recupero",
		'pt-br': "Rede de Recolhida",
		'de-de': "Anziehungsnetz"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Put 1 of your Pokémon that isn't a Pokémon V or a Pokémon-GX into your hand. (Discard all attached cards.)",
		'fr-fr': "Ajoutez à votre main l'un de vos Pokémon qui n'est ni un Pokémon-V ni un Pokémon-GX. (Défaussez toutes les cartes attachées.)",
		'es-es': "Pon 1 de tus Pokémon que no sea un Pokémon V o un Pokémon-GX en tu mano. (Descarta todas las cartas unidas a él).",
		'it-it': "Prendi uno dei tuoi Pokémon che non è Pokémon-V o un Pokémon-GX e aggiungilo alle carte che hai in mano. Scarta tutte le carte assegnate.",
		'pt-br': "Coloque 1 dos seus Pokémon que não seja um Pokémon V ou um Pokémon-GX na sua mão (descarte todas as cartas ligadas a ele).",
		'de-de': "Nimm 1 deiner Pokémon, das kein Pokémon-V oder Pokémon-GX ist, auf deine Hand. (Lege alle angelegten Karten auf deinen Ablagestapel.)"
	},

	trainerType: "Item",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 456533,
				tcgplayer: 213272
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 456533,
				tcgplayer: 213272
			}
		},
	],
}

export default card
