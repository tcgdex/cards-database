import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Beldum",
		fr: "Terhal",
		es: "Beldum",
		'es-mx': "Beldum",
		de: "Tanhel",
		it: "Beldum",
		pt: "Beldum"
	},

	illustrator: "toi8",
	rarity: "Common",
	category: "Pokemon",
	dexId: [374],
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			'es-mx': "Golpe Cabeza",
			de: "Kopfnuss",
			it: "Bottintesta",
			pt: "Cabeçada"
		},

		cost: ["Metal"],
		damage: 10
	}, {
		name: {
			en: "Beam",
			fr: "Rayon",
			es: "Transmisión",
			'es-mx': "Rayo",
			de: "Strahl",
			it: "Raggio",
			pt: "Feixe"
		},

		cost: ["Metal", "Colorless"],
		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693455,
		cardmarket: 886451
	}
}

export default card