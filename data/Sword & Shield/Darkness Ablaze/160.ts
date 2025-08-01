import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Cape of Toughness",
		fr: "Cape d'Endurance",
		es: "Capa de Dureza",
		it: "Mantello della Tenacia",
		pt: "Capa da Determinação",
		de: "Umhang der Stärke"
	},

	illustrator: "inose yukie",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "The Basic Pokémon this card is attached to gets +50 HP, except Pokémon-GX.",
		fr: "Cette carte ajoute 50 PV au Pokémon de base auquel elle est attachée, sauf s'il s'agit d'un Pokémon-GX.",
		es: "El Pokémon Básico al que esté unida esta carta obtiene 50 PS más, excepto los Pokémon-GX.",
		it: "Il Pokémon Base a cui è assegnata questa carta ha 50 PS in più, a eccezione dei Pokémon-GX.",
		pt: "O Pokémon Básico ao qual esta carta está ligada recebe 50 PS a mais, exceto por Pokémon-GX .",
		de: "Das Basis-Pokémon, an das diese Karte angelegt ist, erhält +50 KP, außer Pokémon-GX."
	},

	trainerType: "Tool",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 483679
	}
}

export default card
