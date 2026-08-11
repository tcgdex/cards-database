import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [343],
	set: Set,

	name: {
		'fr-fr': "Balbuto",
		'en-us': "Baltoy",
		'es-es': "Baltoy",
		'it-it': "Baltoy",
		'pt-br': "Baltoy",
		'de-de': "Puppance"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Tour Rapide",
			'en-us': "Rapid Spin",
			'es-es': "Giro Rápido",
			'it-it': "Rapigiro",
			'pt-br': "Giro Rápido",
			'de-de': "Turbodreher"
		},

		effect: {
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc. Dans ce cas, envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon. If you do, switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca. Si lo haces, mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'it-it': "Scambia questo Pokémon con uno della tua panchina. Se lo fai, sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco. Se fizer isto, mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It was discovered in ancient ruins. While moving, it constantly spins. It stands on one foot even when asleep.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725174,
				tcgplayer: 509876,
				cardtrader: 255779
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725174,
				tcgplayer: 509876,
				cardtrader: 255779
			}
		},
	],

	illustrator: "Scav",

	
}

export default card
