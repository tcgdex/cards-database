import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [404],
	set: Set,

	name: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
		'es-es': "Shinx",
		'it-it': "Shinx",
		'pt-br': "Shinx",
		'de-de': "Sheinux"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Big Bite",
			'fr-fr': "Grosse Morsure",
			'es-es': "Gran Mordisco",
			'it-it': "Grande Morso",
			'pt-br': "Mordidona",
			'de-de': "Mächtiger Biss"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "By gathering their tails together, they collectively generate powerful electricity from their claws.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769241,
				tcgplayer: 550111
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769241,
				tcgplayer: 550111
			}
		},
	],

	illustrator: "Takumi Wada",

}

export default card