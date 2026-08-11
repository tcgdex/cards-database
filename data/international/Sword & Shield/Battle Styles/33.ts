import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [230],
	set: Set,

	name: {
		'en-us': "Kingdra",
		'fr-fr': "Hyporoi",
		'es-es': "Kingdra",
		'it-it': "Kingdra",
		'pt-br': "Kingdra",
		'de-de': "Seedraking"
	},

	illustrator: "kawayoo",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan",
		'es-es': "Seadra",
		'it-it': "Seadra",
		'pt-br': "Seadra",
		'de-de': "Seemon"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Deep Sea King",
			'fr-fr': "Roi des Abysses",
			'es-es': "Rey del Mar Profundo",
			'it-it': "Re degli Abissi",
			'pt-br': "Rei do Mar Profundo",
			'de-de': "Tiefseekönig"
		},

		effect: {
			'en-us': "When your Active Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, you may move any amount of Water Energy from that Pokémon to this Pokémon.",
			'fr-fr': "Lorsque votre Pokémon Actif est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, vous pouvez déplacer autant d'Énergie Water que vous le voulez de ce Pokémon-là vers celui-ci.",
			'es-es': "Cuando tu Pokémon Activo queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, puedes mover cualquier cantidad de Energías Water de ese Pokémon a este Pokémon.",
			'it-it': "Quando il tuo Pokémon attivo viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, puoi spostare un numero qualsiasi di Energie Water da quel Pokémon a questo Pokémon.",
			'pt-br': "Quando seu Pokémon Ativo for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, você poderá mover qualquer quantidade de Energia Water daquele Pokémon para este Pokémon.",
			'de-de': "Wenn dein Aktives Pokémon durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wird, kannst du beliebig viele Water-Energien von jenem Pokémon auf dieses Pokémon verschieben."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Aqua Burst",
			'fr-fr': "Éclat Aquatique",
			'es-es': "Estallido Acuático",
			'it-it': "Idroscoppio",
			'pt-br': "Explosão Aquática",
			'de-de': "Aquasalve"
		},

		effect: {
			'en-us': "This attack does 40 damage for each Water Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chaque Énergie Water attachée à ce Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño por cada Energía Water unida a este Pokémon.",
			'it-it': "Questo attacco infligge 40 danni per ogni Energia Water assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano para cada Energia Water ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 40 Schadenspunkte zu."
		},

		damage: "40×",
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "It stores energy by sleeping at underwater depths at which no other life forms can survive."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 545121,
				tcgplayer: 234161
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545121,
				tcgplayer: 234161
			}
		},
	],
}

export default card
