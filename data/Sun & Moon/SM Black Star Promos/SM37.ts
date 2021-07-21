import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Decidueye-GX",
		fr: "Archéduc-GX",
		es: "Decidueye-GX",
		it: "Decidueye-GX",
		pt: "Decidueye-GX",
		de: "Silvarro-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		724,
	],
	hp: 240,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Dartrix",
		fr: "Efflèche",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Feather Arrow",
				fr: "Flèche Empennée",
				es: "Flecha Pluma",
				it: "Freccia Piumata",
				pt: "Flecha de Pena",
				de: "Federpfeil"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put 2 damage counters on 1 of your opponent’s Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes poner 2 contadores de daño en 1 de los Pokémon de tu rival.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode colocar 2 contadores de dano em 1 dos Pokémon do seu oponente.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch’Herbe",
				es: "Hoja Afilada",
				it: "Foglielama",
				pt: "Folha Gilete",
				de: "Rasierblatt"
			},

			damage: 90,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Hollow Hunt GX",
				fr: "Chasse Éthérée GX",
				es: "Caza Hueca GX",
				it: "Caccia Vacua GX",
				pt: "Caça Aeriforme GX",
				de: "Pirschjagd GX"
			},
			effect: {
				en: "Put 3 cards from your discard pile into your hand. (You can’t use more than 1 GX attack in a game.)",
				fr: "Prenez 3 cartes dans votre pile de défausse et ajoutez-les à votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Pon 3 cartas de tu pila de descartes en tu mano. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Prendi tre carte dalla tua pila degli scarti e aggiungile a quelle che hai in mano. Non puoi usare più di un attacco GX a partita.",
				pt: "Coloque 3 cartas da sua pilha de descarte na sua mão (você não pode usar mais de 1 ataque GX por partida).",
				de: "Nimm 3 Karten aus deinem Ablagestapel auf deine Hand. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
