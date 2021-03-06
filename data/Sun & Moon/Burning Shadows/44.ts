import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Tynamo",
		fr: "Anchwatt",
		es: "Tynamo",
		it: "Tynamo",
		pt: "Tynamo",
		de: "Zapplardin"
	},
	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		602,
	],
	hp: 40,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Aqua Shock",
				fr: "Choc Aquatique",
				es: "Sacudida Acuática",
				it: "Idroshock",
				pt: "Choque Aguado",
				de: "Aquaschock"
			},
			effect: {
				en: "If your opponent’s Active Pokémon has any Water Energy attached to it, this attack does 30 more damage.",
				fr: "Si de l’Énergie Water est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival tiene alguna Energía Water unida a él, este ataque hace 30 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha delle Energie Water assegnate, questo attacco infligge 30 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente possuir alguma Energia Water ligada a ele, este ataque causará 30 pontos de dano a mais.",
				de: "Wenn an das Aktive Pokémon deines Gegners mindestens 1 Water-Energie angelegt ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
