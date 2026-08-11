import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Aether Foundation Employee",
		'fr-fr': "Employés de la Fondation Æther",
		'es-es': "Empleados Fundación Æther",
		'it-it': "Dipendente della Fondazione Æther",
		'pt-br': "Funcionários da Aether",
		'de-de': "Angestellte der Æther Foundation"
	},

	illustrator: "take",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Ajoutez 3 Pokémon avec « d’Alola » dans leur nom, de votre pile de défausse à votre main.",
		'en-us': "Put 3 Pokémon that have \"Alolan\" in their names from your discard pile into your hand.",
		'es-es': "Pon 3 Pokémon que tengan \"de Alola\" en su nombre de tu pila de descartes en tu mano.",
		'it-it': "Prendi tre Pokémon con “di Alola” nel nome dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
		'pt-br': "Coloque 3 Pokémon da sua pilha de descarte na sua mão que tenham “de Alola” no seu nome.",
		'de-de': "Nimm 3 Pokémon, bei denen Alola zum Namen gehört, aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 365804,
		tcgplayer: 178991
	}
}

export default card
