import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [1010],
	set: Set,

	name: {
		'en-us': "Iron Leaves",
		'fr-fr': "Vert-de-Fer",
		'es-es': "Ferroverdor",
		'it-it': "Fogliaferrea",
		'pt-br': "Folhas Férreas",
		'de-de': "Eisenblatt"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Recovery Net",
			'fr-fr': "Filet de Récupération",
			'es-es': "Red de Recuperación",
			'it-it': "Rete di Ripristino",
			'pt-br': "Rede de Recuperação",
			'de-de': "Rückgewinnungsnetz"
		},

		effect: {
			'en-us': "Put up to 2 Pokémon from your discard pile into your hand.",
			'fr-fr': "Ajoutez jusqu'à 2 Pokémon de votre pile de défausse à votre main.",
			'es-es': "Pon hasta 2 Pokémon de tu pila de descartes en tu mano.",
			'it-it': "Prendi fino a due Pokémon dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
			'pt-br': "Coloque até 2 Pokémon da sua pilha de descarte na sua mão.",
			'de-de': "Nimm bis zu 2 Pokémon aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Avenging Edge",
			'fr-fr': "Lame Vengeresse",
			'es-es': "Filo Vengativo",
			'it-it': "Lama Vendicativa",
			'pt-br': "Gume Vingativo",
			'de-de': "Racheklinge"
		},

		effect: {
			'en-us': "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage.",
			'fr-fr': "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
			'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 60 puntos de daño más.",
			'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 60 danni in più.",
			'pt-br': "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 60 pontos de dano a mais.",
			'de-de': "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "According to the few eyewitness accounts that exist, it used its shining blades to julienne large trees and boulders.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769193,
				tcgplayer: 550063
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769193,
				tcgplayer: 550063
			}
		},
	],

	illustrator: "Mitsuhiro Arita",

}

export default card
