import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [958],
	set: Set,

	name: {
		'en-us': "Tinkatuff",
		'fr-fr': "Forgella",
		'es-es': "Tinkatuff",
		'it-it': "Tinkatuff",
		'pt-br': "Tinkatuff",
		'de-de': "Tafforgita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Tinkatink",
		'fr-fr': "Forgerette",
		'es-es': "Tinkatink",
		'it-it': "Tinkatink",
		'pt-br': "Tinkatink",
		'de-de': "Forgita"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Alloy Aswing",
			'fr-fr': "Frappe Alliage",
			'es-es': "Aleación Oscilante",
			'it-it': "Metalmazzata",
			'pt-br': "Giro de Liga Metálica",
			'de-de': "Schwingende Legierung"
		},

		effect: {
			'en-us': "If this Pokémon has any {M} Energy attached, this attack does 40 more damage.",
			'fr-fr': "Si au moins une Énergie {M} est attachée à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene alguna Energía {M} unida, este ataque hace 40 puntos de daño más.",
			'it-it': "Se questo Pokémon ha delle Energie {M} assegnate, questo attacco infligge 40 danni in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia {M} ligada a ele, este ataque causará 40 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 {M}-Energie angelegt ist, fügt diese Attacke 40 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "These Pokémon make their homes in piles of scrap metal. They test the strength of each other's hammers by smashing them together.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740576,
				tcgplayer: 523750,
				cardtrader: 265194
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740576,
				tcgplayer: 523750,
				cardtrader: 265194
			}
		},
	],

	illustrator: "Souichirou Gunjima",

	
}

export default card
