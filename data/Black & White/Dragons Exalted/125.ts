import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Serperior",
		fr: "Majaspic",
		es: "Serperior",
		it: "Serperior",
		pt: "Serperior",
		de: "Serpiroyal"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		497,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Servine",
		fr: "Lianaja",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Royal Heal",
				fr: "Soin Royal",
				es: "Curación Regia",
				it: "Cura Reale",
				pt: "Cura Real",
				de: "Königsheiler"
			},
			effect: {
				en: "At any time between turns, heal 10 damage from each of your Pokémon.",
				fr: "N’importe quand entre chaque tour, soignez 10 dégâts à chacun de vos Pokémon.",
				es: "En cualquier momento entre turnos, cura 10 puntos de daño a cada uno de tus Pokémon.",
				it: "Tra un turno e l’altro, in qualsiasi momento, cura ciascuno dei tuoi Pokémon da 10 danni.",
				pt: "A qualquer momento entre as vezes de jogar, cure 10 de danos de cada um dos seus Pokémon no Banco.",
				de: "Heile zu einem beliebigen Zeitpunkt zwischen den Zügen 10 Schadenspunkte bei jedem deiner Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Tornado",
				fr: "Phytomixeur",
			},
			effect: {
				en: "Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.",
				fr: "Déplacez autant d'Énergies Grass attachées à vos Pokémon que vous voulez vers vos autres Pokémon, de la manière que vous voulez.",
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

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280564,
		tcgplayer: 89072
	}
}

export default card
