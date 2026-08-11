import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [825],
	set: Set,

	name: {
		'en-us': "Team Rocket's Dottler",
		'fr-fr': "Coléodôme de la Team Rocket",
		'de-de': "Team Rockets Keradar",
		'it-it': "Dottler del Team Rocket",
		'es-es': "Dottler del Team Rocket",
		'pt-br': "Dottler da Equipe Rocket",
		'es-mx': "Dottler del Equipo Rocket"
	},


	illustrator: "Scav",

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Team Rocket's Blipbug",
		'fr-fr': "Larvadar de la Team Rocket",
		'de-de': "Team Rockets Sensect",
		'it-it': "Blipbug del Team Rocket",
		'es-es': "Blipbug del Team Rocket",
		'pt-br': "Blipbug da Equipe Rocket",
		'es-mx': "Blipbug del Equipo Rocket"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Disruptive Radar",
			'fr-fr': "Radar Perturbateur",
			'de-de': "Störradar",
			'it-it': "Radar Destabilizzante",
			'es-es': "Radar Disruptivo",
			'pt-br': "Radar Disruptivo",
			'es-mx': "Radar Disruptivo"
		},

		effect: {
			'en-us': "Look at the top 5 cards of your opponent's deck and put them back in any order.",
			'fr-fr': "Regardez les 5 cartes du dessus du deck de votre adversaire, puis replacez-les dans l'ordre de votre choix.",
			'de-de': "Schau dir die obersten 5 Karten des Decks deines Gegners an und lege sie in beliebiger Reihenfolge zurück auf sein Deck.",
			'it-it': "Guarda le prime cinque carte del mazzo del tuo avversario e rimettile a posto nell'ordine che preferisci.",
			'es-es': "Mira las 5 primeras cartas de la baraja de tu rival y vuelve a ponerlas en la parte superior de su baraja en el orden que quieras.",
			'pt-br': "Olhe as 5 cartas de cima do baralho do seu oponente e coloque-as de volta em qualquer ordem.",
			'es-mx': "Mira las primeras 5 cartas del mazo de tu rival y vuelve a ponerlas en la parte superior de su mazo en el orden que quieras."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Super Psy Bolt",
			'fr-fr': "Super Psy",
			'de-de': "Super-Psischlag",
			'it-it': "Superpsico",
			'es-es': "Superrayo Psi",
			'pt-br': "Super-raio Psíquico",
			'es-mx': "Superpsicotrueno"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825962,
				tcgplayer: 632897
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825962,
				tcgplayer: 632897
			}
		},
	],
}

export default card
