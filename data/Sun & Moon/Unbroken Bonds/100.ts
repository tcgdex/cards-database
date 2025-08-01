import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Tyrogue",
		fr: "Debugant",
		es: "Tyrogue",
		it: "Tyrogue",
		pt: "Tyrogue",
		de: "Rabauz"
	},

	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		236,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bratty Kick",
				fr: "Frappe Friponne",
				es: "Patada Pataleta",
				it: "Calcio Capriccioso",
				pt: "Chute Malcriado",
				de: "Strampelnder Tritt"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, put 3 damage counters on 1 of your opponent’s Pokémon. If you use this Ability, your turn ends.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, placez 3 marqueurs de dégâts sur l’un des Pokémon de votre adversaire. Si vous utilisez ce talent, votre tour se termine.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, pon 3 contadores de daño en 1 de los Pokémon de tu rival. Si usas esta habilidad, tu turno termina.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, metti tre segnalini danno su uno dei Pokémon del tuo avversario. Se usi questa abilità, il tuo turno finisce.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode jogar 1 moeda. Se sair cara, coloque 3 contadores de dano em 1 dos Pokémon do seu oponente. Se você usar esta Habilidade, a sua vez de jogar acaba.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Münze werfen. Lege bei Kopf 3 Schadensmarken auf 1 Pokémon deines Gegners. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
			},
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 372391
	}
}

export default card
