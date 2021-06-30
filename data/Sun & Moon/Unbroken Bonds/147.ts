import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Meowth",
		fr: "Miaouss",
		es: "Meowth",
		it: "Meowth",
		pt: "Meowth",
		de: "Mauzi"
	},
	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		52,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Caturday",
				fr: "Chamedi",
				es: "Sábado Gatuno",
				it: "Giornogatto",
				pt: "Dia de Gato",
				de: "Schnurrtag"
			},
			effect: {
				en: "Draw 2 cards. If you do, this Pokémon is now Asleep.",
				fr: "Piochez 2 cartes. Dans ce cas, ce Pokémon est maintenant Endormi.",
				es: "Roba 2 cartas. Si lo haces, este Pokémon pasa a estar Dormido.",
				it: "Pesca due carte. Se lo fai, questo Pokémon viene addormentato.",
				pt: "Compre 2 cartas. Se fizer isto, este Pokémon será Adormecido.",
				de: "Ziehe 2 Karten. Wenn du das machst, schläft dieses Pokémon jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Whap",
				fr: "Queue Battoir",
				es: "Coletón",
				it: "Codabotta",
				pt: "Surra de Cauda",
				de: "Schweifvertrimmer"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
