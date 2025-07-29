import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Tapu Fini",
		fr: "Tokopisco",
		es: "Tapu Fini",
		it: "Tapu Fini",
		pt: "Tapu Fini",
		de: "Kapu-Kime"
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
				en: "Dream Away",
				fr: "Rêve d’Éloignement",
				es: "Empuje Onírico",
				it: "Sognovia",
				pt: "Sonho de Despedida",
				de: "Wegträumen"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent shuffles their Active Pokémon and all cards attached to it into their deck.",
				fr: "Lancez une pièce. Si c’est face, votre adversaire mélange son Pokémon Actif et toutes les cartes qui lui sont attachées avec son deck.",
				es: "Lanza 1 moneda. Si sale cara, tu rival pone su Pokémon Activo y todas las cartas unidas a él en su baraja y las baraja todas.",
				it: "Lancia una moneta. Se esce testa, il tuo avversario rimischia il suo Pokémon attivo e tutte le carte a esso assegnate nel suo mazzo.",
				pt: "Jogue 1 moeda. Se sair cara, seu oponente embaralha o Pokémon Ativo dele(a) e todas as cartas ligadas a ele no próprio baralho.",
				de: "Wirf 1 Münze. Bei Kopf mischt dein Gegner sein Aktives Pokémon und alle an es angelegten Karten in sein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Wonder Shine",
				fr: "Éclat Merveilleux",
				es: "Brillo Prodigioso",
				it: "Luce Meraviglia",
				pt: "Brilho Encantado",
				de: "Wunderglanz"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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

	thirdParty: {
		cardmarket: 365788
	}
}

export default card
