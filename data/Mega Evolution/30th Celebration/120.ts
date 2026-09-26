import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It likes to sing but is not yet good at it. With praise and encouragement, it will get better little by little."
	},

	name: {
		en: "Igglybuff",
		fr: "Toudoudou",
		de: "Fluffeluff",
		es: "Igglybuff",
		it: "Igglybuff",
		'es-mx': "Igglybuff",
		pt: "Igglybuff"
	},

	illustrator: "Kanami Ogata",
	rarity: "Common",
	category: "Pokemon",
	dexId: [174],
	hp: 30,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Bouncy Circle",
			fr: "Cercle Rebondissant",
			de: "Hüpfkreis",
			es: "Círculo Elástico",
			it: "Cerchio Elastico",
			'es-mx': "Círculo Rebotón",
			pt: "Círculo Saltitante 30×"
		},

		effect: {
			en: "This attack does 30 damage for each of your Benched Pokémon that has a maximum HP of 30.",
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de Banc dont les PV maximums sont de 30.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank, das ein Maximum von<strong> </strong>30 KP hat, 30 Schadenspunkte zu.",
			es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en Banca cuyos PS máximos sean 30.",
			it: "Questo attacco infligge 30 danni per ciascuno dei Pokémon nella tua panchina i cui PS massimi sono 30.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en Banca cuyos PS máximos sean 30.",
			pt: "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon no Banco que tem um PS máximo de 30."
		},

		damage: "30×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907727,
				tcgplayer: 716509
			}
		}
	],
}

export default card
