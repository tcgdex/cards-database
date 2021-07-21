import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Banette",
		fr: "Branette",
		es: "Banette",
		it: "Banette",
		pt: "Banette",
		de: "Banette"
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
		en: "Shuppet",
		fr: "Polichombr",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Red Eyes",
				fr: "Regard Rouge",
				es: "Ojos Rojos",
				it: "Capocciata",
				pt: "Olhos Vermelhos",
				de: "Rote Augen"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put a Basic Pokémon from your opponent’s discard pile onto their Bench.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer l’un des Pokémon de base de la pile de défausse de votre adversaire sur son Banc.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner 1 Pokémon Básico de la pila de descartes de tu rival en su Banca.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi prendere un Pokémon Base dalla pila degli scarti del tuo avversario e metterlo nella sua panchina.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode colocar 1 Pokémon Básico da pilha de descarte do seu oponente no Banco dele(a).",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Basis-Pokémon aus dem Ablagestapel deines Gegners auf seine Bank legen."
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
				en: "Enemy Show",
				fr: "Spectacle Ennemi",
				es: "Show del Enemigo",
				it: "Siparietto Nemico",
				pt: "Apresentação de Oponente",
				de: "Feindlicher Auftritt"
			},
			effect: {
				en: "For each of your opponent’s Pokémon in play, put 1 damage counter on your opponent’s Pokémon in any way you like.",
				fr: "Pour chaque Pokémon en jeu de votre adversaire, placez un marqueur de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
				es: "Por cada uno de los Pokémon en juego de tu rival, pon 1 contador de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Per ogni Pokémon in gioco del tuo avversario, metti a piacimento un segnalino danno sui suoi Pokémon.",
				pt: "Para cada um dos Pokémon do seu oponente em jogo, coloque 1 contador de dano nos Pokémon do seu oponente como desejar.",
				de: "Lege für jedes Pokémon deines Gegners im Spiel 1 Schadensmarke beliebig auf die Pokémon deines Gegners."
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



}

export default card
