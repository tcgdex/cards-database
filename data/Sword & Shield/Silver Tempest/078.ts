import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [579],
	set: Set,

	name: {
		en: "Reuniclus",
		fr: "Symbios",
		es: "Reuniclus",
		it: "Reuniclus",
		pt: "Reuniclus",
		de: "Zytomega"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Duosion",
		fr: "Méios",
		es: "Duosion",
		it: "Duosion",
		pt: "Duosion",
		de: "Mitodos"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Persistent Cells",
			fr: "Cellules Tenaces",
			es: "Células Persistentes",
			it: "Cellule Ostinate",
			pt: "Células Persistentes",
			de: "Beständige Zellen"
		},

		effect: {
			en: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, put it into your hand instead of the discard pile. (Discard all attached cards.)",
			fr: "Si ce Pokémon est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, placez-le dans votre main plutôt que dans la pile de défausse. (Défaussez toutes les cartes attachées.)",
			es: "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, ponlo en tu mano en vez de en la pila de descartes. (Descarta todas las cartas unidas a él).",
			it: "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, aggiungilo alle carte che hai in mano invece che alla pila degli scarti. Scarta tuttelecarteassegnate.",
			pt: "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, coloque-o na sua mão ao invés da pilha de descarte (descarte todas as cartas ligadas a ele).",
			de: "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, nimm es auf deine Hand, anstatt es auf deinen Ablagestapel zu legen. (Lege alle angelegten Karten auf deinen Ablagestapel.)"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Cell Fork",
			fr: "Fourche Cellulaire",
			es: "Horquilla Celular",
			it: "Forcella Cellulare",
			pt: "Divisão de Células",
			de: "Zellengabel"
		},

		effect: {
			en: "Choose 2 of your opponent's Benched Pokémon and put 3 damage counters on each of them.",
			fr: "Choisissez 2 des Pokémon de Banc de votre adversaire, puis placez 3 marqueurs de dégâts sur chacun d'eux.",
			es: "Elige 2 de los Pokémon en Banca de tu rival y pon 3 contadores de daño en cada uno de ellos.",
			it: "Scegli due dei Pokémon nella panchina del tuo avversario e metti tre segnalini danno su ciascuno di essi.",
			pt: "Escolha 2 dos Pokémon no Banco do seu oponente e coloque 3 contadores de dano em cada um deles.",
			de: "Wähle 2 Pokémon auf der Bank deines Gegners und lege 3 Schadensmarken auf jedes von ihnen."
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682125,
		tcgplayer: 451732
	}
}

export default card
