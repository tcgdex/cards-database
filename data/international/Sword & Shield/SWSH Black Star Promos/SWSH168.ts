import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [741],
	set: Set,

	name: {
		'fr-fr': "Plumeline",
		'de-de': "Choreogel",
		'es-es': "Oricorio",
		'pt-br': "Oricorio",
		'it-it': "Oricorio",
		'en-us': "Oricorio"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Leçon de Zèle",
			'de-de': "Leidenschaftliche Lektion",
			'es-es': "Lección de Fervor",
			'pt-br': "Aula de Zelo",
			'it-it': "Lezione di Fervore",
			'en-us': "Lesson in Zeal"
		},

		effect: {
			'fr-fr': "Tous vos Pokémon Poing de Fusion subissent 20 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance). Vous ne pouvez utiliser qu'un talent Leçon de Zèle à la fois.",
			'de-de': "Allen deinen Fusionsangriff-Pokémon werden durch Attacken von Pokémon deines Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden). Du kannst immer nur jeweils 1 Fähigkeit Leidenschaftliche Lektion einsetzen.",
			'es-es': "Los ataques de los Pokémon de tu rival hacen 20 puntos de daño menos a todos tus Pokémon Golpe Fusión (después de aplicar Debilidad y Resistencia). No puedes aplicar más de 1 habilidad Lección de Fervor a la vez.",
			'pt-br': "Todos os seus Pokémon Golpe Fusão recebem 20 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência). Você não pode usar mais de 1 Habilidade Aula de Zelo por vez.",
			'it-it': "I tuoi Pokémon Colpo Fusione subiscono 20 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza. Non puoi applicare più di un'abilità Lezione di Fervore alla volta.",
			'en-us': "All of your Fusion Strike Pokémon take 20 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). You can't apply more than 1 Lesson in Zeal Ability at a time."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'fr-fr': "Gouttelettes Chatoyantes",
			'de-de': "Glitzernde Tropfen",
			'es-es': "Gotas Brillantes",
			'pt-br': "Gotinhas Reluzentes",
			'it-it': "Goccioline Scintillanti",
			'en-us': "Glistening Droplets"
		},

		effect: {
			'fr-fr': "Placez 5 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			'de-de': "Lege 5 Schadensmarken beliebig auf die Pokémon deines Gegners.",
			'es-es': "Pon 5 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			'pt-br': "Coloque 5 contadores de dano nos Pokémon do seu oponente como desejar.",
			'it-it': "Metti cinque segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			'en-us': "Put 5 damage counters on your opponent's Pokémon in any way you like."
		}
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "This Oricorio has drunk red nectar. If its Trainer gives the wrong order, this passionate Pokémon becomes fiercely angry."
	},

	thirdParty: {
		cardmarket: 580165
	}
}

export default card
