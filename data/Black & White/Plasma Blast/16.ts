import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Blastoise",
		fr: "Tortank",
		es: "Blastoise",
		it: "Blastoise",
		pt: "Blastoise",
		de: "Turtok"
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		9,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Deluge",
				fr: "Déluge",
				es: "Inundación",
				it: "Diluvio",
				pt: "Inundar",
				de: "Sintflut"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach a Water Energy card from your hand to 1 of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Water de votre main à 1 de vos Pokémon.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes unir una carta de Energía Water de tu mano a 1 de tus Pokémon.",
				it: "Durante il tuo turno, prima di attaccare, puoi assegnare a piacimento le carte Energia Water che hai in mano ai tuoi Pokémon.",
				pt: "Tantas vezes quanto desejar em sua vez de jogar (antes de atacar), você poderá ligar um card de Energia Water da sua mão a 1 dos seus Pokémon.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Water-Energiekarte von deiner Hand an 1 deiner Pokémon anlegen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
			},
			effect: {
				en: "Does 10 more damage for each Water Energy attached to this Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
