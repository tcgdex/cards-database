import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Toxicroak",
		fr: "Coatox",
		es: "Toxicroak",
		it: "Toxicroak",
		pt: "Toxicroak",
		de: "Toxiquak"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		454,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Croagunk",
		fr: "Cradopaud",
		es: "Croagunk",
		it: "Croagunk",
		pt: "Croagunk",
		de: "Glibunkel"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Poison Enzyme",
				fr: "Enzyme Empoisonnée",
				es: "Enzima Venenosa",
				it: "Velenenzima",
				pt: "Enzima Venenosa",
				de: "Giftenzyme"
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent's Poisoned Pokémon.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Empoisonnés de votre adversaire.",
				es: "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon Envenenados de tu rival.",
				it: "Previeni tutti i danni da attacchi inflitti a questo Pokémon dai Pokémon avvelenati del tuo avversario.",
				pt: "Previne todos os danos causados a este Pokémon por ataques dos Pokémon Envenenados do seu oponente.",
				de: "Verhindere allen Schaden, der diesem Pokémon durch Angriffe von vergifteten Pokémon deines Gegners zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Poison Jab",
				fr: "Direct Toxik",
				es: "Puya Nociva",
				it: "Velenpuntura",
				pt: "Golpe Envenenado",
				de: "Gifthieb"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Envenenado.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt vergiftet."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 291629,
		tcgplayer: 121189
	}
}

export default card
