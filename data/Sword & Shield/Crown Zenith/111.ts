import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [399],
	set: Set,

	name: {
		en: "Bidoof",
		fr: "Keunotor",
		es: "Bidoof",
		it: "Bidoof",
		pt: "Bidoof",
		de: "Bidiza"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Carefree Countenance",
			fr: "Contenance Insouciante",
			es: "Semblante Despreocupado",
			it: "Espressione Spensierata",
			pt: "Semblante Tranquilo",
			de: "Gelassene Miene"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
			fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
			es: "Mientras este Pokémon esté en tu Banca, evita todo el daño infligido a este Pokémon por ataques (tanto tuyos como de tu rival).",
			it: "Fintanto che questo Pokémon è nella tua panchina, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco, sia tuo che del tuo avversario.",
			pt: "Enquanto este Pokémon estiver no seu Banco, previna todo o dano causado a este Pokémon por ataques (seus e do seu oponente).",
			de: "Solange sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden, der diesem Pokémon durch Attacken (deine und die deines Gegners) zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hyper Fang",
			fr: "Croc de Mort",
			es: "Hipercolmillo",
			it: "Iperzanna",
			pt: "Hiperpresa",
			de: "Hyperzahn"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691830,
		tcgplayer: 478139
	}
}

export default card