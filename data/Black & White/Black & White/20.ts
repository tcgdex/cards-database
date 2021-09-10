import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Emboar",
		fr: "Roitiflam",
		es: "Emboar",
		it: "Emboar",
		pt: "Emboar",
		de: "Flambirex"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		500,
	],
	hp: 150,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Pignite",
		fr: "Grotichon",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Inferno Fandango",
				fr: "Tango Infernal",
				es: "Infierno Fandango",
				it: "Fandango Infernale",
				pt: "Inferno Fandango",
				de: "Tango Inferno"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach a Fire Energy card from your hand to 1 of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fire de votre main à 1 de vos Pokémon.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes unir una carta de Energía Fire de tu mano a 1 de tus Pokémon.",
				it: "Durante il tuo turno, prima di attaccare, puoi assegnare a piacimento le carte Energia Fire che hai in mano ai tuoi Pokémon.",
				pt: "Sempre que desejar, na sua vez de jogar (antes de atacar), você poderá ligar um card de Energia Fire da sua mão a 1 dos seus Pokémon.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Fire-Energiekarte von deiner Hand an 1 deiner Pokémon anlegen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Crash",
				fr: "Tacle Feu",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
