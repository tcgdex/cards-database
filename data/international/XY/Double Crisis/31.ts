import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Magma's Great Ball",
		'fr-fr': "Super Ball de la Team Magma",
		'pt-br': "Grande Bola da Equipe Magma",
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez un Pokémon de base de la Team Magma et une carte Énergie {F} de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for a Basic Team Magma Pokémon and a basic {F} Energy card, reveal them, and put them into your hand. Shuffle your deck afterward.",
		'pt-br': "Procure no seu baralho um Pokémon da Equipe Magma Básico e um card de Energia {F} básica, revele-os e coloque-os em sua mão. Em seguida, embaralhe seus cards.",
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 282542,
		tcgplayer: 97077
	}
}

export default card
