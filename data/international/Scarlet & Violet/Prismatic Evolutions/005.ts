import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [470],
	set: Set,

	name: {
		'en-us': "Leafeon",
		'fr-fr': "Phyllali",
		'es-es': "Leafeon",
		'pt-br': "Leafeon",
		'it-it': "Leafeon",
		'de-de': "Folipurba"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Leaflet Blessings",
			'fr-fr': "Bénédictions Folioles",
			'es-es': "Bendiciones de los Folíolos",
			'pt-br': "Bênçãos das Folhinhas",
			'it-it': "Preghiera di Foglioline",
			'de-de': "Blättchensegen"
		},

		effect: {
			'en-us': "Attach a Basic {G} Energy card from your hand to 1 of your Benched Pokémon. If you do, heal all damage from that Pokémon.",
			'fr-fr': "Attachez une carte Énergie {G} de base de votre main à l'un de vos Pokémon de Banc. Dans ce cas, soignez tous les dégâts de ce Pokémon-là.",
			'es-es': "Une 1 carta de Energía {G} Básica de tu mano a uno de tus Pokémon en Banca. Si lo haces, cura todos los puntos de daño a ese Pokémon.",
			'pt-br': "Ligue uma carta de Energia {G} Básica da sua mão a 1 dos seus Pokémon no Banco. Se fizer isto, cure todo o dano daquele Pokémon.",
			'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base {G} dalla tua mano. Se lo fai, cura quel Pokémon da tutti i danni.",
			'de-de': "Lege 1 Basis-{G}-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank an. Wenn du das machst, heile allen Schaden bei jenem Pokémon."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Solar Beam",
			'fr-fr': "Lance-Soleil",
			'es-es': "Rayo Solar",
			'pt-br': "Raio Solar",
			'it-it': "Solarraggio",
			'de-de': "Solarstrahl"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	illustrator: "Kuroimori",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805394,
				tcgplayer: 610360
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805394,
				tcgplayer: 610360
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806416,
				tcgplayer: 610540
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806417,
				tcgplayer: 610641
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 858728,
			}
		},
	],
}

export default card
