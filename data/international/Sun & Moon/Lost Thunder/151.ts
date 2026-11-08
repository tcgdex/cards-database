import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Tapu Fini",
		'fr-fr': "Tokopisco",
		'es-es': "Tapu Fini",
		'it-it': "Tapu Fini",
		'pt-br': "Tapu Fini",
		'de-de': "Kapu-Kime"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		788,
	],

	hp: 120,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Dream Away",
				'fr-fr': "Rêve d’Éloignement",
				'es-es': "Empuje Onírico",
				'it-it': "Sognovia",
				'pt-br': "Sonho de Despedida",
				'de-de': "Wegträumen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent shuffles their Active Pokémon and all cards attached to it into their deck.",
				'fr-fr': "Lancez une pièce. Si c’est face, votre adversaire mélange son Pokémon Actif et toutes les cartes qui lui sont attachées avec son deck.",
				'es-es': "Lanza 1 moneda. Si sale cara, tu rival pone su Pokémon Activo y todas las cartas unidas a él en su baraja y las baraja todas.",
				'it-it': "Lancia una moneta. Se esce testa, il tuo avversario rimischia il suo Pokémon attivo e tutte le carte a esso assegnate nel suo mazzo.",
				'pt-br': "Jogue 1 moeda. Se sair cara, seu oponente embaralha o Pokémon Ativo dele(a) e todas as cartas ligadas a ele no próprio baralho.",
				'de-de': "Wirf 1 Münze. Bei Kopf mischt dein Gegner sein Aktives Pokémon und alle an es angelegten Karten in sein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Wonder Shine",
				'fr-fr': "Éclat Merveilleux",
				'es-es': "Brillo Prodigioso",
				'it-it': "Luce Meraviglia",
				'pt-br': "Brilho Encantado",
				'de-de': "Wunderglanz"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The guardian deity of Poni, it can control water. People say it can create pure water that will wash away any uncleanness.",
	},

	thirdParty: {
		cardmarket: 365788,
		tcgplayer: 178972
	}
}

export default card
