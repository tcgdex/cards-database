import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Crobat",
		fr: "Nostenfer",
		es: "Crobat",
		it: "Crobat",
		pt: "Crobat",
		de: "Iksbat"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Golbat",
		fr: "Nosferalto",
		es: "Golbat",
		it: "Golbat",
		pt: "Golbat",
		de: "Golbat"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Venomous Fang",
			fr: "Croc-Poison",
			es: "Colmillo Nocivo",
			it: "Dentevelenoso",
			pt: "Dente Venenoso",
			de: "Gifthauer"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Critical Bite",
			fr: "Morsure Critique",
			es: "Mordisco Crítico",
			it: "Morso Decisivo",
			pt: "Mordida Crítica",
			de: "Kritischer Biss"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If 1 of your opponent's Pokémon is Knocked Out by damage from this attack, take 2 more Prize cards.",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Si l'un des Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez 2 cartes Récompense supplémentaires.",
			es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). Si 1 de los Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, coge 2 cartas de Premio más.",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina. Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, prendi due carte Premio in più.",
			pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). Se 1 dos Pokémon do seu oponente for Nocauteado pelo dano deste ataque, pegue 2 cartas de Prêmio a mais.",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Wenn 1 Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 2 Preiskarten mehr."
		}
	}],

	retreat: 0,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card