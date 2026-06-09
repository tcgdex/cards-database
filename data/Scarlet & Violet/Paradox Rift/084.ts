import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [958],
	set: Set,

	name: {
		en: "Tinkatuff",
		fr: "Forgella",
		es: "Tinkatuff",
		it: "Tinkatuff",
		pt: "Tinkatuff",
		de: "Tafforgita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	evolveFrom: {
		en: "Tinkatink",
		fr: "Forgerette",
		es: "Tinkatink",
		it: "Tinkatink",
		pt: "Tinkatink",
		de: "Forgita"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Alloy Aswing",
			fr: "Frappe Alliage",
			es: "Aleación Oscilante",
			it: "Metalmazzata",
			pt: "Giro de Liga Metálica",
			de: "Schwingende Legierung"
		},

		effect: {
			en: "If this Pokémon has any {M} Energy attached, this attack does 40 more damage.",
			fr: "Si au moins une Énergie {M} est attachée à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
			es: "Si este Pokémon tiene alguna Energía {M} unida, este ataque hace 40 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie {M} assegnate, questo attacco infligge 40 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia {M} ligada a ele, este ataque causará 40 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon mindestens 1 {M}-Energie angelegt ist, fügt diese Attacke 40 Schadenspunkte mehr zu."
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
		en: "These Pokémon make their homes in piles of scrap metal. They test the strength of each other's hammers by smashing them together.",
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
