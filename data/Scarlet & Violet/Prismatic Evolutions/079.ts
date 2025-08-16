import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [206],
	set: Set,

	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
		es: "Dunsparce",
		pt: "Dunsparce",
		it: "Dunsparce",
		de: "Dummisel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			pt: "Roída",
			it: "Rosicchiamento",
			de: "Nagen"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Dig",
			fr: "Tunnel",
			es: "Excavar",
			pt: "Cavar",
			it: "Fossa",
			de: "Schaufler"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 30
	}],

	retreat: 0,
	regulationMark: "H",
	illustrator: "Sanosuke Sakuma",

	thirdParty: {
		cardmarket: 805469
	}
}

export default card