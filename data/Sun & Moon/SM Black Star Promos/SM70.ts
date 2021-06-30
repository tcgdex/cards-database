import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Shining Ho-Oh",
		fr: "Ho-Oh Brillant",
		es: "Ho-Oh Luminoso",
		it: "Ho-Oh iridescente",
		pt: "Ho-Oh Luminescente",
		de: "Schimmerndes Ho-Oh"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 130,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Golden Wing",
				fr: "Aile Dorée",
				es: "Ala de Oro",
				it: "Ali Dorate",
				pt: "Asa Dourada",
				de: "Goldener Flügel"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent’s attack, move up to 2 basic Energy cards from this Pokémon to your Benched Pokémon in any way you like.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il est mis K.O. par les dégâts d’une attaque de votre adversaire, déplacez jusqu’à 2 cartes Énergie de base de ce Pokémon sur vos Pokémon de Banc, de la manière que vous voulez.",
				es: "Si este Pokémon es tu Pokémon Activo y queda Fuera de Combate por el daño de un ataque de tu rival, mueve hasta 2 cartas de Energía Básica de este Pokémon a tus Pokémon en Banca de la manera que desees.",
				it: "Se questo Pokémon è il tuo Pokémon attivo e viene messo KO dai danni inflitti da un attacco del tuo avversario, sposta a piacimento fino a due carte Energia base da questo Pokémon a quelli nella tua panchina.",
				pt: "Se este Pokémon for o seu Pokémon Ativo e ele for Nocauteado pelo dano de um ataque do seu oponente, mova até 2 cartas de Energia básica deste Pokémon para seus Pokémon no Banco como desejar.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist und durch Schaden einer Attacke deines Gegners kampfunfähig wird, verschiebe bis zu 2 Basis-Energiekarten von diesem Pokémon beliebig auf die Pokémon auf deiner Bank."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Blast",
				fr: "Déflagration",
				es: "Llamarada",
				it: "Fuocobomba",
				pt: "Rajada de Fogo",
				de: "Feuersturm"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un’Energia assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
