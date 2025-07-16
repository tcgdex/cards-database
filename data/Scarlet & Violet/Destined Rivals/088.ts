import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Dottler",
		fr: "Coléodôme de la Team Rocket",
		de: "Team Rockets Keradar",
		it: "Dottler del Team Rocket",
		es: "Dottler del Team Rocket",
		pt: "Dottler da Equipe Rocket",
		'es-mx': "Dottler del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Disruptive Radar",
			fr: "Radar Perturbateur",
			de: "Störradar",
			it: "Radar Destabilizzante",
			es: "Radar Disruptivo",
			pt: "Radar Disruptivo",
			'es-mx': "Radar Disruptivo"
		},

		effect: {
			en: "Look at the top 5 cards of your opponent's deck and put them back in any order.",
			fr: "Regardez les 5 cartes du dessus du deck de votre adversaire, puis replacez-les dans l'ordre de votre choix.",
			de: "Schau dir die obersten 5 Karten des Decks deines Gegners an und lege sie in beliebiger Reihenfolge zurück auf sein Deck.",
			it: "Guarda le prime cinque carte del mazzo del tuo avversario e rimettile a posto nell'ordine che preferisci.",
			es: "Mira las 5 primeras cartas de la baraja de tu rival y vuelve a ponerlas en la parte superior de su baraja en el orden que quieras.",
			pt: "Olhe as 5 cartas de cima do baralho do seu oponente e coloque-as de volta em qualquer ordem.",
			'es-mx': "Mira las primeras 5 cartas del mazo de tu rival y vuelve a ponerlas en la parte superior de su mazo en el orden que quieras."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
			de: "Super-Psischlag",
			it: "Superpsico",
			es: "Superrayo Psi",
			pt: "Super-raio Psíquico",
			'es-mx': "Superpsicotrueno"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
