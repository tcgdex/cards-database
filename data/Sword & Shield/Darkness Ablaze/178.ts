import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Houndoom V",
		fr: "Démolosse V",
		es: "Houndoom V",
		it: "Houndoom V",
		pt: "Houndoom V",
		de: "Hundemon V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
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
				en: "Searing Flame",
				fr: "Flammes Calcinantes",
				es: "Llama Abrasadora",
				it: "Fiamme Ustionanti",
				pt: "Chama Cauterizante",
				de: "Sengende Flammen"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
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
				en: "Vengeful Flame",
				fr: "Flamme Vengeresse",
				es: "Llama Vengativa",
				it: "Fiamme Livorose",
				pt: "Chamas Vingativas",
				de: "Rachsüchtige Flamme"
			},
			effect: {
				en: "If your Benched Fire Pokémon have any damage counters on them, this attack does 100 more damage.",
				fr: "Si des marqueurs de dégâts sont placés sur vos Pokémon Fire de Banc, cette attaque inflige 100 dégâts supplémentaires.",
				es: "Si tus Pokémon Fire en Banca tienen algún contador de daño sobre ellos, este ataque hace 100 puntos de daño más.",
				it: "Se i tuoi Pokémon Fire in panchina hanno dei segnalini danno, questo attacco infligge 100 danni in più.",
				pt: "Se os seus Pokémon Fire no Banco tiverem algum contador de dano neles, este ataque causará 100 pontos de dano a mais.",
				de: "Wenn auf den Fire-Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
