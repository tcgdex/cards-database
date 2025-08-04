import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Pyroar",
		fr: "Némélios",
		es: "Pyroar",
		it: "Pyroar",
		pt: "Pyroar",
		de: "Pyroleo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",
	illustrator: "Hitoshi Ariga",

	attacks: [{
		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			it: "Fuoco Continuo",
			pt: "Combustion",
			de: "Glühen"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Rip Claw",
			fr: "Griffe Déchirante",
			es: "Garra Arrebatadora",
			it: "Strappartiglio",
			pt: "Rip Claw",
			de: "Reißklaue"
		},

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Discard an Energy from your opponent's Active Pokémon.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 70,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		en: "Litleo",
		fr: "Hélionceau",
		es: "Litleo",
		it: "Litleo",
		pt: "Litleo",
		de: "Leufeo"
	},

	description: {
		en: "The temperature of its breath is over 10,000 degrees Fahrenheit, but Pyroar doesn't use it on its prey. This Pokémon prefers to eat raw meat."
	},

	dexId: [668],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574047,
		tcgplayer: 246841
	}
}

export default card
