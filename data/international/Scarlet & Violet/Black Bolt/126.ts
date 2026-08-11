import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [533],
	set: Set,

	name: {
		'en-us': "Gurdurr",
		'fr-fr': "Ouvrifier",
		'de-de': "Strepoli",
		'it-it': "Gurdurr",
		'pt-br': "Gurdurr",
		'es-es': "Gurdurr",
		'es-mx': "Gurdurr"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Timburr",
		'fr-fr': "Charpenti",
		'de-de': "Praktibalk",
		'it-it': "Timburr",
		'pt-br': "Timburr",
		'es-es': "Timburr",
		'es-mx': "Timburr"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Low Kick",
			'fr-fr': "Balayage",
			'de-de': "Fußkick",
			'it-it': "Colpo Basso",
			'pt-br': "Rasteira",
			'es-es': "Patada Baja",
			'es-mx': "Patada Baja"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Hammer Arm",
			'fr-fr': "Marto-Poing",
			'de-de': "Hammerarm",
			'it-it': "Martelpugno",
			'pt-br': "Braço de Martelo",
			'es-es': "Machada",
			'es-mx': "Brazo Martillo"
		},

		effect: {
			'en-us': "Discard the top card of your opponent's deck.",
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'de-de': "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'es-mx': "Descarta la primera carta del mazo de tu rival."
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836169,
				tcgplayer: 642581
			}
		},
	]
}

export default card
