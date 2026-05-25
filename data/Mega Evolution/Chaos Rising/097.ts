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
		en: "Watchog",
		fr: "Miradar",
		es: "Watchog",
		'es-mx': "Watchog",
		de: "Kukmarda",
		it: "Watchog",
		pt: "Watchog"
	},

	illustrator: "MARINA Chikazawa",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [505],
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Patrat"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Snap Inspection",
			fr: "Inspection Soudaine",
			es: "Inspección Repentina",
			'es-mx': "Inspección Sorpresa",
			de: "Plötzliche Inspektion",
			it: "Ispezione a Sorpresa",
			pt: "Inspeção Relâmpago"
		},

		cost: ["Colorless"],

		effect: {
			en: "Flip 3 coins. If any of them are heads, your opponent reveals their hand. For each heads, choose a card you find there and shuffle it into your opponent's deck.",
			fr: "Lancez 3 pièces. Si vous obtenez au moins un côté face, votre adversaire montre sa main. Pour chaque côté face, choisissez une carte que vous y trouvez, puis mélangez-la avec le deck de votre adversaire.",
			es: "Lanza 3 monedas. Si sale alguna cara, tu rival enseña las cartas de su mano. Por cada cara, elige 1 carta que encuentres entre ellas, ponla en la baraja de tu rival y baraja todas las cartas.",
			'es-mx': "Lanza 3 monedas. Si sale alguna cara, tu rival muestra su mano. Por cada cara, elige 1 carta que encuentres en ella y barájala en el mazo de tu rival.",
			de: "Wirf 3 Münzen. Wenn mindestens 1 Kopf zeigt, zeigt dir dein Gegner seine Handkarten. Wähle pro Kopf 1 Karte, die du dort findest, und mische sie in das Deck deines Gegners.",
			it: "Lancia tre volte una moneta. Se esce almeno una volta testa, il tuo avversario mostra le carte che ha in mano. Ogni volta che esce testa, scegli una carta presente tra quelle carte e rimischiala nel mazzo del tuo avversario.",
			pt: "Jogue 3 moedas. Se qualquer uma delas sair cara, seu oponente revelará a mão dele. Para cada cara, escolha uma carta que encontrar lá e a embaralhe no baralho do seu oponente."
		}
	}, {
		name: {
			en: "Low Kick",
			fr: "Balayage",
			es: "Patada Baja",
			'es-mx': "Patada Baja",
			de: "Fußkick",
			it: "Colpo Basso",
			pt: "Rasteira"
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

	thirdParty: {
		tcgplayer: 693560,
		cardmarket: 886489
	}
}

export default card
