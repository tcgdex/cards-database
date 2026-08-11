import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Poipole",
		'fr-fr': "Vémini",
		'es-es': "Poipole",
		'it-it': "Poipole",
		'pt-br': "Poipole",
		'de-de': "Venicro"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		803,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spit Poison",
				'fr-fr': "Crache-Venin",
				'es-es': "Escupir Veneno",
				'it-it': "Sputaveleno",
				'pt-br': "Cuspe Venenoso",
				'de-de': "Giftspucke"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Knockout Reviver",
				'fr-fr': "K.O. Futile",
				'es-es': "Noqueo Neutralizado",
				'it-it': "KO Disinnescato",
				'pt-br': "Nocaute Frustrado",
				'de-de': "Fruchtloser K. o."
			},
			effect: {
				'en-us': "During your opponent’s next turn, if this Pokémon is Knocked Out, your opponent can’t take any Prize cards for it.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon est mis K.O., votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
				'es-es': "Durante el próximo turno de tu rival, si este Pokémon queda Fuera de Combate, tu rival no puede coger ninguna carta de Premio por ello.",
				'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon viene messo KO, il tuo avversario non può prendere carte Premio per effetto di quel KO.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, se este Pokémon for Nocauteado, seu oponente não poderá pegar cartas de Prêmio por isto.",
				'de-de': "Wenn dieses Pokémon während des nächsten Zuges deines Gegners kampfunfähig wird, kann dein Gegner dafür keine Preiskarten nehmen."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Ultra Beast is well enough liked to be chosen as a first partner in its own world.",
	},

	thirdParty: {
		cardmarket: 355574,
		tcgplayer: 165705
	}
}

export default card
