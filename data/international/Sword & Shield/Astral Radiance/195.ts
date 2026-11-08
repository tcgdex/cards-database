import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [724],
	set: Set,

	name: {
		'en-us': "Hisuian Decidueye VSTAR",
		'fr-fr': "Archéduc de Hisui VSTAR",
		'es-es': "Decidueye de Hisui V-ASTRO",
		'it-it': "Decidueye di Hisui V ASTRO",
		'pt-br': "Decidueye de Hisui V-ASTRO",
		'de-de': "Hisui-Silvarro VSTAR"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Hisuian Decidueye V",
		'fr-fr': "Archéduc de Hisui-V",
		'es-es': "Decidueye de Hisui V",
		'it-it': "Decidueye di Hisui-V",
		'pt-br': "Decidueye de Hisui V",
		'de-de': "Hisui-Silvarro-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Somersault Feathers",
			'fr-fr': "Plumes Vrille",
			'es-es': "Plumas Salto Mortal",
			'it-it': "Piumecapriola",
			'pt-br': "Penas de Cambalhota",
			'de-de': "Saltofedern"
		},

		effect: {
			'en-us': "You may discard up to 3 Energy cards from your hand. This attack does 30 more damage for each card you discarded in this way.",
			'fr-fr': "Vous pouvez défausser jusqu'à 3 cartes Énergie de votre main. Cette attaque inflige 30 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'es-es': "Puedes descartar hasta 3 cartas de Energía de tu mano. Este ataque hace 30 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'it-it': "Puoi scartare fino a tre carte Energia dalla tua mano. Questo attacco infligge 30 danni in più per ogni carta che hai scartato in questo modo.",
			'pt-br': "Você pode descartar até 3 cartas de Energia da sua mão. Este ataque causa 30 pontos de dano a mais para cada carta descartada desta forma.",
			'de-de': "Du kannst bis zu 3 Energiekarten aus deiner Hand auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 30 Schadenspunkte mehr zu."
		},

		damage: "160+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 658856,
				tcgplayer: 272449
			}
		},
	],
}

export default card
