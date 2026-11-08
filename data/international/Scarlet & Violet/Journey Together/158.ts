import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Super Potion",
		'fr-fr': "Super Potion",
		'es-es': "Superpoción",
		'de-de': "Supertrank",
		'it-it': "Superpozione",
		'pt-br': "Superpoção",
		'es-mx': "Superpoción"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Heal 60 damage from 1 of your Pokémon. If you healed any damage in this way, discard an Energy from that Pokémon.",
		'fr-fr': "Soignez 60 dégâts de l'un de vos Pokémon. Si vous avez soigné des dégâts de cette façon, défaussez une Énergie de ce Pokémon.",
		'es-es': "Cura 60 puntos de daño a uno de tus Pokémon. Si has curado algún punto de daño de esta manera, descarta 1 Energía de ese Pokémon.",
		'de-de': "Heile 60 Schadenspunkte bei 1 deiner Pokémon. Wenn du auf diese Weise Schaden geheilt hast, lege 1 Energie von jenem Pokémon auf deinen Ablagestapel.",
		'it-it': "Cura uno dei tuoi Pokémon da 60 danni. Se hai curato dei danni in questo modo, scarta un'Energia da quel Pokémon.",
		'pt-br': "Cure 60 pontos de dano de 1 dos seus Pokémon. Se você curou qualquer dano desta forma, descarte uma Energia daquele Pokémon.",
		'es-mx': "Cura 60 puntos de daño a 1 de tus Pokémon. Si curaste algún punto de daño de esta manera, descarta 1 Energía de ese Pokémon."
	},

	trainerType: "Item",
	regulationMark: "I",
	illustrator: "Studio Bora Inc.",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817310,
				tcgplayer: 623585
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817310,
				tcgplayer: 623585
			}
		},
	],
}

export default card
