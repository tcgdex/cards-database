import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Dragalge",
		fr: "Kravarech",
		es: "Dragalge",
		it: "Dragalge",
		pt: "Dragalge",
		de: "Tandrak"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		691,
	],

	hp: 100,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Skrelp",
		fr: "Venalgue",
		es: "Skrelp",
		it: "Skrelp",
		pt: "Skrelp",
		de: "Algitt"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Poison Barrier",
				fr: "Barrière de Poison",
				es: "Barrera Veneno",
				it: "Velenobarriera",
				pt: "Barreira de Veneno",
				de: "Gifthülle"
			},
			effect: {
				en: "Your opponent's Poisoned Pokémon can't retreat.",
				fr: "Les Pokémon Empoisonnés de votre adversaire ne peuvent pas battre en retraite.",
				es: "Los Pokémon Envenenados de tu rival no pueden retirarse.",
				it: "I Pokémon avvelenati del tuo avversario non possono ritirarsi.",
				pt: "O Pokémon Envenenado do seu oponente não poderá recuar.",
				de: "Die vergifteten Pokémon deines Gegners können sich nicht zurückziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Breath",
				fr: "Haleine Empoisonnée",
				es: "Aliento Venenoso",
				it: "Velenospiro",
				pt: "Hálito Venenoso",
				de: "Gifthauch"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Envenenado.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt vergiftet."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281554
	}
}

export default card
