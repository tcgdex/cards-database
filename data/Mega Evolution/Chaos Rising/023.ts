import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886415,
				tcgplayer: 693456
			}
		},
	],

	name: {
		en: "Bergmite",
		fr: "Grelaçon",
		es: "Bergmite",
		'es-mx': "Bergmite",
		de: "Arktip",
		it: "Bergmite",
		pt: "Bergmite"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	dexId: [712],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Chilly",
			fr: "Glacial",
			es: "Fresquito",
			'es-mx': "Frialdad",
			de: "Frösteln",
			it: "Addiaccio",
			pt: "Frio"
		},

		cost: ["Water"],
		damage: 10
	}, {
		name: {
			en: "Frost Breath",
			fr: "Souffle Glacé",
			es: "Vaho Gélido",
			'es-mx': "Vaho Helado",
			de: "Eisesodem",
			it: "Alitogelido",
			pt: "Respiração de Gelo"
		},

		cost: ["Water", "Colorless", "Colorless"],
		damage: 50
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card