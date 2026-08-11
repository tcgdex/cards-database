import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Banette",
		'fr-fr': "Branette",
		'es-es': "Banette",
		'it-it': "Banette",
		'pt-br': "Banette",
		'de-de': "Banette"
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		354,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Red Eyes",
				'fr-fr': "Regard Rouge",
				'es-es': "Ojos Rojos",
				'it-it': "Capocciata",
				'pt-br': "Olhos Vermelhos",
				'de-de': "Rote Augen"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put a Basic Pokémon from your opponent’s discard pile onto their Bench.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer l’un des Pokémon de base de la pile de défausse de votre adversaire sur son Banc.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner 1 Pokémon Básico de la pila de descartes de tu rival en su Banca.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi prendere un Pokémon Base dalla pila degli scarti del tuo avversario e metterlo nella sua panchina.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode colocar 1 Pokémon Básico da pilha de descarte do seu oponente no Banco dele(a).",
				'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Basis-Pokémon aus dem Ablagestapel deines Gegners auf seine Bank legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Enemy Show",
				'fr-fr': "Spectacle Ennemi",
				'es-es': "Show del Enemigo",
				'it-it': "Siparietto Nemico",
				'pt-br': "Apresentação de Oponente",
				'de-de': "Feindlicher Auftritt"
			},
			effect: {
				'en-us': "For each of your opponent’s Pokémon in play, put 1 damage counter on your opponent’s Pokémon in any way you like.",
				'fr-fr': "Pour chaque Pokémon en jeu de votre adversaire, placez un marqueur de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
				'es-es': "Por cada uno de los Pokémon en juego de tu rival, pon 1 contador de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Per ogni Pokémon in gioco del tuo avversario, metti a piacimento un segnalino danno sui suoi Pokémon.",
				'pt-br': "Para cada um dos Pokémon do seu oponente em jogo, coloque 1 contador de dano nos Pokémon do seu oponente como desejar.",
				'de-de': "Lege für jedes Pokémon deines Gegners im Spiel 1 Schadensmarke beliebig auf die Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Strong feelings of hatred turned a puppet into a Pokémon. If it opens its mouth, its cursed energy escapes.",
	},

	thirdParty: {
		cardmarket: 361310,
		tcgplayer: 170886
	}
}

export default card
