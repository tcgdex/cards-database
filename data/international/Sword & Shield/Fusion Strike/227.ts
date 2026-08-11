import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chili & Cilan & Cress",
		'fr-fr': "Armando, Rachid et Noa",
		'es-es': "Zeo, Millo y Maíz",
		'it-it': "Chicco, Spighetto e Maisello",
		'pt-br': "Chili, Cilan e Cress",
		'de-de': "Maik & Benny & Colin"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for up to 3 Fusion Strike Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon Poing de Fusion, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja hasta 3 Pokémon Golpe Fusión, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a tre Pokémon Colpo Fusione, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 3 Pokémon Golpe Fusão no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 3 Fusionsangriff-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "E",
	illustrator: "Yusuke Ohmura",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582963,
				tcgplayer: 253097
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582963,
				tcgplayer: 253097
			}
		},
	],
}

export default card
