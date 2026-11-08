import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "M Tyranitar EX",
		'fr-fr': "M-Tyranocif EX",
		'es-es': "M-Tyranitar EX",
		'it-it': "M Tyranitar EX",
		'pt-br': "M-Tyranitar EX",
		'de-de': "M-Despotar EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 240,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Tyranitar-EX",
		'fr-fr': "Tyranocif-EX",
		'es-es': "Tyranitar-EX",
		'it-it': "Tyranitar-EX",
		'pt-br': "Tyranitar-EX",
		'de-de': "Despotar-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Destroyer King",
				'fr-fr': "Roi Destructeur",
				'es-es': "As de la Destrucción",
				'it-it': "Distruttore Assoluto",
				'pt-br': "Rei Destruidor",
				'de-de': "König der Zerstörung"
			},
			effect: {
				'en-us': "This attack does 60 more damage for each damage counter on your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 60 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 60 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 60 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 60 de danos adicionais para cada contador de danos no Pokémon Ativo do seu oponente.",
				'de-de': "Dieser Angriff fügt 60 weitere Schadenspunkte für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners zu."
			},
			damage: "110+",

		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "{title}:",
			'fr-fr': "{title}:",
			'es-es': "{title}:",
			'it-it': "{title}:",
			'pt-br': "{title}:",
			'de-de': "{title}:"
		},

		effect: {
			'en-us': "{title}: This Pokémon may have up to 2 Pokémon Tool cards attached to it.",
			'fr-fr': "{title}: Jusqu'à 2 cartes Outil Pokémon peuvent être attachées à ce Pokémon.",
			'es-es': "{title}: Este Pokémon puede tener hasta 2 cartas de Herramienta Pokémon unidas a él.",
			'it-it': "{title}: Questo Pokémon può avere fino a due carte Oggetto Pokémon assegnate.",
			'pt-br': "{title}: Este Pokémon pode ter até dois cards de Ferramenta Pokémon ligados a ele.",
			'de-de': "{title}: An dieses Pokémon können bis zu 2 Pokémon-Ausrüstungen angelegt sein."
		}
	}],

	thirdParty: {
		cardmarket: 284224,
		tcgplayer: 100625
	}
}

export default card
