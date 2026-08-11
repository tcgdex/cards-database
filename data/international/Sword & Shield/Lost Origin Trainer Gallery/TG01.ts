import { Card } from "models/database/card"
import Set from "../Lost Origin Trainer Gallery"

const card: Card = {
	dexId: [47],
	set: Set,

	name: {
		'en-us': "Parasect",
		'fr-fr': "Parasect",
		'es-es': "Parasect",
		'it-it': "Parasect",
		'pt-br': "Parasect",
		'de-de': "Parasek"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Paras",
		'fr-fr': "Paras",
		'es-es': "Paras",
		'it-it': "Paras",
		'pt-br': "Paras",
		'de-de': "Paras"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Lethargy Spores",
			'fr-fr': "Spores Soporifiques",
			'es-es': "Esporas Letargo",
			'it-it': "Spore Letargiche",
			'pt-br': "Esporos Letárgicos",
			'de-de': "Trägheitssporen"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may make both Active Pokémon Asleep and Poisoned.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez laisser les deux Pokémon Actifs Endormis et Empoisonnés.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes dejar a ambos Pokémon Activos Dormidos y Envenenados.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi lasciare entrambi i Pokémon attivi addormentati e avvelenati.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá deixar ambos os Pokémon Ativos Adormecidos e Envenenados.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du beide Aktive Pokémon einschlafen lassen und vergiften."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "X-Scissor",
			'fr-fr': "Plaie Croix",
			'es-es': "Tijera X",
			'it-it': "Forbice X",
			'pt-br': "Tesoura X",
			'de-de': "Kreuzschere"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 50 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 50 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670826,
				tcgplayer: 284253
			}
		},
	],
}

export default card
