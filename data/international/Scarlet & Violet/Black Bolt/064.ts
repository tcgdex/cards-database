import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [624],
	set: Set,

	name: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
		'de-de': "Gladiantri",
		'it-it': "Pawniard",
		'pt-br': "Pawniard",
		'es-es': "Pawniard",
		'es-mx': "Pawniard"
	},

	illustrator: "Oku",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Corner",
			'fr-fr': "Coinçage",
			'de-de': "Bedrängen",
			'it-it': "Trappola",
			'pt-br': "Quina",
			'es-es': "Arrinconar",
			'es-mx': "Arrinconar"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836041,
				tcgplayer: 642515
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836041,
				tcgplayer: 642515
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836442,
				tcgplayer: 642757
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836440,
				tcgplayer: 642684
			}
		}
	]
}

export default card
