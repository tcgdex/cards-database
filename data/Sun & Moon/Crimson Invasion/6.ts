import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Cacturne",
		fr: "Cacturne",
		es: "Cacturne",
		it: "Cacturne",
		pt: "Cacturne",
		de: "Noktuska"
	},
	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		332,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Spike Rend",
				fr: "Pointe Déchirante",
				es: "Púas Desgarradoras",
				it: "Fendilancia",
				pt: "Espinho Despedaçador",
				de: "Zerreißende Dornen"
			},
			effect: {
				en: "If your opponent’s Active Pokémon already has any damage counters on it, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 60 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 60 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Hunt",
				fr: "Chasse",
				es: "Caza",
				it: "Agguato",
				pt: "Caçada",
				de: "Jagd"
			},
			effect: {
				en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. This attack does 40 damage to the new Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Cette attaque inflige 40 dégâts au nouveau Pokémon Actif.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 40 puntos de daño al nuevo Pokémon Activo.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 40 danni al nuovo Pokémon attivo.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Este ataque causa 40 pontos de dano ao novo Pokémon Ativo.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Diese Attacke fügt dem neuen Aktiven Pokémon 40 Schadenspunkte zu."
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
