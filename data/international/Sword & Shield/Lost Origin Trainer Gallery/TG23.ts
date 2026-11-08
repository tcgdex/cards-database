import { Card } from "models/database/card"
import Set from "../Lost Origin Trainer Gallery"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Adventurer's Discovery",
		'fr-fr': "Découverte de l'Aventurière",
		'es-es': "Descubrimiento de Aventurera",
		'it-it': "Scoperta dell'Avventuriera",
		'pt-br': "Descoberta da Aventureira",
		'de-de': "Entdeckung der Abenteurerin"
	},

	illustrator: "Taira Akitsu",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for up to 3 Pokémon V, reveal them, and put them into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon-V, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja hasta 3 Pokémon V, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a tre Pokémon-V, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 3 Pokémon V no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 3 Pokémon-V, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674240,
				tcgplayer: 284296
			}
		},
	],
}

export default card
