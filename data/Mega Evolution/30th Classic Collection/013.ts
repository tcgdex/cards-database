import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	name: {
		en: "Buzzwole GX",
		fr: "Mouscoto GX",
		de: "Masskito GX",
		es: "Buzzwole GX",
		it: "Buzzwole GX",
		pt: "Buzzwole GX",
		'es-mx': "Buzzwole GX"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 190,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "GX",

	attacks: [{
		name: {
			en: "Jet Punch",
			fr: "Coup Rapide",
			de: "Jet-Schlag",
			es: "Puño Propulsión",
			it: "Pugno Jet",
			pt: "Soco Jato",
			'es-mx': "Puño Jet"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. <em>Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente <em>(não aplique Fraqueza e Resistência aos Pokémon no Banco).</em>",
			'es-mx': "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Knuckle Impact",
			fr: "Coup d'Articulations",
			de: "Knöchelprall",
			es: "Impacto Nudillo",
			it: "Impatto Nocche",
			pt: "Impacto Ossudo",
			'es-mx': "Impacto de Puño"
		},

		effect: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen.",
			es: "Este Pokémon no puede atacar durante tu próximo turno.",
			it: "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
			pt: "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
			'es-mx': "Este Pokémon no puede atacar durante tu próximo turno."
		},

		damage: 160,
		cost: ["Fighting", "Fighting", "Fighting"]
	}, {
		name: {
			en: "Absorption {GX}",
			fr: "Expansion {GX}",
			de: "Expander {GX}",
			es: "Expansión {GX}",
			it: "Expansio {GX}",
			pt: "Expansão {GX}",
			'es-mx': "Expansión {GX}"
		},

		effect: {
			en: "This attack does 40 damage for each of your remaining Prize cards. <em>(You can't use more than 1 <em>GX</em> attack in a game.)</em>",
			fr: "Cette attaque inflige 40 dégâts pour chacune des cartes Récompense qu'il vous reste. <em>(Vous ne pouvez utiliser qu'une attaque <em>GX</em> par partie.)</em>",
			de: "Diese Attacke fügt 40 Schadenspunkte mal der Anzahl deiner verbleibenden Preiskarten zu. <em>(Du kannst pro Spiel nur 1 <em>GX</em>-Attacke einsetzen.)</em>",
			es: "Este ataque hace 40 puntos de daño por cada carta de Premio que te quede. <em>(No puedes usar más de 1 ataque <em>GX</em> en una partida).</em>",
			it: "Questo attacco infligge 40 danni per ogni carta Premio che ti resta. <em>Non puoi usare più di un attacco <em>GX</em> a partita</em>.",
			pt: "Este ataque causa 40 pontos de dano para cada uma das suas cartas de Prêmio restantes <em>(você não pode usar mais de 1 ataque <em>GX</em> por partida).</em>",
			'es-mx': "Este ataque hace 40 puntos de daño por cada carta de Premio que te quede. <em>(No puedes usar más de 1 ataque <em>GX</em> por partida).</em>"
		},

		damage: "40×",
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card