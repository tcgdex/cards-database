import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [613],
	set: Set,

	name: {
		'en-us': "Cubchoo",
		'fr-fr': "Polarhume",
		'de-de': "Petznief",
		'it-it': "Cubchoo",
		'pt-br': "Cubchoo",
		'es-es': "Cubchoo",
		'es-mx': "Cubchoo"
	},

	illustrator: "OOYAMA",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Snotted Up",
			'fr-fr': "Nez Pris",
			'de-de': "Rotznäsig",
			'it-it': "Ricoperto di Muco",
			'pt-br': "Melequento",
			'es-es': "Moco Loco",
			'es-mx': "Moco Flojo"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't use attacks.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas utiliser d'attaques.",
			'de-de': "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon keine Attacken einsetzen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può usare attacchi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá usar ataques.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede usar ataques.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede usar ataques."
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835949,
				tcgplayer: 642477
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835949,
				tcgplayer: 642477
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836318,
				tcgplayer: 642722
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836317,
				tcgplayer: 642650
			}
		}
	],
}

export default card
