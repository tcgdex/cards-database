import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
		es: "Haunter",
		it: "Haunter",
		pt: "Haunter",
		de: "Alpollo"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		it: "Gastly",
		pt: "Gastly",
		de: "Nebulak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hypnosis",
				fr: "Hypnose",
				es: "Hipnosis",
				it: "Ipnosi",
				pt: "Hipnose",
				de: "Hypnose"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Dream Eater",
				fr: "Dévorêve",
				es: "Come Sueños",
				it: "Mangiasogni",
				pt: "Devorador de Sonhos",
				de: "Traumfresser"
			},
			effect: {
				en: "If your opponent's Active Pokémon is not Asleep, this attack does nothing.",
				fr: "Si le Pokémon Actif de votre adversaire n'est pas Endormi, cette attaque ne fait rien.",
				es: "Si el Pokémon Activo de tu rival no está Dormido, este ataque no hace nada.",
				it: "Se il Pokémon attivo del tuo avversario non è addormentato, questo attacco non ha effetto.",
				pt: "Se o Pokémon Ativo do seu oponente não estiver Adormecido, este ataque não fará nada.",
				de: "Wenn das Aktive Pokémon deines Gegners nicht schläft, hat dieser Angriff keine Auswirkungen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 293403,
		tcgplayer: 124060
	}
}

export default card
