import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Incineroar",
		fr: "Félinferno",
		es: "Incineroar",
		it: "Incineroar",
		pt: "Incineroar",
		de: "Fuegro"
	},
	illustrator: "Emi Ando",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		727,
	],
	hp: 170,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Profane Punch",
				fr: "Poing Vulgaire",
				es: "Puñetazo Profano",
				it: "Pugno Ribelle",
				pt: "Soco Profano",
				de: "Ruchloshieb"
			},
			effect: {
				en: "If your Benched Pokémon have any damage counters on them, this attack does 80 more damage.",
				fr: "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 80 puntos de daño más.",
				it: "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 80 danni in più.",
				pt: "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare Blitz",
				fr: "Boutefeu",
				es: "Envite Ígneo",
				it: "Fuococarica",
				pt: "Blitz de Labaredas",
				de: "Flammenblitz"
			},
			effect: {
				en: "Discard all Fire Energy from this Pokémon.",
				fr: "Défaussez toute l’Énergie Fire de ce Pokémon.",
				es: "Descarta todas las Energías Fire de este Pokémon.",
				it: "Scarta tutte le Energie Fire assegnate a questo Pokémon.",
				pt: "Descarte todas as Energias Fire deste Pokémon.",
				de: "Lege alle Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
