import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [145],
	set: Set,

	name: {
		'fr-fr': "Électhor-ex",
		'en-us': "Zapdos ex",
		'es-es': "Zapdos ex",
		'it-it': "Zapdos-ex",
		'pt-br': "Zapdos ex",
		'de-de': "Zapdos-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Flottaison Voltaïque",
			'en-us': "Voltaic Float",
			'es-es': "Flotación Voltaica",
			'it-it': "Salvagente Voltaico",
			'pt-br': "Flutuador Voltaico",
			'de-de': "Voltfloß"
		},

		effect: {
			'fr-fr': "Si au moins une Énergie {L} est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			'en-us': "If this Pokémon has any {L} Energy attached, it has no Retreat Cost.",
			'es-es': "Si este Pokémon tiene alguna Energía {L} unida, no tiene ningún Coste de Retirada.",
			'it-it': "Se questo Pokémon ha delle Energie {L} assegnate, non ha costo di ritirata.",
			'pt-br': "Se este Pokémon tiver alguma Energia {L} ligada a ele, não terá custo de Recuo.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 {L}-Energie angelegt ist, hat es keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			'fr-fr': "Éclair Démultiplié",
			'en-us': "Multishot Lightning",
			'es-es': "Relámpago Multidisparo",
			'it-it': "Fulmine Multicolpo",
			'pt-br': "Relâmpagos Múltiplos",
			'de-de': "Multischussblitz"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 90 dégâts à l'un des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack also does 90 damage to 1 of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque también hace 90 puntos de daño a uno de los Pokémon en Banca de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 90 danni a uno dei Pokémon nella panchina del tuo avversario che ha dei segnalini danno. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 90 pontos de dano a 1 dos Pokémon no Banco do seu oponente que tiver algum contador de dano nele. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners, auf dem mindestens 1 Schadensmarke liegt, 90 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
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
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733797,
				tcgplayer: 517048,
				cardtrader: 261380
			}
		},
	],

	suffix: "ex",
	illustrator: "Shiburingaru",

	
}

export default card
