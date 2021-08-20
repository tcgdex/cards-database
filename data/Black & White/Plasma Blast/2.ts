import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Masquerain",
		fr: "Maskadra",
		es: "Masquerain",
		it: "Masquerain",
		pt: "Masquerain",
		de: "Maskeregen"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		284,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tool Reversal",
				fr: "Aspire-Outil",
				es: "Invertir Herramientas",
				it: "Invertioggetto",
				pt: "Inversão de Ferramenta",
				de: "Ausrüstungsumkehr"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may put a Pokémon Tool card attached to 1 of your Pokémon into your hand.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez placer une carte Outil Pokémon attachée à 1 de vos Pokémon dans votre main.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes poner una carta de Herramienta Pokémon unida a 1 de tus Pokémon en tu mano.",
				it: "Durante il tuo turno, prima di attaccare, puoi aggiungere a piacimento alle carte che hai in mano una carta Oggetto Pokémon assegnata a uno dei tuoi Pokémon.",
				pt: "Quantas vezes desejar durante o seu turno (antes de atacar), você pode colocar um card de Ferramenta Pokémon ligada a 1 dos seus Pokémon em sua mão.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Pokémon-Ausrüstung, die an 1 deiner Pokémon angelegt ist, auf deine Hand nehmen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bug Bite",
				fr: "Piqûre",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
