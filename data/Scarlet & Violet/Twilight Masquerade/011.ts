import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [470],
	set: Set,

	name: {
		en: "Leafeon",
		fr: "Phyllali",
		es: "Leafeon",
		it: "Leafeon",
		pt: "Leafeon",
		de: "Folipurba"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Leaflet Blessings",
			fr: "Bénédictions Folioles",
			es: "Bendiciones de los Folíolos",
			it: "Preghiera di Foglioline",
			pt: "Bênçãos das Folhinhas",
			de: "Blättchensegen"
		},

		effect: {
			en: "Attach a Basic Grass Energy card from your hand to 1 of your Benched Pokémon. If you do, heal all damage from that Pokémon.",
			fr: "Attachez une carte Énergie Grass de base de votre main à l'un de vos Pokémon de Banc. Dans ce cas, soignez tous les dégâts de ce Pokémon-là.",
			es: "Une 1 carta de Energía Grass Básica de tu mano a uno de tus Pokémon en Banca. Si lo haces, cura todos los puntos de daño a ese Pokémon.",
			it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base Grass dalla tua mano. Se lo fai, cura quel Pokémon da tutti i danni.",
			pt: "Ligue uma carta de Energia Grass Básica da sua mão a 1 dos seus Pokémon no Banco. Se fizer isto, cure todo o dano daquele Pokémon.",
			de: "Lege 1 Basis-Grass-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank an. Wenn du das machst, heile allen Schaden bei jenem Pokémon."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			es: "Rayo Solar",
			it: "Solarraggio",
			pt: "Raio Solar",
			de: "Solarstrahl"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card