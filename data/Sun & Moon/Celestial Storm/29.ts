import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Torkoal",
		fr: "Chartor",
		es: "Torkoal",
		it: "Torkoal",
		pt: "Torkoal",
		de: "Qurtel"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		324,
	],
	hp: 120,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flaming Honk",
				fr: "Sifflet Embrasé",
				es: "Resoplido Fogoso",
				it: "Sbuffo Infuocato",
				pt: "Buzina Flamejante",
				de: "Heißes Schnaufen"
			},
			effect: {
				en: "Discard the top 4 cards of your deck. If any of those cards are Fire Energy cards, attach them to your Pokémon in any way you like.",
				fr: "Défaussez les 4 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie Fire, attachez-les à vos Pokémon, de la manière que vous voulez.",
				es: "Descarta las 4 primeras cartas de tu baraja. Si entre esas cartas hay cartas de Energía Fire, únelas a tus Pokémon de la manera que desees.",
				it: "Scarta le prime quattro carte del tuo mazzo. Se fra queste ci sono delle carte Energia Fire, assegnale a piacimento ai tuoi Pokémon.",
				pt: "Descarte as 4 primeiras cartas do seu baralho. Se houver cartas de Energia Fire entre elas, ligue-as aos seus Pokémon como desejar.",
				de: "Lege die obersten 4 Karten von deinem Deck auf deinen Ablagestapel. Wenn unter jenen Karten Fire-Energiekarten sind, lege sie beliebig an deine Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Searing Flame",
				fr: "Flammes Calcinantes",
				es: "Llama Abrasadora",
				it: "Fiamme Ustionanti",
				pt: "Chama Cauterizante",
				de: "Sengende Flammen"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
