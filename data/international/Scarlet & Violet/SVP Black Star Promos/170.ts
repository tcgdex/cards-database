import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [470],
	set: Set,

	name: {
		'en-us': "Leafeon",
		'pt-br': "Leafeon",
		'fr-fr': "Phyllali",
		'de-de': "Folipurba",
		'es-es': "Leafeon",
		'it-it': "Leafeon"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],

			name: {
				'en-us': "Leaflet Blessings",
				'pt-br': "Bênçãos das Folhinhas",
				'fr-fr': "Bénédictions Folioles",
				'de-de': "Blättchensegen",
				'es-es': "Bendiciones de los Folíolos",
				'it-it': "Preghiera di Foglioline"
			},

			effect: {
				'en-us': "Attach a Basic {G} Energy card from your hand to 1 of your Benched Pokémon. If you do, heal all damage from that Pokémon.",
				'pt-br': "Ligue uma carta de Energia {G} Básica da sua mão a 1 dos seus Pokémon no Banco. Se fizer isto, cure todo o dano daquele Pokémon.",
				'fr-fr': "Attachez une carte Énergie {G} de base de votre main à l'un de vos Pokémon de Banc. Dans ce cas, soignez tous les dégâts de ce Pokémon-là.",
				'de-de': "Lege 1 Basis-{G}-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank an. Wenn du das machst, heile allen Schaden bei jenem Pokémon.",
				'es-es': "Une 1 carta de Energía {G} Básica de tu mano a uno de tus Pokémon en Banca. Si lo haces, cura todos los puntos de daño a ese Pokémon.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base {G} dalla tua mano. Se lo fai, cura quel Pokémon da tutti i danni."
			}},
		{
			cost: ["Grass", "Colorless"],

			name: {
				'en-us': "Solar Beam",
				'pt-br': "Raio Solar",
				'fr-fr': "Lance-Soleil",
				'de-de': "Solarstrahl",
				'es-es': "Rayo Solar",
				'it-it': "Solarraggio"
			},

			damage: 70
		},
	],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Iori Suzuki",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 805367,
				tcgplayer: 611829
			},
		}
	],
}

export default card
