import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		it: "Gastly",
		pt: "Gastly",
		de: "Nebulak"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Ominous Eyes",
				fr: "Regard Menaçant",
				es: "Ojos Aciagos",
				it: "Sguardo Malevolo",
				pt: "Olhos Tenebrosos",
				de: "Unheilvolle Augen"
			},
			effect: {
				en: "Put 1 damage counter on 1 of your opponent’s Pokémon.",
				fr: "Placez un marqueur de dégâts sur l’un des Pokémon de votre adversaire.",
				es: "Pon 1 contador de daño en 1 de los Pokémon de tu rival.",
				it: "Metti un segnalino danno su uno dei Pokémon del tuo avversario.",
				pt: "Coloque 1 contador de dano em 1 dos Pokémon do seu oponente.",
				de: "Lege 1 Schadensmarke auf 1 Pokémon deines Gegners."
			},

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
		cardmarket: 311886
	}
}

export default card
