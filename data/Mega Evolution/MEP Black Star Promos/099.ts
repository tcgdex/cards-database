import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja ex",
		fr: "Amphinobi-ex",
		es: "Greninja ex",
		de: "Quajutsu-ex",
		it: "Greninja-ex",
		pt: "Greninja ex",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	stage: "Stage2",
	dexId: [658],

	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal",
		es: "Frogadier",
		de: "Amphizel",
		it: "Frogadier",
		pt: "Frogadier",
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Stealthy Slash",
			fr: "Tranche Furtive",
			es: "Tajo Sigiloso",
			de: "Tarnschlitzer",
			it: "Lacerazione Furtiva",
			pt: "Talho Furtivo",
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon for each damage counter on that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire pour chaque marqueur de dégâts sur ce Pokémon-là. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 30 puntos de daño a uno de los Pokémon de tu rival por cada contador de daño en ese Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners für jede Schadensmarke auf jenem Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario per ogni segnalino danno presente su quel Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente para cada contador de dano naquele Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
		}
	},
	{
		cost: ["Water", "Water"],

		name: {
			en: "Aqua Edge",
			fr: "Aqua-Dague",
			es: "Filo Agua",
			de: "Aquaschneide",
			it: "Acquataglio",
			pt: "Aqua Gume",
		},

		damage: 160
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Lightning",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895611,
				tcgplayer: 713268
			}
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 910855,
				tcgplayer: 713269
			}
		}
	],
}

export default card
