import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [34],
	set: Set,

	name: {
		fr: "Nidoking",
		en: "Nidoking",
		es: "Nidoking",
		it: "Nidoking",
		pt: "Nidoking",
		de: "Nidoking"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Roi Enthousiaste",
			en: "Enthusiastic King",
			es: "Rey Entusiasta",
			it: "Entusiasmo del Re",
			pt: "Rei Empolgado",
			de: "Enthusiastischer König"
		},

		effect: {
			fr: "Si vous avez Nidoqueen en jeu, ignorez toutes les Énergies dans le coût des attaques utilisées par ce Pokémon.",
			en: "If you have Nidoqueen in play, ignore all Energy in the costs of attacks used by this Pokémon.",
			es: "Si tienes a Nidoqueen en juego, ignora todas las Energías en el coste de los ataques usados por este Pokémon.",
			it: "Se hai Nidoqueen in gioco, ignora tutte le Energie necessarie per gli attacchi usati da questo Pokémon.",
			pt: "Se você tiver Nidoqueen em jogo, ignore todas as Energias nos custos dos ataques usados por este Pokémon.",
			de: "Wenn du Nidoqueen im Spiel hast, ignoriere alle Energien in den Kosten der von diesem Pokémon eingesetzten Attacken."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"],

		name: {
			fr: "Impact Venimeux",
			en: "Venomous Impact",
			es: "Impacto Envenenado",
			it: "Velenoimpatto",
			pt: "Impacto Peçonhento",
			de: "Giftiger Einschlag"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			en: "Your opponent's Active Pokémon is now Poisoned.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 190
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "Shiburingaru",

	thirdParty: {
		cardmarket: 733629
	}
}

export default card
