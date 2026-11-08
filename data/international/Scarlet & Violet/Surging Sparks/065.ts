import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [785],
	set: Set,

	name: {
		'en-us': "Tapu Koko",
		'fr-fr': "Tokorico",
		'es-es': "Tapu Koko",
		'it-it': "Tapu Koko",
		'pt-br': "Tapu Koko",
		'de-de': "Kapu-Riki"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Summon Lightning",
			'fr-fr': "Invocation d'Éclairs",
			'es-es': "Invocar Rayos",
			'it-it': "Lampo Evocativo",
			'pt-br': "Invocar Relâmpagos",
			'de-de': "Blitzbeschwörung"
		},

		effect: {
			'en-us': "Search your deck for up to 2 {L} Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon {L}, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon {L}, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon {L}, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 Pokémon {L} no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 {L}-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Prize Count",
			'fr-fr': "Compteur de Récompense",
			'es-es': "Cuenta de Premios",
			'it-it': "Contapremi",
			'pt-br': "Contagem de Prêmios",
			'de-de': "Preiszähler"
		},

		effect: {
			'en-us': "If you have more Prize cards remaining than your opponent, this attack does 90 more damage.",
			'fr-fr': "S'il vous reste plus de cartes Récompense qu'à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si te quedan más cartas de Premio que a tu rival, este ataque hace 90 puntos de daño más.",
			'it-it': "Se hai più carte Premio rimanenti del tuo avversario, questo attacco infligge 90 danni in più.",
			'pt-br': "Se você tiver mais cartas de Prêmio restantes do que seu oponente, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794346,
				tcgplayer: 590071
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794346,
				tcgplayer: 590071
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 799718,
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
		}
	],

	illustrator: "Souichirou Gunjima",
	
}

export default card
