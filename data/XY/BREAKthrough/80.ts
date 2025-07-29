import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Swinub",
		fr: "Marcacrin",
		es: "Swinub",
		it: "Swinub",
		pt: "Swinub",
		de: "Quiekel"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		220,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
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
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Mud-Slap",
				fr: "Coud'Boue",
				es: "Bofetón Lodo",
				it: "Fangosberla",
				pt: "Tapa de Lama",
				de: "Lehmschelle"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 286326
	}
}

export default card
