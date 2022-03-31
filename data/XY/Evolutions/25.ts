import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Poliwrath",
		fr: "Tartard",
		es: "Poliwrath",
		it: "Poliwrath",
		pt: "Poliwrath",
		de: "Quappo"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		62,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte",
		es: "Poliwhirl",
		it: "Poliwhirl",
		pt: "Poliwhirl",
		de: "Quaputzi"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Dashing Punch",
				fr: "Poing Épique",
				es: "Puño Veloz",
				it: "Pugno Rincorsa",
				pt: "Soco Veloz",
				de: "Rasender Punch"
			},
			effect: {
				en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 50 more damage.",
				fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si este Pokémon estaba en la Banca y se ha convertido en tu Pokémon Activo en este turno, este ataque hace 50 puntos de daño más.",
				it: "Se questo Pokémon era in panchina ed è diventato il tuo Pokémon attivo in questo turno, questo attacco infligge 50 danni in più.",
				pt: "Se este Pokémon estava no Banco e tornou-se o seu Pokémon Ativo nesta vez de jogar, este ataque causará 50 de danos adicionais.",
				de: "Wenn dieses Pokémon auf der Bank war und während dieses Zuges zu deinem Aktiven Pokémon wurde, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Whirlpool",
				fr: "Siphon",
				es: "Torbellino",
				it: "Mulinello",
				pt: "Redemoinho",
				de: "Whirlpool"
			},
			effect: {
				en: "Discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía unida al Pokémon Activo de tu rival.",
				it: "Scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
