import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
		es: "Empoleon",
		it: "Empoleon",
		pt: "Empoleon",
		de: "Impoleon"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		395,
	],
	hp: 160,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Recall",
				fr: "Récupération",
				es: "Recordar",
				it: "Memoria",
				pt: "Recordar",
				de: "Abruf"
			},
			effect: {
				en: "Choose an attack from 1 of this Pokémon’s previous Evolutions and use it as this attack.",
				fr: "Choisissez une attaque de l’une des précédentes Évolutions de ce Pokémon et utilisez-la en tant que cette attaque.",
				es: "Elige 1 ataque de 1 de las Evoluciones anteriores de este Pokémon y úsalo para este ataque.",
				it: "Scegli uno degli attacchi degli stadi evolutivi precedenti di questo Pokémon e usalo al posto di questo attacco.",
				pt: "Escolha 1 dos ataques das Evoluções anteriores deste Pokémon e use-o como este ataque.",
				de: "Wähle 1 Attacke aus einer vorangegangenen Entwicklung dieses Pokémon und setze sie als diese Attacke ein."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aquafall",
				fr: "Aquasplash",
				es: "Catarata",
				it: "Idrocascata",
				pt: "Queda d’Água",
				de: "Aquafall"
			},
			effect: {
				en: "Discard all Energy from this Pokémon.",
				fr: "Défaussez toute l’Énergie de ce Pokémon.",
				es: "Descarta todas las Energías de este Pokémon.",
				it: "Scarta tutte le Energie assegnate a questo Pokémon.",
				pt: "Descarte toda a Energia deste Pokémon.",
				de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
