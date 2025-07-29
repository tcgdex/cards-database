import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Meditite",
		fr: "Méditikka",
		es: "Meditite",
		it: "Meditite",
		pt: "Meditite",
		de: "Meditie"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		307,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Spirited Headbutt",
				fr: "Coup d’Boule Emporté",
				es: "Cabezazo Vigoroso",
				it: "Testata Ascetica",
				pt: "Cabeçada Vigorosa",
				de: "Kühne Kopfnuss"
			},
			effect: {
				en: "This Pokémon can’t use Spirited Headbutt during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Coup d’Boule Emporté pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Cabezazo Vigoroso durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Testata Ascetica.",
				pt: "Este Pokémon não poderá usar Cabeçada Vigorosa durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Kühne Kopfnuss während deines nächsten Zuges nicht einsetzen."
			},
			damage: 40,

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
		cardmarket: 388347
	}
}

export default card
