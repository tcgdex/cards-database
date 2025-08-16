import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "M Tyranitar EX",
		fr: "M-Tyranocif EX",
		es: "M-Tyranitar EX",
		it: "M Tyranitar EX",
		pt: "M-Tyranitar EX",
		de: "M-Despotar EX"
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
		en: "Tyranitar-EX",
		fr: "Tyranocif-EX",
		es: "Tyranitar-EX",
		it: "Tyranitar-EX",
		pt: "Tyranitar-EX",
		de: "Despotar-EX"
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
				en: "Destroyer King",
				fr: "Roi Destructeur",
				es: "As de la Destrucción",
				it: "Distruttore Assoluto",
				pt: "Rei Destruidor",
				de: "König der Zerstörung"
			},
			effect: {
				en: "This attack does 60 more damage for each damage counter on your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 60 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 60 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 60 de danos adicionais para cada contador de danos no Pokémon Ativo do seu oponente.",
				de: "Dieser Angriff fügt 60 weitere Schadenspunkte für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners zu."
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
			en: "{title}:",
			fr: "{title}:",
			es: "{title}:",
			it: "{title}:",
			pt: "{title}:",
			de: "{title}:"
		},

		effect: {
			en: "{title}: This Pokémon may have up to 2 Pokémon Tool cards attached to it.",
			fr: "{title}: Jusqu'à 2 cartes Outil Pokémon peuvent être attachées à ce Pokémon.",
			es: "{title}: Este Pokémon puede tener hasta 2 cartas de Herramienta Pokémon unidas a él.",
			it: "{title}: Questo Pokémon può avere fino a due carte Oggetto Pokémon assegnate.",
			pt: "{title}: Este Pokémon pode ter até dois cards de Ferramenta Pokémon ligados a ele.",
			de: "{title}: An dieses Pokémon können bis zu 2 Pokémon-Ausrüstungen angelegt sein."
		}
	}],

	thirdParty: {
		tcgplayer: 101514
	}
}

export default card
