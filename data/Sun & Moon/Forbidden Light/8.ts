import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Vivillon",
		fr: "Prismillon",
		es: "Vivillon",
		it: "Vivillon",
		pt: "Vivillon",
		de: "Vivillon"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		666,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Spewpa",
		fr: "Pérégrain",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Vivid Powder",
				fr: "Poudre Vive",
				es: "Polvo Vívido",
				it: "Polvere Vivida",
				pt: "Pó de Escamas Vívidas",
				de: "Farbenprächtiger Puder"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
		cardmarket: 355529
	}
}

export default card
