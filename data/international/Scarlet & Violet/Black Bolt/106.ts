import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [564],
	set: Set,

	name: {
		'en-us': "Tirtouga",
		'fr-fr': "Carapagos",
		'de-de': "Galapaflos",
		'it-it': "Tirtouga",
		'pt-br': "Tirtouga",
		'es-es': "Tirtouga",
		'es-mx': "Tirtouga"
	},

	illustrator: "Akino Fukuji",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Antique Cover Fossil",
		'fr-fr': "Fossile Plaque Ancien",
		'de-de': "Antikes Schildfossil",
		'it-it': "Vecchio Fossiltappo",
		'pt-br': "Fóssil Casca Arcaico",
		'es-es': "Fósil Tapa Antiguo",
		'es-mx': "Fósil Cubierta Antiguo"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Ancient Seaweed",
			'fr-fr': "Algue Ancestrale",
			'de-de': "Uralter Seetang",
			'it-it': "Alghe Antiche",
			'pt-br': "Alga Ancestral",
			'es-es': "Alga Ancestral",
			'es-mx': "Alga Antigua"
		},

		effect: {
			'en-us': "This attack does 30 damage for each Item card in your opponent's discard pile.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque carte Objet dans la pile de défausse de votre adversaire.",
			'de-de': "Diese Attacke fügt für jede Itemkarte im Ablagestapel deines Gegners 30 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 30 danni per ogni carta Strumento nella pila degli scarti del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada carta de Item na pilha de descarte do seu oponente.",
			'es-es': "Este ataque hace 30 puntos de daño por cada carta de Objeto en la pila de descartes de tu rival.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada carta de Objeto en la pila de descartes de tu rival."
		},

		damage: "30×"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'de-de': "Surfer",
			'it-it': "Surf",
			'pt-br': "Surfar",
			'es-es': "Surf",
			'es-mx': "Surf"
		},

		damage: 80
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836119,
				tcgplayer: 642559
			}
		},
	]
}

export default card
