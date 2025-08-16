import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [470],
	set: Set,

	name: {
		en: "Leafeon",
		fr: "Phyllali",
		es: "Leafeon",
		pt: "Leafeon",
		it: "Leafeon",
		de: "Folipurba"
	},

	rarity: "Rare",
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
			pt: "Bênçãos das Folhinhas",
			it: "Preghiera di Foglioline",
			de: "Blättchensegen"
		},

		effect: {
			en: "Attach a Basic {G} Energy card from your hand to 1 of your Benched Pokémon. If you do, heal all damage from that Pokémon.",
			fr: "Attachez une carte Énergie {G} de base de votre main à l'un de vos Pokémon de Banc. Dans ce cas, soignez tous les dégâts de ce Pokémon-là.",
			es: "Une 1 carta de Energía {G} Básica de tu mano a uno de tus Pokémon en Banca. Si lo haces, cura todos los puntos de daño a ese Pokémon.",
			pt: "Ligue uma carta de Energia {G} Básica da sua mão a 1 dos seus Pokémon no Banco. Se fizer isto, cure todo o dano daquele Pokémon.",
			it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base {G} dalla tua mano. Se lo fai, cura quel Pokémon da tutti i danni.",
			de: "Lege 1 Basis-{G}-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank an. Wenn du das machst, heile allen Schaden bei jenem Pokémon."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			es: "Rayo Solar",
			pt: "Raio Solar",
			it: "Solarraggio",
			de: "Solarstrahl"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "Kuroimori"
}

export default card