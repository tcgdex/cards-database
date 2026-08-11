import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [478],
	set: Set,

	name: {
		'en-us': "Froslass ex",
		'fr-fr': "Momartik-ex",
		'es-es': "Froslass ex",
		'it-it': "Froslass-ex",
		'pt-br': "Froslass ex",
		'de-de': "Frosdedje-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
		'es-es': "Snorunt",
		'it-it': "Snorunt",
		'pt-br': "Snorunt",
		'de-de': "Schneppke"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Evanescent",
			'fr-fr': "Évanescent",
			'es-es': "Evanescente",
			'it-it': "Evanescente",
			'pt-br': "Evanescente",
			'de-de': "Vergänglichkeit"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is Knocked Out, flip a coin. If heads, your opponent takes 1 fewer Prize card.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et est mis K.O., lancez une pièce. Si c'est face, votre adversaire récupère une carte Récompense de moins.",
			'es-es': "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate, lanza 1 moneda. Si sale cara, tu rival coge 1 carta de Premio menos.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene messo KO, lancia una moneta. Se esce testa, il tuo avversario prende una carta Premio in meno.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for Nocauteado, jogue uma moeda. Se sair cara, seu oponente pegará 1 carta de Prêmio a menos.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und kampfunfähig wird, wirf 1 Münze. Bei Kopf nimmt dein Gegner 1 Preiskarte weniger."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Frost Bullet",
			'fr-fr': "Kunaï Givré",
			'es-es': "Bala Helada",
			'it-it': "Dardogelo",
			'pt-br': "Projétil Congelado",
			'de-de': "Frostprojektil"
		},

		effect: {
			'en-us': "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 20 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740479,
				tcgplayer: 523587,
				cardtrader: 265007
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
