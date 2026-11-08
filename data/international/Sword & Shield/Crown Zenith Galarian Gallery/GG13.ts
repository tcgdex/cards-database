import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [719],
	set: Set,

	name: {
		'en-us': "Diancie",
		'fr-fr': "Diancie",
		'es-es': "Diancie",
		'it-it': "Diancie",
		'pt-br': "Diancie",
		'de-de': "Diancie"
	},

	illustrator: "Haruko Ichikawa",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Princess's Curtain",
			'fr-fr': "Rideau de Princesse",
			'es-es': "Cortina de la Princesa",
			'it-it': "Sipario della Principessa",
			'pt-br': "Cortina da Princesa",
			'de-de': "Schleier der Prinzessin"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to your Benched Basic Pokémon.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte sur vos Pokémon de Banc de base.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, cada vez que tu rival juegue 1 carta de Partidario de su mano, evita todos los efectos de esa carta infligidos a tus Pokémon Básicos en Banca.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, ogni volta che il tuo avversario gioca una carta Aiuto dalla sua mano, previeni tutti gli effetti di quella carta sui tuoi Pokémon Base in panchina.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, sempre que seu oponente jogar 1 carta de Apoiador da própria mão, previna todos os efeitos daquela carta causados aos seus Pokémon Básicos no Banco.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, verhindere jedes Mal, wenn dein Gegner 1 Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die den Basis-Pokémon auf deiner Bank zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spike Draw",
			'fr-fr': "Pique-Pioche",
			'es-es': "Robo Pico",
			'it-it': "Battipesca",
			'pt-br': "Comprada Espinhosa",
			'de-de': "Stachelzug"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It can instantly create many diamonds by compressing the carbon in the air between its hands.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691892,
				tcgplayer: 478030
			}
		},
	],
}

export default card
