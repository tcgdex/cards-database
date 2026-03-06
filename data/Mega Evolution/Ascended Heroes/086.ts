import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Mismagius",
		fr: "Magirêve",
		es: "Mismagius",
		'es-mx': "Mismagius",
		de: "Traunmagil",
		it: "Mismagius",
		pt: "Mismagius"
	},

	illustrator: "nisimono",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [429],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Assassin's Magic",
			fr: "Magie Assassine",
			es: "Magia del Asesino",
			'es-mx': "Magia del Asesino",
			de: "Meuchelmagie",
			it: "Magia dell'Assassino",
			pt: "Magia do Assassino"
		},

		effect: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, place 6 damage counters on 1 of your opponent's Benched Pokémon.",
			fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, placez 6 marqueurs de dégâts sur l'un des Pokémon de Banc de votre adversaire.",
			es: "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, pon 6 contadores de daño en uno de los Pokémon en Banca de tu rival.",
			'es-mx': "Si el Pokémon Activo de tu rival se ve afectado por alguna Condición Especial, pon 6 contadores de daño en 1 de los Pokémon en Banca de tu rival.",
			de: "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, lege 6 Schadensmarken auf 1 Pokémon auf der Bank deines Gegners.",
			it: "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, metti sei segnalini danno su uno dei Pokémon nella panchina del tuo avversario.",
			pt: "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, coloque 6 contadores de dano em 1 dos Pokémon no Banco do seu oponente."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675898,
		cardmarket: 869697
	}
}

export default card