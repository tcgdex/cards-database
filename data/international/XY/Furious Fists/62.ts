import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Tyrantrum",
		'fr-fr': "Rexillius",
		'es-es': "Tyrantrum",
		'it-it': "Tyrantrum",
		'pt-br': "Tyrantrum",
		'de-de': "Monargoras"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		697,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Tyrunt",
		'fr-fr': "Ptyranidur",
		'es-es': "Tyrunt",
		'it-it': "Tyrunt",
		'pt-br': "Tyrunt",
		'de-de': "Balgoras"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Chew Up",
				'fr-fr': "Mâchoires Affamées",
				'es-es': "Mascar",
				'it-it': "Masticata",
				'pt-br': "Mastigar",
				'de-de': "Zerkauen"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon has any Special Energy attached to it, this attack does 90 more damage.",
				'fr-fr': "Si de l'Énergie spéciale est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival tiene alguna Energía Especial unida a él, este ataque hace 90 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha delle Energie speciali assegnate, questo attacco infligge 90 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente possuir alguma Energia Especial ligada a ele, este ataque causará 90 de danos adicionais.",
				'de-de': "Wenn an dem Aktiven Pokémon deines Gegners Spezial-Energie angelegt ist, fügt dieser Angriff 90 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giga Impact",
				'fr-fr': "Giga Impact",
				'es-es': "Giga Impacto",
				'it-it': "Gigaimpatto",
				'pt-br': "Giga Impacto",
				'de-de': "Gigastoß"
			},
			effect: {
				'en-us': "This Pokémon can't attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Este Pokémon não poderá atacar durante sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Thanks to its gargantuan jaws, which could shred thick metal plates as if they were paper, it was invincible in the ancient world it once inhabited.",
	},

	thirdParty: {
		cardmarket: 281726,
		tcgplayer: 92239
	}
}

export default card
