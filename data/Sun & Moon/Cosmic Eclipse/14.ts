import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Kricketune",
		fr: "Mélokrik",
		es: "Kricketune",
		it: "Kricketune",
		pt: "Kricketune",
		de: "Zirpeise"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		402,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kricketot",
		fr: "Crikzik",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Improvisational Performance",
				fr: "Performance Improvisée",
				es: "Actuación Improvisada",
				it: "Performance Estemporanea",
				pt: "Repente",
				de: "Improvisation"
			},
			effect: {
				en: "If you have exactly 1 card in your hand, this attack does 100 more damage. If you have exactly 3 cards in your hand, your opponent’s Active Pokémon is now Confused. If you have exactly 6 cards in your hand, this attack does 30 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "S’il vous reste exactement une carte en main, cette attaque inflige 100 dégâts supplémentaires. S’il vous reste exactement 3 cartes en main, le Pokémon Actif de votre adversaire est maintenant Confus. S’il vous reste exactement 6 cartes en main, cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Si tienes exactamente 1 carta en tu mano, este ataque hace 100 puntos de daño más. Si tienes exactamente 3 cartas en tu mano, el Pokémon Activo de tu rival pasa a estar Confundido. Si tienes exactamente 6 cartas en tu mano, este ataque hace 30 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Se hai esattamente una carta in mano, questo attacco infligge 100 danni in più. Se hai esattamente tre carte in mano, il Pokémon attivo del tuo avversario viene confuso. Se hai esattamente sei carte in mano, questo attacco infligge 30 danni a ciascun Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Se você tiver exatamente 1 carta na sua mão, este ataque causará 100 pontos de dano a mais. Se você tiver exatamente 3 cartas na sua mão, o Pokémon Ativo do seu oponente será Confundido. Se você tiver exatamente 6 cartas na sua mão, este ataque causará 30 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Wenn du genau 1 Karte auf deiner Hand hast, fügt diese Attacke 100 Schadenspunkte mehr zu. Wenn du genau 3 Karten auf deiner Hand hast, ist das Aktive Pokémon deines Gegners jetzt verwirrt. Wenn du genau 6 Karten auf deiner Hand hast, fügt diese Attacke jedem Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 407724,
		tcgplayer: 201164
	}
}

export default card
