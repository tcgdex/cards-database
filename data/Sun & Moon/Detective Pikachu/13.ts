import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
		es: "Machamp",
		it: "Machamp",
		pt: "Machamp",
		de: "Machomei"
	},

	illustrator: "MPC Film",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 160,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Directing Traffic",
				fr: "Diriger la Circulation",
				es: "Dirigir el Tráfico",
				it: "Viabilità",
				pt: "Guarda de Trânsito",
				de: "Verkehrsregelung"
			},
			effect: {
				en: "Look at the top 5 cards of your deck and put them back in any order.",
				fr: "Regardez les 5 cartes du dessus de votre deck et replacez-les dans l’ordre de votre choix.",
				es: "Mira las 5 primeras cartas de tu baraja y vuelve a ponerlas en la parte superior de tu baraja en el orden que quieras.",
				it: "Guarda le prime cinque carte del tuo mazzo e rimettile a posto nell’ordine che preferisci.",
				pt: "Olhe as 5 primeiras cartas do seu baralho e coloque-as de volta em qualquer ordem.",
				de: "Schau dir die obersten 5 Karten deines Decks an und lege sie in beliebiger Reihenfolge zurück auf dein Deck."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Cross Chop",
				fr: "Coup-Croix",
				es: "Tajo Cruzado",
				it: "Incrocolpo",
				pt: "Golpe Cruzado",
				de: "Kreuzhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 60 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 370776,
		tcgplayer: 186021
	}
}

export default card
