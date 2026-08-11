import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [345],
	set: Set,

	name: {
		'en-us': "Lileep",
		'fr-fr': "Lilia",
		'es-es': "Lileep",
		'it-it': "Lileep",
		'pt-br': "Lileep",
		'de-de': "Liliep"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Antique Root Fossil",
		'fr-fr': "Fossile Racine Ancien",
		'es-es': "Fósil Raíz Antiguo",
		'it-it': "Vecchio Radifossile",
		'pt-br': "Fóssil Raiz Arcaico",
		'de-de': "Antikes Wurzelfossil"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Bind Down",
			'fr-fr': "Astreinte",
			'es-es': "Amarrar",
			'it-it': "Legafermo",
			'pt-br': "Aprisionamento",
			'de-de': "Anbinden"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 785999,
				tcgplayer: 567421
			}
		},
	],

	illustrator: "Mori Yuu",

}

export default card
