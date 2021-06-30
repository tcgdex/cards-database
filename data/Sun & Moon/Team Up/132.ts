import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Zangoose",
		fr: "Mangriff",
		es: "Zangoose",
		it: "Zangoose",
		pt: "Zangoose",
		de: "Sengo"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		335,
	],
	hp: 100,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Head Hunt",
				fr: "Chasseur de Têtes",
				es: "Caza de Talentos",
				it: "Reclutatore",
				pt: "Recrutamento",
				de: "Kopfgeldjagd"
			},
			effect: {
				en: "Look at the top 6 cards of your deck, reveal any number of Pokémon you find there, and put them into your hand. Discard the other cards.",
				fr: "Regardez les 6 cartes du dessus de votre deck, montrez autant de Pokémon trouvés que vous voulez, puis ajoutez-les à votre main. Défaussez les autres cartes.",
				es: "Mira las 6 primeras cartas de tu baraja, enseña cualquier cantidad de Pokémon que encuentres entre ellas y ponlos en tu mano. Descarta el resto de cartas.",
				it: "Guarda le prime sei carte del tuo mazzo, mostra un numero qualsiasi di Pokémon presenti tra esse e aggiungili alle carte che hai in mano. Scarta le altre carte.",
				pt: "Olhe as 6 primeiras cartas do seu baralho, revele qualquer número de Pokémon que encontrar lá e coloque-os na sua mão. Descarte as demais cartas.",
				de: "Schau dir die obersten 6 Karten deines Decks an, zeige deinem Gegner beliebig viele Pokémon, die du dort findest, und nimm sie auf deine Hand. Lege die anderen Karten auf deinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
