import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte",
		'es-es': "Poliwhirl",
		'it-it': "Poliwhirl",
		'pt-br': "Poliwhirl",
		'de-de': "Quaputzi"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		61,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Poliwag",
		'fr-fr': "Ptitard",
		'es-es': "Poliwag",
		'it-it': "Poliwag",
		'pt-br': "Poliwag",
		'de-de': "Quapsel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Rain Splash",
				'fr-fr': "Pluie Éclaboussante",
				'es-es': "Golpe de Lluvia",
				'it-it': "Spruzzapioggia",
				'pt-br': "Chuva Borrifante",
				'de-de': "Regenplatscher"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Finishing Blow",
				'fr-fr': "Coup de Grâce",
				'es-es': "Golpe de Gracia",
				'it-it': "Ultimocolpo",
				'pt-br': "Golpe Final",
				'de-de': "Finalhieb"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 50 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 50 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha dei segnalini danno, questo attacco infligge 50 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente já possuir contadores de danos, esse ataque causará 50 de danos adicionais.",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners bereits mindestens 1 Schadensmarke liegt, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can live in or out of water. When out of water, it constantly sweats to keep its body slimy.",
	},

	thirdParty: {
		cardmarket: 281680,
		tcgplayer: 92190
	}
}

export default card
