import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Charizard Y ex",
		fr: "Méga-Dracaufeu Y-ex",
		de: "Mega-Glurak Y-ex",
		it: "Mega Charizard Y-ex",
		es: "Mega-Charizard Y ex",
		pt: "Mega Charizard Y ex"
	},

	suffix: "ex",
	illustrator: "Ultimateinudog",
	rarity: "None",
	category: "Pokemon",
	hp: 360,
	types: ["Fire"],
	stage: "Stage2",
	dexId: [6],

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
		de: "Glutexo",
		it: "Charmeleon",
		es: "Charmeleon",
		pt: "Charmeleon"
	},

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Explosion Y",
			fr: "Explosion Y",
			de: "Explosion Y",
			it: "Esplosione Y",
			es: "Explosión Y",
			pt: "Explosão Y"
		},

		effect: {
			en: "Discard 3 Energy from this Pokémon, and this attack does 280 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 3 Énergies de ce Pokémon. Cette attaque inflige 280 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt 1 Pokémon deines Gegners 280 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Scarta tre Energie da questo Pokémon e questo attacco infligge 280 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			es: "Descarta 3 Energías de este Pokémon, y este ataque hace 280 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Descarte 3 Energias deste Pokémon, e este ataque causa 280 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
