import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Munchlax",
		fr: "Goinfrex",
		es: "Munchlax",
		it: "Munchlax",
		pt: "Munchlax",
		de: "Mampfaxo"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		446,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Snack Search",
				fr: "Le Quatre-Heures",
				es: "Buscabocadito",
				it: "Cercapappa",
				pt: "Buscar Lanches",
				de: "Kleiner Nascher"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, put a card from your discard pile on top of your deck. If you use this Ability, your turn ends.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, placez une carte de votre pile de défausse sur le dessus de votre deck. Si vous utilisez ce talent, votre tour se termine.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, pon 1 carta de tu pila de descartes en la parte superior de tu baraja. Si usas esta habilidad, tu turno termina.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, prendi una carta dalla tua pila degli scarti e mettila in cima al tuo mazzo. Se usi questa abilità, il tuo turno finisce.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode jogar 1 moeda. Se sair cara, coloque 1 carta da sua pilha de descarte como a primeira carta do seu baralho. Se você usar esta Habilidade, a sua vez de jogar acaba.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Münze werfen. Lege bei Kopf 1 Karte aus deinem Ablagestapel oben auf dein Deck. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
			},
		},
	],

	retreat: 0
}

export default card
