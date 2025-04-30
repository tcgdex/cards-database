import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Super Potion",
		fr: "Super Potion",
		es: "Superpoción",
		de: "Supertrank",
		it: "Superpozione",
		pt: "Superpoção",
		'es-mx': "Superpoción"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Heal 60 damage from 1 of your Pokémon. If you healed any damage in this way, discard an Energy from that Pokémon.",
		fr: "Soignez 60 dégâts de l'un de vos Pokémon. Si vous avez soigné des dégâts de cette façon, défaussez une Énergie de ce Pokémon.",
		es: "Cura 60 puntos de daño a uno de tus Pokémon. Si has curado algún punto de daño de esta manera, descarta 1 Energía de ese Pokémon.",
		de: "Heile 60 Schadenspunkte bei 1 deiner Pokémon. Wenn du auf diese Weise Schaden geheilt hast, lege 1 Energie von jenem Pokémon auf deinen Ablagestapel.",
		it: "Cura uno dei tuoi Pokémon da 60 danni. Se hai curato dei danni in questo modo, scarta un'Energia da quel Pokémon.",
		pt: "Cure 60 pontos de dano de 1 dos seus Pokémon. Se você curou qualquer dano desta forma, descarte uma Energia daquele Pokémon.",
		'es-mx': "Cura 60 puntos de daño a 1 de tus Pokémon. Si curaste algún punto de daño de esta manera, descarta 1 Energía de ese Pokémon."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
