import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [434],

	name: {
		en: "Stunky",
		fr: "Moufouette",
		es: "Stunky",
		it: "Stunky",
		pt: "Stunky",
		de: "Skunkapuh"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Gas",
				fr: "Gaz Toxik",
				es: "Gas Venenoso",
				it: "Velenogas",
				pt: "Gás Venenoso",
				de: "Giftwolke"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 70,
	types: ["Darkness"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "From its rear, it sprays a foul-smelling liquid at opponents. It aims for their faces, and it can hit them from over 16 feet away."
	},

	thirdParty: {
		cardmarket: 457978,
		tcgplayer: 213206
	}
}

export default card
