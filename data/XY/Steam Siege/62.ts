import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		es: "Spiritomb",
		it: "Spiritomb",
		pt: "Spiritomb",
		de: "Kryppuk"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		442,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Nightmare",
				fr: "Cauchemar",
				es: "Pesadilla",
				it: "Incubo",
				pt: "Pesadelo",
				de: "Nachtmahr"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Damage Play",
				fr: "Jeu de Dégâts",
				es: "Jugar con Daño",
				it: "Giocodanni",
				pt: "Jogar com Dano",
				de: "Salz in die Wunde streuen"
			},
			effect: {
				en: "Move as many damage counters on your opponent’s Benched Pokémon as you like to any of your opponent’s other Pokémon in any way you like.",
				fr: "Déplacez autant de marqueurs de dégâts que vous voulez des Pokémon de Banc de votre adversaire vers les autres Pokémon de votre adversaire, de la manière que vous voulez.",
				es: "Mueve tantos contadores de daño como quieras de los Pokémon en Banca de tu rival a cualquiera de los otros Pokémon de tu rival de la manera que desees.",
				it: "Distribuisci a piacimento i segnalini danno presenti sui Pokémon in panchina del tuo avversario su qualsiasi altro suo Pokémon.",
				pt: "Mova tantos contadores de danos dos Pokémon no Banco do seu oponente quanto desejar para quaisquer outros Pokémon do seu oponente do jeito que desejar.",
				de: "Verschiebe beliebig viele Schadensmarken von den Pokémon auf der Bank deines Gegners in beliebiger Weise auf seine anderen Pokémon."
			},

		},
	],


	retreat: 1,



}

export default card
