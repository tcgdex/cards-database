import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Torkoal",
		'fr-fr': "Chartor",
		'es-es': "Torkoal",
		'it-it': "Torkoal",
		'pt-br': "Torkoal",
		'de-de': "Qurtel"
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
				'en-us': "Flaming Honk",
				'fr-fr': "Sifflet Embrasé",
				'es-es': "Resoplido Fogoso",
				'it-it': "Sbuffo Infuocato",
				'pt-br': "Buzina Flamejante",
				'de-de': "Heißes Schnaufen"
			},
			effect: {
				'en-us': "Discard the top 4 cards of your deck. If any of those cards are Fire Energy cards, attach them to your Pokémon in any way you like.",
				'fr-fr': "Défaussez les 4 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie Fire, attachez-les à vos Pokémon, de la manière que vous voulez.",
				'es-es': "Descarta las 4 primeras cartas de tu baraja. Si entre esas cartas hay cartas de Energía Fire, únelas a tus Pokémon de la manera que desees.",
				'it-it': "Scarta le prime quattro carte del tuo mazzo. Se fra queste ci sono delle carte Energia Fire, assegnale a piacimento ai tuoi Pokémon.",
				'pt-br': "Descarte as 4 primeiras cartas do seu baralho. Se houver cartas de Energia Fire entre elas, ligue-as aos seus Pokémon como desejar.",
				'de-de': "Lege die obersten 4 Karten von deinem Deck auf deinen Ablagestapel. Wenn unter jenen Karten Fire-Energiekarten sind, lege sie beliebig an deine Pokémon an."
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
				'en-us': "Searing Flame",
				'fr-fr': "Flammes Calcinantes",
				'es-es': "Llama Abrasadora",
				'it-it': "Fiamme Ustionanti",
				'pt-br': "Chama Cauterizante",
				'de-de': "Sengende Flammen"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
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

	description: {
		'en-us': "If the fire burning within its shell goes out, it will die. Those who wish to raise one in their home must always keep something flammable at hand.",
	},

	thirdParty: {
		cardmarket: 361276,
		tcgplayer: 170844
	}
}

export default card
