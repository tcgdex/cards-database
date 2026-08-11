import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [146],
	set: Set,

	name: {
		'fr-fr': "Sulfura",
		'en-us': "Moltres",
		'es-es': "Moltres",
		'it-it': "Moltres",
		'pt-br': "Moltres",
		'de-de': "Lavados"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Flottaison Flamboyante",
			'en-us': "Flare Float",
			'es-es': "Flotación Ígnea",
			'it-it': "Salvagente Fiammeggiante",
			'pt-br': "Chamas à Deriva",
			'de-de': "Flammenfloß"
		},

		effect: {
			'fr-fr': "Si au moins une Énergie {R} est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			'en-us': "If this Pokémon has any {R} Energy attached, it has no Retreat Cost.",
			'es-es': "Si este Pokémon tiene alguna Energía {R} unida, no tiene ningún Coste de Retirada.",
			'it-it': "Se questo Pokémon ha delle Energie {R} assegnate, non ha costo di ritirata.",
			'pt-br': "Se este Pokémon tiver alguma Energia {R} ligada a ele, não terá custo de Recuo.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 {R}-Energie angelegt ist, hat es keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Fire"],

		name: {
			'fr-fr': "Vol Enflammé",
			'en-us': "Blazing Flight",
			'es-es': "Vuelo Calcinador",
			'it-it': "Volo Rovente",
			'pt-br': "Voo Flamejante",
			'de-de': "Feuriger Flug"
		},

		effect: {
			'fr-fr': "Défaussez 2 Énergies {R} de ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "Discard 2 {R} Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Descarta 2 Energías {R} de este Pokémon. Este ataque hace 120 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Scarta due Energie {R} da questo Pokémon. Questo attacco infligge 120 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Descarte 2 Energias {R} deste Pokémon. Este ataque causa 120 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Lege 2 {R}-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
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

	description: {
		'en-us': "There are stories of this Pokémon using its radiant, flame-cloaked wings to light up paths for those lost in the mountains.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733741,
				tcgplayer: 516709,
				cardtrader: 261236
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733741,
				tcgplayer: 516709,
				cardtrader: 261236
			}
		},
	],

	illustrator: "KEIICHIRO ITO",

	
}

export default card
