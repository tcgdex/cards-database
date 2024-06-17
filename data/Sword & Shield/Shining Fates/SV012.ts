import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [840],
	set: Set,

	name: {
		fr: "Verpom",
		en: "Applin",
		es: "Applin",
		it: "Applin",
		pt: "Applin",
		de: "Knapfel"
	},

	illustrator: "otumami",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Repli",
			en: "Withdraw",
			es: "Refugio",
			it: "Ritirata",
			pt: "Retirada",
			de: "Panzerschutz"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques.",
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco.",
			pt: "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "It spends its entire life inside an apple. It hides from its natural enemies, bird Pokémon, by pretending it's just an apple and nothing more."
	}
}

export default card
