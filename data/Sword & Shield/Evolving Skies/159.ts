import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Snow Leaf Badge",
		fr: "Badge Feuille Neige",
		es: "Medalla Hoja Nieve",
		it: "Medaglia Nevefoglia",
		pt: "Insígnia de Folha Nevada",
		de: "Schneeblattorden"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "If the Pokémon V this card is attached to has \"Leafeon\" or \"Glaceon\" in its name, it has no Retreat Cost and no Weakness.",
		fr: "Si le Pokémon-V auquel cette carte est attachée a \" Phyllali \" ou \" Givrali \" dans son nom, il n'a pas de Coût de Retraite ni de Faiblesse.",
		es: "Si el Pokémon V al que está unida esta carta tiene \"Leafeon\" o \"Glaceon\" en su nombre, no tiene ningún Coste de Retirada ni Debilidad.",
		it: "Se il Pokémon-V a cui è assegnata questa carta ha \"Leafeon\" o \"Glaceon\" nel nome, non ha costo di ritirata né debolezza.",
		pt: "Se o Pokémon V ao qual esta carta está ligada tiver \"Leafeon\" ou \"Glaceon\" em seu nome, não terá custo de Recuo e não terá Fraqueza.",
		de: "Wenn bei dem Pokémon-V, an das diese Karte angelegt ist, \"Folipurba\" oder \"Glaziola\" zum Namen gehört, hat es keine Rückzugskosten und keine Schwäche."
	},

	trainerType: "Tool",
	illustrator: "Studio Bora Inc.",
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574217
	}
}

export default card
