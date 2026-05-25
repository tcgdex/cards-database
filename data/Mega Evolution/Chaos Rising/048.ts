import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Mega Gallade ex",
		fr: "Méga-Gallame-ex",
		es: "Mega-Gallade ex",
		'es-mx': "Mega-Gallade ex",
		de: "Mega-Galagladi-ex",
		it: "Mega Gallade-ex",
		pt: "Mega Gallade ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [475],
	hp: 350,
	types: ["Fighting"],

	evolveFrom: {
		en: "Kirlia"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Gale Slash",
			fr: "Tranche Bourrasque",
			es: "Cuchillada Vendaval",
			'es-mx': "Cuchillada Vendaval",
			de: "Stürmischer Schlitzer",
			it: "Raffica Lacerante",
			pt: "Talho Vendaval"
		},

		cost: ["Fighting"],
		damage: "50+",

		effect: {
			en: "If this Pokémon has no damage counters on it, this attack does 150 more damage.",
			fr: "Si ce Pokémon n'a aucun marqueur de dégâts, cette attaque inflige 150 dégâts supplémentaires.",
			es: "Si este Pokémon no tiene ningún contador de daño sobre él, este ataque hace 150 puntos de daño más.",
			'es-mx': "Si este Pokémon no tiene ningún contador de daño sobre él, este ataque hace 150 puntos de daño más.",
			de: "Wenn auf diesem Pokémon keine Schadensmarken liegen, fügt diese Attacke 150 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon non ha segnalini danno, questo attacco infligge 150 danni in più.",
			pt: "Se este Pokémon não tiver nenhum contador de dano nele, este ataque causará 150 pontos de dano a mais."
		}
	}, {
		name: {
			en: "Marvelous Edge",
			fr: "Lame Merveilleuse",
			es: "Filo Maravilloso",
			'es-mx': "Filo Maravilloso",
			de: "Wunderbare Klinge",
			it: "Lama Meravigliosa",
			pt: "Gume Maravilhoso"
		},

		cost: ["Fighting", "Fighting", "Colorless"],
		damage: 240
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693514,
		cardmarket: 886440
	}
}

export default card