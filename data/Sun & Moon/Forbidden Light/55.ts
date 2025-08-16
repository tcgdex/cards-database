import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Poipole",
		fr: "Vémini",
		es: "Poipole",
		it: "Poipole",
		pt: "Poipole",
		de: "Venicro"
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
				en: "Spit Poison",
				fr: "Crache-Venin",
				es: "Escupir Veneno",
				it: "Sputaveleno",
				pt: "Cuspe Venenoso",
				de: "Giftspucke"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Knockout Reviver",
				fr: "K.O. Futile",
				es: "Noqueo Neutralizado",
				it: "KO Disinnescato",
				pt: "Nocaute Frustrado",
				de: "Fruchtloser K. o."
			},
			effect: {
				en: "During your opponent’s next turn, if this Pokémon is Knocked Out, your opponent can’t take any Prize cards for it.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon est mis K.O., votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
				es: "Durante el próximo turno de tu rival, si este Pokémon queda Fuera de Combate, tu rival no puede coger ninguna carta de Premio por ello.",
				it: "Durante il prossimo turno del tuo avversario, se questo Pokémon viene messo KO, il tuo avversario non può prendere carte Premio per effetto di quel KO.",
				pt: "Durante a próxima vez de jogar do seu oponente, se este Pokémon for Nocauteado, seu oponente não poderá pegar cartas de Prêmio por isto.",
				de: "Wenn dieses Pokémon während des nächsten Zuges deines Gegners kampfunfähig wird, kann dein Gegner dafür keine Preiskarten nehmen."
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

	thirdParty: {
		cardmarket: 355574,
		tcgplayer: 165705
	}
}

export default card
