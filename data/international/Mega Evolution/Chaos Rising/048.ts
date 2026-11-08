import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "Mega Gallade ex",
		'fr-fr': "Méga-Gallame-ex",
		'es-es': "Mega-Gallade ex",
		'es-mx': "Mega-Gallade ex",
		'de-de': "Mega-Galagladi-ex",
		'it-it': "Mega Gallade-ex",
		'pt-br': "Mega Gallade ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [475],
	hp: 350,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Kirlia"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Gale Slash",
			'fr-fr': "Tranche Bourrasque",
			'es-es': "Cuchillada Vendaval",
			'es-mx': "Cuchillada Vendaval",
			'de-de': "Stürmischer Schlitzer",
			'it-it': "Raffica Lacerante",
			'pt-br': "Talho Vendaval"
		},

		cost: ["Fighting"],
		damage: "50+",

		effect: {
			'en-us': "If this Pokémon has no damage counters on it, this attack does 150 more damage.",
			'fr-fr': "Si ce Pokémon n'a aucun marqueur de dégâts, cette attaque inflige 150 dégâts supplémentaires.",
			'es-es': "Si este Pokémon no tiene ningún contador de daño sobre él, este ataque hace 150 puntos de daño más.",
			'es-mx': "Si este Pokémon no tiene ningún contador de daño sobre él, este ataque hace 150 puntos de daño más.",
			'de-de': "Wenn auf diesem Pokémon keine Schadensmarken liegen, fügt diese Attacke 150 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon non ha segnalini danno, questo attacco infligge 150 danni in più.",
			'pt-br': "Se este Pokémon não tiver nenhum contador de dano nele, este ataque causará 150 pontos de dano a mais."
		}
	}, {
		name: {
			'en-us': "Marvelous Edge",
			'fr-fr': "Lame Merveilleuse",
			'es-es': "Filo Maravilloso",
			'es-mx': "Filo Maravilloso",
			'de-de': "Wunderbare Klinge",
			'it-it': "Lama Meravigliosa",
			'pt-br': "Gume Maravilhoso"
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

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886440,
				tcgplayer: 693514
			}
		},
	],
}

export default card
