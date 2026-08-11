import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Snow Leaf Badge",
		'fr-fr': "Badge Feuille Neige",
		'es-es': "Medalla Hoja Nieve",
		'it-it': "Medaglia Nevefoglia",
		'pt-br': "Insígnia de Folha Nevada",
		'de-de': "Schneeblattorden"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "If the Pokémon V this card is attached to has \"Leafeon\" or \"Glaceon\" in its name, it has no Retreat Cost and no Weakness.",
		'fr-fr': "Si le Pokémon-V auquel cette carte est attachée a \" Phyllali \" ou \" Givrali \" dans son nom, il n'a pas de Coût de Retraite ni de Faiblesse.",
		'es-es': "Si el Pokémon V al que está unida esta carta tiene \"Leafeon\" o \"Glaceon\" en su nombre, no tiene ningún Coste de Retirada ni Debilidad.",
		'it-it': "Se il Pokémon-V a cui è assegnata questa carta ha \"Leafeon\" o \"Glaceon\" nel nome, non ha costo di ritirata né debolezza.",
		'pt-br': "Se o Pokémon V ao qual esta carta está ligada tiver \"Leafeon\" ou \"Glaceon\" em seu nome, não terá custo de Recuo e não terá Fraqueza.",
		'de-de': "Wenn bei dem Pokémon-V, an das diese Karte angelegt ist, \"Folipurba\" oder \"Glaziola\" zum Namen gehört, hat es keine Rückzugskosten und keine Schwäche."
	},

	trainerType: "Tool",
	illustrator: "Studio Bora Inc.",
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574217,
				tcgplayer: 246783
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574217,
				tcgplayer: 246783
			}
		},
	],
}

export default card
