import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wally's Compassion",
		'fr-fr': "Compassion de Timmy",
		'de-de': "Heikos Mitgefühl",
		'it-it': "Compassione di Lino",
		'es-es': "Compasión de Blasco",
		'pt-br': "Compaixão do Wally",
		'es-mx': "Compasión de Wally"
	},

	illustrator: "Iori Suzuki",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Heal all damage from 1 of your Mega Evolution Pokémon ex. If you healed any damage in this way, put all Energy attached to that Pokémon into your hand.",
		'fr-fr': "Soignez tous les dégâts de l'un de vos Pokémon-ex Méga-Évolution. Si vous avez soigné des dégâts de cette façon, ajoutez à votre main toutes les Énergies attachées à ce Pokémon-là.",
		'de-de': "Heile allen Schaden bei 1 deiner Mega-Entwicklungs-Pokémon-ex. Wenn du auf diese Weise Schaden geheilt hast, nimm alle an jenes Pokémon angelegten Energien auf deine Hand.",
		'it-it': "Cura uno dei tuoi Pokémon-ex Megaevoluzione da tutti i danni. Se hai curato dei danni in questo modo, prendi le Energie assegnate a quel Pokémon e aggiungile alle carte che hai in mano.",
		'es-es': "Cura todos los puntos de daño a uno de tus Pokémon ex Megaevolución. Si has curado algún punto de daño de esta manera, pon todas las Energías unidas a ese Pokémon en tu mano.",
		'pt-br': "Cure todo o dano de 1 dos seus Pokémon ex de Megaevolução. Se você curou qualquer dano desta forma, coloque todas as Energias ligadas àquele Pokémon na sua mão.",
		'es-mx': "Cura todos los puntos de daño a 1 de tus Pokémon ex Megaevolución. Si curaste algún punto de daño de esta manera, pon todas las Energías unidas a ese Pokémon en tu mano."
	},

	trainerType: "Supporter",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851203,
				tcgplayer: 654471
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851203,
				tcgplayer: 654471
			}
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			foil: "cosmos"
		},
		{ 
			type: "holo",
			stamp: ["ultra-ball-league"],
			foil: "cosmos"
		}
	],
}

export default card
