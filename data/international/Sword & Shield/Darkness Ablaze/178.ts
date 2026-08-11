import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Houndoom V",
		'fr-fr': "Démolosse V",
		'es-es': "Houndoom V",
		'it-it': "Houndoom V",
		'pt-br': "Houndoom V",
		'de-de': "Hundemon V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [229],
	set: Set,
	hp: 210,

	types: [
		"Fire",
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Searing Flame",
				'fr-fr': "Flammes Calcinantes",
				'es-es': "Llama Abrasadora",
				'it-it': "Fiamme Ustionanti",
				'pt-br': "Chama Cauterizante",
				'de-de': "Sengende Flammen"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Vengeful Flame",
				'fr-fr': "Flamme Vengeresse",
				'es-es': "Llama Vengativa",
				'it-it': "Fiamme Livorose",
				'pt-br': "Chamas Vingativas",
				'de-de': "Rachsüchtige Flamme"
			},
			effect: {
				'en-us': "If your Benched Fire Pokémon have any damage counters on them, this attack does 100 more damage.",
				'fr-fr': "Si des marqueurs de dégâts sont placés sur vos Pokémon Fire de Banc, cette attaque inflige 100 dégâts supplémentaires.",
				'es-es': "Si tus Pokémon Fire en Banca tienen algún contador de daño sobre ellos, este ataque hace 100 puntos de daño más.",
				'it-it': "Se i tuoi Pokémon Fire in panchina hanno dei segnalini danno, questo attacco infligge 100 danni in più.",
				'pt-br': "Se os seus Pokémon Fire no Banco tiverem algum contador de dano neles, este ataque causará 100 pontos de dano a mais.",
				'de-de': "Wenn auf den Fire-Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483779,
				tcgplayer: 219298
			}
		},
	],
}

export default card
