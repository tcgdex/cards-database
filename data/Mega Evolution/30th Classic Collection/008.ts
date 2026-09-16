import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu & Zekrom GX",
		fr: "Pikachu et Zekrom GX",
		de: "Pikachu & Zekrom GX",
		es: "Pikachu y Zekrom GX",
		it: "Pikachu e Zekrom GX",
		pt: "Pikachu e Zekrom GX",
		'es-mx': "Pikachu y Zekrom GX"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	hp: 240,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "GX",

	attacks: [{
		name: {
			en: "Full Blitz",
			fr: "Attaque Absolue",
			de: "Mächtiger Blitz",
			es: "Envite Total",
			it: "Carica Totale",
			pt: "Bombardeio Geral",
			'es-mx': "Irrupción Total"
		},

		effect: {
			en: "Search your deck for up to 3 <span class=\"energy-symbol Lightning\" title=\"Lightning\">Lightning</span> Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
			fr: "Cherchez jusqu'à 3 cartes Énergie <span class=\"energy-symbol Lightning\" title=\"Électrique\">Lightning</span> dans votre deck et attachez-les à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 3 <span class=\"energy-symbol Lightning\" title=\"Elektro\">Lightning</span>-Energiekarten und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck.",
			es: "Busca en tu baraja hasta 3 cartas de Energía <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> y únelas a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre carte Energia <span class=\"energy-symbol Lightning\" title=\"Lampo\">Lightning</span> e assegnale a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 cartas de Energia <span class=\"energy-symbol Lightning\" title=\"Raios\">Lightning</span> no seu baralho e ligue-as a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 3 cartas de Energía <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> y únelas a 1 de tus Pokémon. Después, baraja tu mazo."
		},

		damage: 150,
		cost: ["Lightning", "Lightning", "Lightning"]
	}, {
		name: {
			en: "Tag Bolt {GX}",
			fr: "Escouade Foudroyante {GX}",
			de: "Doppel-Blitzschlag {GX}",
			es: "Rayo Relevo {GX}",
			it: "Bolide Alleato {GX}",
			pt: "Relâmpago de Aliados {GX}",
			'es-mx': "Rayo Relevo {GX}"
		},

		effect: {
			en: "If this Pokémon has at least 3 extra <span class=\"energy-symbol Lightning\" title=\"Lightning\">Lightning</span> Energy attached to it <em>(in addition to this attack's cost)</em>, this attack does 170 damage to 1 of your opponent's Benched Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 <em>GX</em> attack in a game.)</em>",
			fr: "Si au moins 3 Énergies <span class=\"energy-symbol Lightning\" title=\"Électrique\">Lightning</span> supplémentaires sont attachées à ce Pokémon <em>(en plus du coût de cette attaque)</em>, cette attaque inflige 170 dégâts à l'un des Pokémon de Banc de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em><em>(Vous ne pouvez utiliser qu'une attaque <em>GX</em> par partie.)</em>",
			de: "Wenn an dieses Pokémon mindestens 3 extra <span class=\"energy-symbol Lightning\" title=\"Elektro\">Lightning</span>-Energien angelegt sind <em>(zusätzlich zu den Kosten dieser Attacke)</em>, fügt diese Attacke 1 Pokémon auf der Bank deines Gegners 170 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 <em>GX</em>-Attacke einsetzen.)</em>",
			es: "Si este Pokémon tiene por lo menos 3 Energías <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> adicionales unidas a él <em>(además de las del coste de este ataque)</em>, este ataque hace 170 puntos de daño a 1 de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque <em>GX</em> en una partida).</em>",
			it: "Se questo Pokémon ha almeno tre Energie <span class=\"energy-symbol Lightning\" title=\"Lampo\">Lightning</span> extra assegnate, <em>in aggiunta a quelle del costo di questo attacco</em>, questo attacco infligge 170 danni a uno dei Pokémon nella panchina del tuo avversario. <em>Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un attacco <em>GX</em> a partita</em>.",
			pt: "Se este Pokémon tiver pelo menos 3 Energias <span class=\"energy-symbol Lightning\" title=\"Raios\">Lightning</span> adicionais ligadas a ele <em>(além do custo deste ataque)</em>, este ataque causará 170 pontos de dano a 1 dos Pokémon no Banco do seu oponente <em>(não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 ataque <em>GX</em> por partida.)</em>",
			'es-mx': "Si este Pokémon tiene al menos 3 Energías <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> adicionales unidas a él <em>(además de las del costo de este ataque)</em>, este ataque hace 170 puntos de daño a 1 de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque <em>GX</em> por partida).</em>"
		},

		damage: 200,
		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	retreat: 3
}

export default card