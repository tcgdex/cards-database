import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Wally's Compassion",
		fr: "Compassion de Timmy",
		de: "Heikos Mitgefühl",
		it: "Compassione di Lino",
		es: "Compasión de Blasco",
		pt: "Compaixão do Wally",
		'es-mx': "Compasión de Wally"
	},

	illustrator: "Iori Suzuki",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Heal all damage from 1 of your Mega Evolution Pokémon ex. If you healed any damage in this way, put all Energy attached to that Pokémon into your hand.",
		fr: "Soignez tous les dégâts de l'un de vos Pokémon-ex Méga-Évolution. Si vous avez soigné des dégâts de cette façon, ajoutez à votre main toutes les Énergies attachées à ce Pokémon-là.",
		de: "Heile allen Schaden bei 1 deiner Mega-Entwicklungs-Pokémon-ex. Wenn du auf diese Weise Schaden geheilt hast, nimm alle an jenes Pokémon angelegten Energien auf deine Hand.",
		it: "Cura uno dei tuoi Pokémon-ex Megaevoluzione da tutti i danni. Se hai curato dei danni in questo modo, prendi le Energie assegnate a quel Pokémon e aggiungile alle carte che hai in mano.",
		es: "Cura todos los puntos de daño a uno de tus Pokémon ex Megaevolución. Si has curado algún punto de daño de esta manera, pon todas las Energías unidas a ese Pokémon en tu mano.",
		pt: "Cure todo o dano de 1 dos seus Pokémon ex de Megaevolução. Se você curou qualquer dano desta forma, coloque todas as Energias ligadas àquele Pokémon na sua mão.",
		'es-mx': "Cura todos los puntos de daño a 1 de tus Pokémon ex Megaevolución. Si curaste algún punto de daño de esta manera, pon todas las Energías unidas a ese Pokémon en tu mano."
	},

	trainerType: "Supporter",
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
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

	thirdParty: {
		tcgplayer: 654471,
		cardmarket: 851203
	}
}

export default card