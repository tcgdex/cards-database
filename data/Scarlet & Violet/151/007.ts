import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [7],
	set: Set,

	name: {
		fr: "Carapuce",
		en: "Squirtle",
		es: "Squirtle",
		it: "Squirtle",
		pt: "Squirtle",
		de: "Schiggy"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

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
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco.",
			pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird."
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			fr: "Coud'Krâne",
			en: "Skull Bash",
			es: "Cabezazo",
			it: "Capocciata",
			pt: "Quebra-crânio",
			de: "Schädelwumme"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "kantaro",

	thirdParty: {
		cardmarket: 733602
	}
}

export default card