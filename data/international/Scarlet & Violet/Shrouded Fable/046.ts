import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [612],
	set: Set,

	name: {
		'en-us': "Haxorus",
		'fr-fr': "Tranchodon",
		'es-es': "Haxorus",
		'it-it': "Haxorus",
		'pt-br': "Haxorus",
		'de-de': "Maxax"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],
	evolveFrom: {
		'en-us': "Fraxure",
		'fr-fr': "Incisache",
		'es-es': "Fraxure",
		'it-it': "Fraxure",
		'pt-br': "Fraxure",
		'de-de': "Sharfax"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Bring Down the Axe",
			'fr-fr': "Hachèvement",
			'es-es': "Hundir el Hacha",
			'it-it': "Scure Fatale",
			'pt-br': "Descer o Machado",
			'de-de': "Fallbeil"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon has any Special Energy attached, it is Knocked Out.",
			'fr-fr': "Si au moins une Énergie spéciale est attachée au Pokémon Actif de votre adversaire, il est mis K.O.",
			'es-es': "Si el Pokémon Activo de tu rival tiene alguna Energía Especial unida, queda Fuera de Combate.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha delle Energie speciali assegnate, viene messo KO.",
			'pt-br': "Se o Pokémon Ativo do seu oponente tiver alguma Energia Especial ligada a ele, ele será Nocauteado.",
			'de-de': "Wenn an das Aktive Pokémon deines Gegners mindestens 1 Spezial-Energie angelegt ist, ist es kampfunfähig."
		}
	}, {
		cost: ["Fighting", "Metal"],

		name: {
			'en-us': "Dragon Pulse",
			'fr-fr': "Draco-Choc",
			'es-es': "Pulso Dragón",
			'it-it': "Dragopulsar",
			'pt-br': "Pulso do Dragão",
			'de-de': "Drachenpuls"
		},

		effect: {
			'en-us': "Discard the top 3 cards of your deck.",
			'fr-fr': "Défaussez les 3 cartes du dessus de votre deck.",
			'es-es': "Descarta las 3 primeras cartas de tu baraja.",
			'it-it': "Scarta le prime tre carte del tuo mazzo.",
			'pt-br': "Descarte as 3 cartas de cima do seu baralho.",
			'de-de': "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 230
	}],

	retreat: 2,
	regulationMark: "H",


	illustrator: "Tsuyoshi Nagano",

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 780942,
				tcgplayer: 560356
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780942,
				tcgplayer: 560356
			}
		},
	],
}

export default card
