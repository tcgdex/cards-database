import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "Jumbo Ice Cream",
		'fr-fr': "Glace Géante",
		'es-es': "Helado Colosal",
		'es-mx': "Helado Colosal",
		'de-de': "Rieseneis",
		'it-it': "Gelato Gigante",
		'pt-br': "Sorvetão Jumbo"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "I",

	effect: {
		'en-us': "Heal 80 damage from your Active Pokémon that has 3 or more Energy attached.",
		'fr-fr': "Soignez 80 dégâts de votre Pokémon Actif ayant 3 Énergies attachées ou plus.",
		'es-es': "Cura 80 puntos de daño a tu Pokémon Activo si tiene 3 Energías o más unidas.",
		'es-mx': "Cura 80 puntos de daño a tu Pokémon Activo que tenga 3 Energías o más unidas.",
		'de-de': "Heile 80 Schadenspunkte bei deinem Aktiven Pokémon, an das 3 oder mehr Energien angelegt sind.",
		'it-it': "Cura il tuo Pokémon attivo che ha tre o più Energie assegnate da 80 danni.",
		'pt-br': "Cure 80 pontos de dano do seu Pokémon Ativo que tiver 3 ou mais Energias ligadas a ele."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886503,
				tcgplayer: 693501
			}
		},
	],
}

export default card
