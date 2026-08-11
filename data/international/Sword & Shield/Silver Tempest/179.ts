import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		'en-us': "Hisuian Arcanine V",
		'fr-fr': "Arcanin de Hisui V",
		'es-es': "Arcanine de Hisui V",
		'it-it': "Arcanine di Hisui V",
		'pt-br': "Arcanine de Hisui V",
		'de-de': "Hisui-Arkani V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Irresistible Force",
			'fr-fr': "Force Irrésistible",
			'es-es': "Fuerza Irresistible",
			'it-it': "Forza Inarrestabile",
			'pt-br': "Força Irresistível",
			'de-de': "Unaufhaltbare Macht"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may move a Fighting Energy from 1 of your other Pokémon to this Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer une Énergie Fighting de l'un de vos autres Pokémon vers ce Pokémon.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes mover 1 Energía Fighting de 1 de tus otros Pokémon a este Pokémon.",
			'it-it': "Durante il tuo turno, puoi spostare un'Energia Fighting da uno dei tuoi altri Pokémon a questo Pokémon tutte le volte che vuoi.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá mover 1 Energia Fighting de 1 dos seus outros Pokémon para este Pokémon.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 Fighting-Energie von 1 deiner anderen Pokémon auf dieses Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Rock Bullet",
			'fr-fr': "Fronde",
			'es-es': "Bala Roca",
			'it-it': "Dardopietra",
			'pt-br': "Bala de Pedra",
			'de-de': "Steinkugel"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Fighting Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Fighting attachée à ce Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía Fighting unida a este Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia Fighting assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia Fighting ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Fighting-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682226,
				tcgplayer: 451827
			}
		},
	],
}

export default card
