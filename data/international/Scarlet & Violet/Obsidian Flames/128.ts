import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [980],
	set: Set,

	name: {
		'fr-fr': "Terraiste de Paldea",
		'en-us': "Paldean Clodsire",
		'es-es': "Clodsire de Paldea",
		'it-it': "Clodsire di Paldea",
		'pt-br': "Clodsire de Paldea",
		'de-de': "Paldea-Suelord"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Axoloto de Paldea",
		'en-us': "Paldean Wooper",
		'es-es': "Wooper de Paldea",
		'it-it': "Wooper di Paldea",
		'pt-br': "Wooper de Paldea",
		'de-de': "Paldea-Felino"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Anneau de Poison",
			'en-us': "Poison Ring",
			'es-es': "Anillo Venenoso",
			'it-it': "Velenanello",
			'pt-br': "Anel de Veneno",
			'de-de': "Giftring"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen."
		},

		damage: 20
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Marteau Boueux",
			'en-us': "Muddy Hammer",
			'es-es': "Martillo Lodoso",
			'it-it': "Fangomartello",
			'pt-br': "Martelo Lamacento",
			'de-de': "Schlammhammer"
		},

		effect: {
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'en-us': "Discard the top card of your opponent's deck.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
		},

		damage: 100
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
		'en-us': "When attacked, this Pokémon will retaliate by sticking thick spines out from its body. It's a risky move that puts everything on the line.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725208,
				tcgplayer: 509884,
				cardtrader: 255813
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725208,
				tcgplayer: 509884,
				cardtrader: 255813
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card
