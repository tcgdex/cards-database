import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Snover",
		fr: "Blizzi",
		es: "Snover",
		it: "Snover",
		pt: "Snover",
		de: "Shnebedeck"
	},

	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		459,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Powder Snow",
				fr: "Poudreuse",
				es: "Nieve Polvo",
				it: "Polneve",
				pt: "Neve em Pó",
				de: "Pulverschnee"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 388032
	}
}

export default card
