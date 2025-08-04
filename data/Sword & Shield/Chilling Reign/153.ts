import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Narcisse",
		en: "Siebold",
		es: "Narciso",
		it: "Narciso",
		pt: "Siebold",
		de: "Narcisse"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Choisissez jusqu'à 2 de vos Pokémon Mille Poings, puis soignez 60 dégâts de chacun de ces Pokémon.",
		en: "Choose up to 2 of your Rapid Strike Pokémon and heal 60 damage from each of them.",
		es: "Elige hasta 2 de tus Pokémon Golpe Fluido y cura 60 puntos de daño a cada uno de ellos.",
		it: "Scegli fino a due dei tuoi Pokémon Colpo Rapido e cura ciascuno di essi da 60 danni.",
		pt: "Escolha até 2 dos seus Pokémon Golpe Fluido e cure 60 pontos de dano de cada um deles.",
		de: "Wähle bis zu 2 deiner Fließender-Angriff-Pokémon und heile bei jedem von ihnen 60 Schadenspunkte."
	},

	trainerType: "Supporter",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 567261,
		tcgplayer: 241861
	}
}

export default card
