import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [430],
	set: Set,

	name: {
		'en-us': "Honchkrow",
		'fr-fr': "Corboss",
		'es-es': "Honchkrow",
		'it-it': "Honchkrow",
		'pt-br': "Honchkrow",
		'de-de': "Kramshef"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
		'es-es': "Murkrow",
		'it-it': "Murkrow",
		'pt-br': "Murkrow",
		'de-de': "Kramurx"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Insomnia",
			'fr-fr': "Insomnia",
			'es-es': "Insomnio",
			'it-it': "Insonnia",
			'pt-br': "Insônia",
			'de-de': "Insomnia"
		},

		effect: {
			'en-us': "This Pokémon can't be Asleep.",
			'fr-fr': "Ce Pokémon ne peut pas être Endormi.",
			'es-es': "Este Pokémon no puede pasar a estar Dormido.",
			'it-it': "Questo Pokémon non può venire addormentato.",
			'pt-br': "Este Pokémon não pode ser Adormecido.",
			'de-de': "Dieses Pokémon kann nicht von Schlaf betroffen werden."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Voltage Dive",
			'fr-fr': "Plongée Voltaïque",
			'es-es': "Picado Voltaje",
			'it-it': "Picchiata Voltaica",
			'pt-br': "Mergulho Voltaico",
			'de-de': "Volttaucher"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon has any Special Energy attached, this attack does 80 more damage.",
			'fr-fr': "Si de l'Énergie spéciale est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival tiene alguna Energía Especial unida a él, este ataque hace 80 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha delle Energie speciali assegnate, questo attacco infligge 80 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente tiver alguma Energia Especial ligada a ele, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn an das Aktive Pokémon deines Gegners mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Its goons take care of most of the fighting for it. The only time it dirties its own hands is in delivering a final blow to finish off an opponent."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545561,
				tcgplayer: 234225
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545561,
				tcgplayer: 234225
			}
		},
	],
}

export default card
