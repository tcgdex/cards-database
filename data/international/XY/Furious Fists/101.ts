import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Tool Retriever",
		'fr-fr': "Collecte d'Outils",
		'es-es': "Rescataherramientas",
		'it-it': "Recupera Oggetti",
		'pt-br': "Recuperador de Ferramentas",
		'de-de': "Ausrüstungsgreifer"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Choisissez jusqu'à 2 cartes Outil Pokémon attachées à vos Pokémon et placez-les dans votre main.",
		'en-us': "Choose up to 2 Pokémon Tool cards attached to your Pokémon and put them into your hand.",
		'es-es': "Elige hasta 2 cartas de Herramienta Pokémon unidas a tus Pokémon y ponlas en tu mano.",
		'it-it': "Scegli fino a due carte Oggetto Pokémon assegnate ai tuoi Pokémon e aggiungile a quelle che hai in mano.",
		'pt-br': "Escolha até 2 cards de Ferramenta Pokémon ligados a seus Pokémon e coloque-os na sua mão.",
		'de-de': "Wähle bis zu 2 Pokémon-Ausrüstungen, die an deine Pokémon angelegt sind, und nimm sie auf deine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281765,
		tcgplayer: 92284
	}
}

export default card
