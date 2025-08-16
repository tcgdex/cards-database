import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [976],
	set: Set,

	name: {
		en: "Veluza",
		fr: "Délestin",
		es: "Veluza",
		it: "Veluza",
		pt: "Veluza",
		de: "Agiluza"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fillet Memento",
			fr: "Filet Relique",
			es: "Legado Cárnico",
			it: "Filetto Ricordo",
			pt: "Filé à Lembrança",
			de: "Filet-Memento"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, move up to 2 {W} Energy cards from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, déplacez jusqu'à 2 cartes Énergie {W} de ce Pokémon vers l'un de vos Pokémon de Banc.",
			es: "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, mueve hasta 2 cartas de Energía {W} de este Pokémon a uno de tus Pokémon en Banca.",
			it: "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, sposta fino a due carte Energia {W} da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, mova até 2 cartas de Energia {W} deste Pokémon para 1 dos seus Pokémon no Banco.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, verschiebe bis zu 2 {W}-Energiekarten von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
			es: "Hidrobomba",
			it: "Idropompa",
			pt: "Jato d'Água",
			de: "Hydropumpe"
		},

		effect: {
			en: "This attack does 20 more damage for each {W} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {W} attachée à ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia {W} assegnata a questo Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia {W} ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 20 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Shibuzoh."
}

export default card