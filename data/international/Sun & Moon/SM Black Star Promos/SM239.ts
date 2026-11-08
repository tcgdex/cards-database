import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [565],
	set: Set,

	name: {
		'en-us': "Carracosta GX",
		'fr-fr': "Mégapagos GX",
		'es-es': "Carracosta GX",
		'it-it': "Carracosta GX",
		'pt-br': "Carracosta GX",
		'de-de': "Karippas GX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Promo",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "High Density Armor",
			'fr-fr': "Armure Résistante",
			'es-es': "Armadura Alta Densidad",
			'it-it': "Corazza Dura",
			'pt-br': "Armadura de Alta Densidade",
			'de-de': "Schwere Rüstung"
		},

		effect: {
			'en-us': "If this Pokémon has full HP, any damage done to this Pokémon by an opponent’s attack is reduced by 50 (after applying Weakness and Resistance).",
			'fr-fr': "Si ce Pokémon a tous ses PV, tous les dégâts infligés à ce Pokémon par une attaque de votre adversaire sont réduits de 50 (après application de la Faiblesse et de la Résistance).",
			'es-es': "Si este Pokémon tiene todos sus PS, cualquier daño infligido a este Pokémon por un ataque de tu rival se reduce en 50 (después de aplicar Debilidad y Resistencia).",
			'it-it': "Se questo Pokémon ha tutti i PS, i danni inflitti a questo Pokémon da un attacco del tuo avversario sono ridotti di 50, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Se este Pokémon estiver com o PS cheio, qualquer dano causado a ele pelo ataque de um oponente será reduzido em 50 (após a aplicação de Fraqueza e Resistência).",
			'de-de': "Wenn dieses Pokémon volle KP hat, wird Schaden, der diesem Pokémon durch einen gegnerischen Angriff zugefügt wird, um 50 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Ground Crush",
			'fr-fr': "Écrasement Terrestre",
			'es-es': "Golpe Tierra",
			'it-it': "Sfasciaterra",
			'pt-br': "Esmagamento Terrestre",
			'de-de': "Bodenbrecher"
		},

		damage: 160,

		effect: {
			'en-us': "The Defending Pokémon can’t retreat during your opponent’s next turn.",
			'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
			'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
		},

		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Stone Age GX",
			'fr-fr': "Âge de Pierre GX",
			'es-es': "Edad de Piedra GX",
			'it-it': "Età della Pietra GX",
			'pt-br': "Idade da Pedra GX",
			'de-de': "Steinzeit GX"
		},

		effect: {
			'en-us': "Put any number of Pokémon that evolve from Unidentified Fossil from your discard pile onto your Bench. (You can’t use more than 1 GX attack in a game.)",
			'fr-fr': "Déplacez autant de Pokémon évoluant de Fossile Inconnu que vous le voulez de votre pile de défausse vers votre Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			'es-es': "Pon cualquier cantidad de Pokémon que evolucionen de Fósil Desconocido de tu pila de descartes en tu Banca. (No puedes usar más de 1 ataque GX en una partida).",
			'it-it': "Prendi un numero qualsiasi di Pokémon che si evolvono da Fossile Sconosciuto dalla tua pila degli scarti e mettili nella tua panchina. Non puoi usare più di un attacco GX a partita.",
			'pt-br': "Coloque qualquer número de Pokémon que evoluam de Fóssil Não Identificado da sua pilha de descarte no seu Banco (você não pode usar mais de 1 ataque GX por partida).",
			'de-de': "Nimm beliebig viele Pokémon, die sich aus Unbekanntes Fossil entwickeln, aus deinem Ablagestapel und lege sie auf deine Bank. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
}

export default card
