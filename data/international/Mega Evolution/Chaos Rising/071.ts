import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "Using luminescent matter within its body, it makes its eyes and body glow and stuns attacking opponents.",
	},


	name: {
		'en-us': "Watchog",
		'fr-fr': "Miradar",
		'es-es': "Watchog",
		'es-mx': "Watchog",
		'de-de': "Kukmarda",
		'it-it': "Watchog",
		'pt-br': "Watchog"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [505],
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Patrat"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Snap Inspection",
			'fr-fr': "Inspection Soudaine",
			'es-es': "Inspección Repentina",
			'es-mx': "Inspección Sorpresa",
			'de-de': "Plötzliche Inspektion",
			'it-it': "Ispezione a Sorpresa",
			'pt-br': "Inspeção Relâmpago"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Flip 3 coins. If any of them are heads, your opponent reveals their hand. For each heads, choose a card you find there and shuffle it into your opponent's deck.",
			'fr-fr': "Lancez 3 pièces. Si vous obtenez au moins un côté face, votre adversaire montre sa main. Pour chaque côté face, choisissez une carte que vous y trouvez, puis mélangez-la avec le deck de votre adversaire.",
			'es-es': "Lanza 3 monedas. Si sale alguna cara, tu rival enseña las cartas de su mano. Por cada cara, elige 1 carta que encuentres entre ellas, ponla en la baraja de tu rival y baraja todas las cartas.",
			'es-mx': "Lanza 3 monedas. Si sale alguna cara, tu rival muestra su mano. Por cada cara, elige 1 carta que encuentres en ella y barájala en el mazo de tu rival.",
			'de-de': "Wirf 3 Münzen. Wenn mindestens 1 Kopf zeigt, zeigt dir dein Gegner seine Handkarten. Wähle pro Kopf 1 Karte, die du dort findest, und mische sie in das Deck deines Gegners.",
			'it-it': "Lancia tre volte una moneta. Se esce almeno una volta testa, il tuo avversario mostra le carte che ha in mano. Ogni volta che esce testa, scegli una carta presente tra quelle carte e rimischiala nel mazzo del tuo avversario.",
			'pt-br': "Jogue 3 moedas. Se qualquer uma delas sair cara, seu oponente revelará a mão dele. Para cada cara, escolha uma carta que encontrar lá e a embaralhe no baralho do seu oponente."
		}
	}, {
		name: {
			'en-us': "Low Kick",
			'fr-fr': "Balayage",
			'es-es': "Patada Baja",
			'es-mx': "Patada Baja",
			'de-de': "Fußkick",
			'it-it': "Colpo Basso",
			'pt-br': "Rasteira"
		},

		cost: ["Colorless"],
		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886463,
				tcgplayer: 693559
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886463,
				tcgplayer: 693559
			}
		},
	],
}

export default card
