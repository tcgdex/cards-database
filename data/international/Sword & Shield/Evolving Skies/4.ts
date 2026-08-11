import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Jumpluff",
		'fr-fr': "Cotovol",
		'es-es': "Jumpluff",
		'it-it': "Jumpluff",
		'pt-br': "Jumpluff",
		'de-de': "Papungha"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage2",
	illustrator: "Tika Matsuno",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fluffy Barrage",
			'fr-fr': "Offensive Douillette",
			'es-es': "Ráfaga Sedosa",
			'it-it': "Offensiva Morbida",
			'pt-br': "Fluffy Barrage",
			'de-de': "Flauschige Offensive"
		},

		effect: {
			'en-us': "This Pokémon may attack twice each turn. If the first attack Knocks Out your opponent's Active Pokémon, you may attack again after your opponent chooses a new Active Pokémon.",
			'fr-fr': "Ce Pokémon peut attaquer deux fois par tour. Si la première attaque met K.O. le Pokémon Actif de votre adversaire, vous pouvez encore attaquer après que votre adversaire a choisi un nouveau Pokémon Actif.",
			'es-es': "Este Pokémon puede atacar 2 veces cada turno. Si el primer ataque deja Fuera de Combate al Pokémon Activo de tu rival, puedes atacar otra vez después de que tu rival elija un nuevo Pokémon Activo.",
			'it-it': "Questo Pokémon può attaccare due volte per turno. Se il primo attacco mette KO il Pokémon attivo del tuo avversario, puoi attaccare di nuovo dopo che il tuo avversario ha scelto un nuovo Pokémon attivo.",
			'pt-br': "This Pokémon may attack twice each turn. If the first attack Knocks Out your opponent's Active Pokémon, you may attack again after your opponent chooses a new Active Pokémon.",
			'de-de': "Dieses Pokémon kann während jedes Zuges zweimal angreifen. Falls die erste Attacke das Aktive Pokémon deines Gegners kampfunfähig macht, kannst du erneut angreifen, nachdem dein Gegner ein neues Aktives Pokémon gewählt hat."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Spinning Attack",
			'de-de': "Rundumangriff"
		},

		damage: 60,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,

	evolveFrom: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol",
		'es-es': "Skiploom",
		'it-it': "Skiploom",
		'pt-br': "Skiploom",
		'de-de': "Hubelupf"
	},

	description: {
		'en-us': "Even in the fiercest wind, it can control its fluff to make its way to any place in the world it wants."
	},

	dexId: [189],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574028,
				tcgplayer: 246817
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574028,
				tcgplayer: 246817
			}
		},
	],
}

export default card
