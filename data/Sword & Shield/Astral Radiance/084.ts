import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Decidueye VSTAR",
		fr: "Archéduc de Hisui VSTAR",
		es: "Decidueye de Hisui V-ASTRO",
		it: "Decidueye di Hisui V ASTRO",
		pt: "Decidueye de Hisui V-ASTRO",
		de: "Hisui-Silvarro VSTAR"
	},

	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],

	evolveFrom: {
		en: "Hisuian Decidueye V",
		fr: "Archéduc de Hisui-V",
		es: "Decidueye de Hisui V",
		it: "Decidueye di Hisui-V",
		pt: "Decidueye de Hisui V",
		de: "Hisui-Silvarro-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Somersault Feathers",
			fr: "Plumes Vrille",
			es: "Plumas Salto Mortal",
			it: "Piumecapriola",
			pt: "Penas de Cambalhota",
			de: "Saltofedern"
		},

		effect: {
			en: "You may discard up to 3 Energy cards from your hand. This attack does 30 more damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser jusqu'à 3 cartes Énergie de votre main. Cette attaque inflige 30 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			es: "Puedes descartar hasta 3 cartas de Energía de tu mano. Este ataque hace 30 puntos de daño más por cada carta que hayas descartado de esta manera.",
			it: "Puoi scartare fino a tre carte Energia dalla tua mano. Questo attacco infligge 30 danni in più per ogni carta che hai scartato in questo modo.",
			pt: "Você pode descartar até 3 cartas de Energia da sua mão. Este ataque causa 30 pontos de dano a mais para cada carta descartada desta forma.",
			de: "Du kannst bis zu 3 Energiekarten aus deiner Hand auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 30 Schadenspunkte mehr zu."
		},

		damage: "160+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658696
	}
}

export default card
