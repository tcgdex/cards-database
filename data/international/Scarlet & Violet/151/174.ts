import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [34],
	set: Set,

	name: {
		'fr-fr': "Nidoking",
		'en-us': "Nidoking",
		'es-es': "Nidoking",
		'it-it': "Nidoking",
		'pt-br': "Nidoking",
		'de-de': "Nidoking"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Nidorino",
		'en-us': "Nidorino",
		'es-es': "Nidorino",
		'it-it': "Nidorino",
		'pt-br': "Nidorino",
		'de-de': "Nidorino"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Roi Enthousiaste",
			'en-us': "Enthusiastic King",
			'es-es': "Rey Entusiasta",
			'it-it': "Entusiasmo del Re",
			'pt-br': "Rei Empolgado",
			'de-de': "Enthusiastischer König"
		},

		effect: {
			'fr-fr': "Si vous avez Nidoqueen en jeu, ignorez toutes les Énergies dans le coût des attaques utilisées par ce Pokémon.",
			'en-us': "If you have Nidoqueen in play, ignore all Energy in the costs of attacks used by this Pokémon.",
			'es-es': "Si tienes a Nidoqueen en juego, ignora todas las Energías en el coste de los ataques usados por este Pokémon.",
			'it-it': "Se hai Nidoqueen in gioco, ignora tutte le Energie necessarie per gli attacchi usati da questo Pokémon.",
			'pt-br': "Se você tiver Nidoqueen em jogo, ignore todas as Energias nos custos dos ataques usados por este Pokémon.",
			'de-de': "Wenn du Nidoqueen im Spiel hast, ignoriere alle Energien in den Kosten der von diesem Pokémon eingesetzten Attacken."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Impact Venimeux",
			'en-us': "Venomous Impact",
			'es-es': "Impacto Envenenado",
			'it-it': "Velenoimpatto",
			'pt-br': "Impacto Peçonhento",
			'de-de': "Giftiger Einschlag"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 190
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "Nidoking prides itself on its strength. It's forceful and spirited in battle, making use of its thick tail and diamond-crushing horn.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733769,
				tcgplayer: 517029,
				cardtrader: 261323
			}
		},
	],

	illustrator: "Misaki Hashimoto",

	
}

export default card
