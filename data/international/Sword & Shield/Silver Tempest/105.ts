import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [169],
	set: Set,

	name: {
		'en-us': "Crobat",
		'fr-fr': "Nostenfer",
		'es-es': "Crobat",
		'it-it': "Crobat",
		'pt-br': "Crobat",
		'de-de': "Iksbat"
	},

	illustrator: "Yuya Oka",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'es-es': "Golbat",
		'it-it': "Golbat",
		'pt-br': "Golbat",
		'de-de': "Golbat"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Venomous Fang",
			'fr-fr': "Croc-Poison",
			'es-es': "Colmillo Nocivo",
			'it-it': "Dentevelenoso",
			'pt-br': "Dente Venenoso",
			'de-de': "Gifthauer"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Critical Bite",
			'fr-fr': "Morsure Critique",
			'es-es': "Mordisco Crítico",
			'it-it': "Morso Decisivo",
			'pt-br': "Mordida Crítica",
			'de-de': "Kritischer Biss"
		},

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If 1 of your opponent's Pokémon is Knocked Out by damage from this attack, take 2 more Prize cards.",
			'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Si l'un des Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez 2 cartes Récompense supplémentaires.",
			'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). Si 1 de los Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, coge 2 cartas de Premio más.",
			'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina. Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, prendi due carte Premio in più.",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). Se 1 dos Pokémon do seu oponente for Nocauteado pelo dano deste ataque, pegue 2 cartas de Prêmio a mais.",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Wenn 1 Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 2 Preiskarten mehr."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",


	description: {
		'en-us': "Both of its legs have turned into wings. Without a sound, Crobat flies swiftly toward its prey and sinks its fangs into the nape of its target's neck.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682152,
				tcgplayer: 451759
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682152,
				tcgplayer: 451759
			}
		},
	],
}

export default card
