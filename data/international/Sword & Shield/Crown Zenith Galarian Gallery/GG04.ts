import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [741],
	set: Set,

	name: {
		'en-us': "Oricorio",
		'fr-fr': "Plumeline",
		'es-es': "Oricorio",
		'it-it': "Oricorio",
		'pt-br': "Oricorio",
		'de-de': "Choreogel"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Lesson in Zeal",
			'fr-fr': "Leçon de Zèle",
			'es-es': "Lección de Fervor",
			'it-it': "Lezione di Fervore",
			'pt-br': "Aula de Zelo",
			'de-de': "Leidenschaftliche Lektion"
		},

		effect: {
			'en-us': "All of your Fusion Strike Pokémon take 20 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). You can't apply more than 1 Lesson in Zeal Ability at a time.",
			'fr-fr': "Tous vos Pokémon Poing de Fusion subissent 20 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance). Vous ne pouvez utiliser qu'un talent Leçon de Zèle à la fois.",
			'es-es': "Los ataques de los Pokémon de tu rival hacen 20 puntos de daño menos a todos tus Pokémon Golpe Fusión (después de aplicar Debilidad y Resistencia). No puedes aplicar más de 1 habilidad Lección de Fervor a la vez.",
			'it-it': "I tuoi Pokémon Colpo Fusione subiscono 20 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza. Non puoi applicare più di un'abilità Lezione di Fervore alla volta.",
			'pt-br': "Todos os seus Pokémon Golpe Fusão recebem 20 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência). Você não pode usar mais de 1 Habilidade Aula de Zelo por vez.",
			'de-de': "Allen deinen Fusionsangriff-Pokémon werden durch Attacken von Pokémon deines Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden). Du kannst immer nur jeweils 1 Fähigkeit Leidenschaftliche Lektion einsetzen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Glistening Droplets",
			'fr-fr': "Gouttelettes Chatoyantes",
			'es-es': "Gotas Brillantes",
			'it-it': "Goccioline Scintillanti",
			'pt-br': "Gotinhas Reluzentes",
			'de-de': "Glitzernde Tropfen"
		},

		effect: {
			'en-us': "Put 5 damage counters on your opponent's Pokémon in any way you like.",
			'fr-fr': "Placez 5 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			'es-es': "Pon 5 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			'it-it': "Metti cinque segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			'pt-br': "Coloque 5 contadores de dano nos Pokémon do seu oponente como desejar.",
			'de-de': "Lege 5 Schadensmarken beliebig auf die Pokémon deines Gegners."
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
		'en-us': "This Oricorio has drunk red nectar. If its Trainer gives the wrong order, this passionate Pokémon becomes fiercely angry.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691883,
				tcgplayer: 478021
			}
		},
	],
}

export default card
