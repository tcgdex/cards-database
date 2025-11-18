import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [470],
	set: Set,

	name: {
		en: "Leafeon",
		pt: "Leafeon",
		fr: "Phyllali",
		de: "Folipurba",
		es: "Leafeon",
		it: "Leafeon"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		en: "Eevee"
	},
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],

			name: {
				en: "Leaflet Blessings",
				pt: "Bênçãos das Folhinhas",
				fr: "Bénédictions Folioles",
				de: "Blättchensegen",
				es: "Bendiciones de los Folíolos",
				it: "Preghiera di Foglioline"
			},

			effect: {
				en: "Attach a Basic {G} Energy card from your hand to 1 of your Benched Pokémon. If you do, heal all damage from that Pokémon.",
				pt: "Ligue uma carta de Energia {G} Básica da sua mão a 1 dos seus Pokémon no Banco. Se fizer isto, cure todo o dano daquele Pokémon.",
				fr: "Attachez une carte Énergie {G} de base de votre main à l'un de vos Pokémon de Banc. Dans ce cas, soignez tous les dégâts de ce Pokémon-là.",
				de: "Lege 1 Basis-{G}-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank an. Wenn du das machst, heile allen Schaden bei jenem Pokémon.",
				es: "Une 1 carta de Energía {G} Básica de tu mano a uno de tus Pokémon en Banca. Si lo haces, cura todos los puntos de daño a ese Pokémon.",
				it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base {G} dalla tua mano. Se lo fai, cura quel Pokémon da tutti i danni."
			},
		},
		{
			cost: ["Grass", "Colorless"],

			name: {
				en: "Solar Beam",
				pt: "Raio Solar",
				fr: "Lance-Soleil",
				de: "Solarstrahl",
				es: "Rayo Solar",
				it: "Solarraggio"
			},

			damage: 70
		},
	],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Iori Suzuki"
}

export default card