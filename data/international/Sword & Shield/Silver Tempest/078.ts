import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [579],
	set: Set,

	name: {
		'en-us': "Reuniclus",
		'fr-fr': "Symbios",
		'es-es': "Reuniclus",
		'it-it': "Reuniclus",
		'pt-br': "Reuniclus",
		'de-de': "Zytomega"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Duosion",
		'fr-fr': "Méios",
		'es-es': "Duosion",
		'it-it': "Duosion",
		'pt-br': "Duosion",
		'de-de': "Mitodos"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Persistent Cells",
			'fr-fr': "Cellules Tenaces",
			'es-es': "Células Persistentes",
			'it-it': "Cellule Ostinate",
			'pt-br': "Células Persistentes",
			'de-de': "Beständige Zellen"
		},

		effect: {
			'en-us': "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, put it into your hand instead of the discard pile. (Discard all attached cards.)",
			'fr-fr': "Si ce Pokémon est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, placez-le dans votre main plutôt que dans la pile de défausse. (Défaussez toutes les cartes attachées.)",
			'es-es': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, ponlo en tu mano en vez de en la pila de descartes. (Descarta todas las cartas unidas a él).",
			'it-it': "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, aggiungilo alle carte che hai in mano invece che alla pila degli scarti. Scarta tuttelecarteassegnate.",
			'pt-br': "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, coloque-o na sua mão ao invés da pilha de descarte (descarte todas as cartas ligadas a ele).",
			'de-de': "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, nimm es auf deine Hand, anstatt es auf deinen Ablagestapel zu legen. (Lege alle angelegten Karten auf deinen Ablagestapel.)"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Cell Fork",
			'fr-fr': "Fourche Cellulaire",
			'es-es': "Horquilla Celular",
			'it-it': "Forcella Cellulare",
			'pt-br': "Divisão de Células",
			'de-de': "Zellengabel"
		},

		effect: {
			'en-us': "Choose 2 of your opponent's Benched Pokémon and put 3 damage counters on each of them.",
			'fr-fr': "Choisissez 2 des Pokémon de Banc de votre adversaire, puis placez 3 marqueurs de dégâts sur chacun d'eux.",
			'es-es': "Elige 2 de los Pokémon en Banca de tu rival y pon 3 contadores de daño en cada uno de ellos.",
			'it-it': "Scegli due dei Pokémon nella panchina del tuo avversario e metti tre segnalini danno su ciascuno di essi.",
			'pt-br': "Escolha 2 dos Pokémon no Banco do seu oponente e coloque 3 contadores de dano em cada um deles.",
			'de-de': "Wähle 2 Pokémon auf der Bank deines Gegners und lege 3 Schadensmarken auf jedes von ihnen."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "While it could use its psychic abilities in battle, this Pokémon prefers to swing its powerful arms around to beat opponents into submission.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682125,
				tcgplayer: 451732
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682125,
				tcgplayer: 451732
			}
		},
	],
}

export default card
