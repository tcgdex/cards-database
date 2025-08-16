import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [785],
	set: Set,

	name: {
		en: "Tapu Koko",
		fr: "Tokorico",
		es: "Tapu Koko",
		it: "Tapu Koko",
		pt: "Tapu Koko",
		de: "Kapu-Riki"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Summon Lightning",
			fr: "Invocation d'Éclairs",
			es: "Invocar Rayos",
			it: "Lampo Evocativo",
			pt: "Invocar Relâmpagos",
			de: "Blitzbeschwörung"
		},

		effect: {
			en: "Search your deck for up to 2 {L} Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 Pokémon {L}, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 Pokémon {L}, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due Pokémon {L}, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 Pokémon {L} no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 {L}-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Prize Count",
			fr: "Compteur de Récompense",
			es: "Cuenta de Premios",
			it: "Contapremi",
			pt: "Contagem de Prêmios",
			de: "Preiszähler"
		},

		effect: {
			en: "If you have more Prize cards remaining than your opponent, this attack does 90 more damage.",
			fr: "S'il vous reste plus de cartes Récompense qu'à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si te quedan más cartas de Premio que a tu rival, este ataque hace 90 puntos de daño más.",
			it: "Se hai più carte Premio rimanenti del tuo avversario, questo attacco infligge 90 danni in più.",
			pt: "Se você tiver mais cartas de Prêmio restantes do que seu oponente, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Souichirou Gunjima"
}

export default card
