import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Alolan Muk",
		'fr-fr': "Grotadmorv d’Alola",
		'es-es': "Muk de Alola",
		'it-it': "Muk di Alola",
		'pt-br': "Muk de Alola",
		'de-de': "Alola-Sleimok"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Alolan Grimer",
		'fr-fr': "Tadmorv d’Alola",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Adventurous Appetite",
				'fr-fr': "Appétit Aventurier",
				'es-es': "Apetito Aventurero",
				'it-it': "Appetito Vorace",
				'pt-br': "Apetite Aventureiro",
				'de-de': "Abenteuerlicher Appetit"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may look at the top 6 cards of your opponent’s deck and discard any number of Item cards you find there. Your opponent shuffles the other cards back into their deck.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez regarder les 6 cartes du dessus du deck de votre adversaire et en défausser autant de cartes Objet trouvées que vous voulez. Votre adversaire mélange les autres cartes avec son deck.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes mirar las 6 primeras cartas de la baraja de tu rival y descartar cualquier cantidad de cartas de Objeto que encuentres entre ellas. Tu rival pone el resto de cartas de nuevo en su baraja y las baraja todas.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi guardare le prime sei carte del mazzo del tuo avversario e scartare un numero qualsiasi di carte Strumento presenti tra esse. Il tuo avversario rimischia le altre carte nel suo mazzo.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode olhar as 6 primeiras cartas do baralho do seu oponente e descartar qualquer número de cartas de Item que encontrar lá. Seu oponente embaralha as demais cartas de volta no próprio baralho.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dir die obersten 6 Karten des Decks deines Gegners anschauen und beliebig viele Itemkarten, die du dort findest, auf seinen Ablagestapel legen. Dein Gegner mischt die anderen Karten zurück in sein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gunk Shot",
				'fr-fr': "Détricanon",
				'es-es': "Lanza Mugre",
				'it-it': "Sporcolancio",
				'pt-br': "Tiro de Sujeira",
				'de-de': "Mülltreffer"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "While it's unexpectedly quiet and friendly, if it's not fed any trash for a while, it will smash its Trainer's furnishings and eat up the fragments.",
	},

	thirdParty: {
		cardmarket: 369014,
		tcgplayer: 183862
	}
}

export default card
