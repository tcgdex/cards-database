import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [36],
	set: Set,

	name: {
		fr: "Mélodelfe",
		en: "Clefable",
		es: "Clefable",
		it: "Clefable",
		pt: "Clefable",
		de: "Pixi"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Par Ici",
			en: "Follow Me",
			es: "Señuelo",
			it: "Sonoqui",
			pt: "Isca-viva",
			de: "Spotlight"
		},

		effect: {
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
			de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein."
		}
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			fr: "Supplément Sélène",
			en: "More Moon",
			es: "Más Luna",
			it: "Più Luna",
			pt: "Lua a Mais",
			de: "Mehr Mond"
		},

		effect: {
			fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire.",
			en: "If your opponent's Pokémon is Knocked Out by damage from this attack, take 1 more Prize card.",
			es: "Si un Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, coge 1 carta de Premio más.",
			it: "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, prendi una carta Premio in più.",
			pt: "Se o Pokémon do seu oponente for Nocauteado pelo dano deste ataque, pegue 1 carta de Prêmio a mais.",
			de: "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 1 Preiskarte mehr."
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "ryoma uratsuka",

	thirdParty: {
		cardmarket: 733631
	}
}

export default card