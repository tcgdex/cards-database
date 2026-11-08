import { Card } from "models/database/card"
import Set from "../Silver Tempest Trainer Gallery"

const card: Card = {
	dexId: [807],
	set: Set,

	name: {
		'en-us': "Zeraora V",
		'fr-fr': "Zeraora V",
		'es-es': "Zeraora V",
		'it-it': "Zeraora V",
		'pt-br': "Zeraora V",
		'de-de': "Zeraora V"
	},

	illustrator: "yuu",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Cross Fist",
			'fr-fr': "Poings Croisés",
			'es-es': "Puño Cruzado",
			'it-it': "Pugno Incrociato",
			'pt-br': "Punho Cruzado",
			'de-de': "Cross-Faust"
		},

		effect: {
			'en-us': "If 1 of your other Rapid Strike Pokémon used an attack during your last turn, this attack also does 160 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Si l'un de vos autres Pokémon Mille Poings a utilisé une attaque pendant votre dernier tour, cette attaque inflige aussi 160 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Si 1 de tus otros Pokémon Golpe Fluido usó un ataque durante tu último turno, este ataque también hace 160 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Se uno dei tuoi altri Pokémon Colpo Rapido ha usato un attacco durante il tuo ultimo turno, questo attacco infligge anche 160 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon inpanchina.",
			'pt-br': "Se 1 dos seus outros Pokémon Golpe Fluido usou um ataque durante o seu último turno, este ataque também causará 160 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Wenn 1 deiner anderen Fließender-Angriff-Pokémon während deines letzten Zuges eine Attacke eingesetzt hat, fügt diese Attacke auch 1 Pokémon auf der Bank deines Gegners 160 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682280,
				tcgplayer: 451398
			}
		},
	],
}

export default card
