import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [559],
	set: Set,

	name: {
		en: "Scraggy",
		fr: "Baggiguane",
		de: "Zurrokex",
		it: "Scraggy",
		pt: "Scraggy",
		es: "Scraggy",
		'es-mx': "Scraggy"
	},

	illustrator: "Nelnal",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			de: "Kopfnuss",
			it: "Bottintesta",
			pt: "Cabeçada",
			es: "Golpe Cabeza",
			'es-mx': "Golpe Cabeza"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Invade",
			fr: "Envahissement",
			de: "Einmarschieren",
			it: "Scorreria",
			pt: "Invadir",
			es: "Invadir",
			'es-mx': "Invadir"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 836161,
			tcgplayer: 642251
		}
	},
],
}

export default card