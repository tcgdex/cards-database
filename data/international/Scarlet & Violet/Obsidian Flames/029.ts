import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [38],
	set: Set,

	name: {
		'fr-fr': "Feunard",
		'en-us': "Ninetales",
		'es-es': "Ninetales",
		'it-it': "Ninetales",
		'pt-br': "Ninetales",
		'de-de': "Vulnona"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Goupix",
		'en-us': "Vulpix",
		'es-es': "Vulpix",
		'it-it': "Vulpix",
		'pt-br': "Vulpix",
		'de-de': "Vulpix"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Feu Follet",
			'en-us': "Will-O-Wisp",
			'es-es': "Fuego Fatuo",
			'it-it': "Fuocofatuo",
			'pt-br': "Fogo Fátuo",
			'de-de': "Irrlicht"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'fr-fr': "Danse des Neuf Queues",
			'en-us': "Nine-Tailed Dance",
			'es-es': "Baile de Nueve Colas",
			'it-it': "Danza a Nove Code",
			'pt-br': "Dança de Nove Caudas",
			'de-de': "Neunschweifiger Tanz"
		},

		effect: {
			'fr-fr': "Placez 9 marqueurs de dégâts sur l'un des Pokémon de votre adversaire. Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'en-us': "Put 9 damage counters on 1 of your opponent's Pokémon. During your next turn, this Pokémon can't attack.",
			'es-es': "Pon 9 contadores de daño en uno de los Pokémon de tu rival. Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Metti nove segnalini danno su uno dei Pokémon del tuo avversario. Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Coloque 9 contadores de dano em 1 dos Pokémon do seu oponente. Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Lege 9 Schadensmarken auf 1 Pokémon deines Gegners. Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		}
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725109,
				tcgplayer: 509724,
				cardtrader: 255589
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725109,
				tcgplayer: 509724,
				cardtrader: 255589
			}
		},
	],

	illustrator: "Yoshioka",

	
}

export default card
