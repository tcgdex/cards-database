import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Thundurus",
		'fr-fr': "Fulguris",
		'es-es': "Thundurus",
		'it-it': "Thundurus",
		'pt-br': "Thundurus",
		'de-de': "Voltolos"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		642,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Raging Thunder Punch",
				'fr-fr': "Poing-Éclair Déchaîné",
				'es-es': "Puño Trueno Furioso",
				'it-it': "Tuonopugno Furioso",
				'pt-br': "Soco Trovão Devastador",
				'de-de': "Wütender Donnerschlag"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon has a Pokémon Tool card attached to it, this attack does 30 more damage.",
				'fr-fr': "Si une carte Outil Pokémon est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 30 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha una carta Oggetto Pokémon assegnata, questo attacco infligge 30 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente possuir um card de Ferramenta Pokémon ligado a ele, esse ataque causará 30 de danos adicionais.",
				'de-de': "Wenn an das Aktive Pokémon deines Gegners eine Pokémon-Ausrüstung angelegt ist, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Slam",
				'fr-fr': "Tacle Foudroyant",
				'es-es': "Golpe Rayo",
				'it-it': "Fulmischianto",
				'pt-br': "Pancada de Raios",
				'de-de': "Wuchtiger Einschlag"
			},
			effect: {
				'en-us': "This Pokémon can't use Lightning Slam during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Tacle Foudroyant pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Golpe Rayo durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Fulmischianto.",
				'pt-br': "Este Pokémon não poderá usar Pancada de Raios durante sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Wuchtiger Einschlag während deines nächsten Zuges nicht einsetzen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The spikes on its tail discharge immense bolts of lightning. It flies around the Unova region firing off lightning bolts.",
	},

	thirdParty: {
		cardmarket: 281697,
		tcgplayer: 92208
	}
}

export default card
