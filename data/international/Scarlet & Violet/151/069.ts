import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [69],
	set: Set,

	name: {
		'fr-fr': "Chétiflor",
		'en-us': "Bellsprout",
		'es-es': "Bellsprout",
		'it-it': "Bellsprout",
		'pt-br': "Bellsprout",
		'de-de': "Knofensa"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Coupe",
			'en-us': "Cut",
			'es-es': "Corte",
			'it-it': "Taglio",
			'pt-br': "Cortar",
			'de-de': "Zerschneider"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Astreinte",
			'en-us': "Bind Down",
			'es-es': "Amarrar",
			'it-it': "Legafermo",
			'pt-br': "Aprisionamento",
			'de-de': "Anbinden"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Its bud looks like a human face. Because of the bud, it is rumored to be a type of legendary mandrake plant.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733664,
				tcgplayer: 516560,
				cardtrader: 261063
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733664,
				tcgplayer: 516560,
				cardtrader: 261063
			}
		},
	],

	illustrator: "Jerky",

	
}

export default card
