import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Haxorus",
		fr: "Tranchodon",
		es: "Haxorus",
		it: "Haxorus",
		pt: "Haxorus",
		de: "Maxax"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		612,
	],

	hp: 160,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Fraxure",
		fr: "Incisache",
		es: "Fraxure",
		it: "Fraxure",
		pt: "Fraxure",
		de: "Sharfax"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dragon Dance",
				fr: "Danse Draco",
				es: "Danza Dragón",
				it: "Dragodanza",
				pt: "Dança do Dragão",
				de: "Drachentanz"
			},
			effect: {
				en: "As long as this Haxorus is your Active Pokémon, each of its attacks does 100 more damage (before applying Weakness and Resistance). You can't add more than 100 damage in this way.",
				fr: "Tant que ce Tranchodon est votre Pokémon Actif, chacune de ses attaques inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance). Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon.",
				es: "Mientras este Haxorus sea tu Pokémon Activo, cada uno de sus ataques hace 100 puntos de daño más (antes de aplicar Debilidad y Resistencia). No puedes añadir más de 100 puntos de daño de esta manera.",
				it: "Fintanto che questo Haxorus è il tuo Pokémon attivo, ciascuno dei suoi attacchi infligge 100 danni in più, prima di aver applicato debolezza e resistenza. Non puoi aggiungere più di 100 danni in questo modo.",
				pt: "Enquanto este Haxorus for seu Pokémon Ativo, cada um do seus ataques causará 100 de danos adicionais (antes da aplicação de Fraqueza e Resistência). Você não pode adicionar mais de 100 danos desta forma.",
				de: "Solang Maxax dein Aktives Pokémon ist, fügt jeder seiner Angriffe 100 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden). Du kannst so nicht mehr als 100 Schadenspunkte hinzufügen."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc Aiguisé",
				es: "Colmillo Afilado",
				it: "Zannaffilata",
				pt: "Presa Afiada",
				de: "Scharfe Fänge"
			},

			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Metal",
			],
			name: {
				en: "Dragon Pulse",
				fr: "Dracochoc",
				es: "Pulso Dragón",
				it: "Dragopulsar",
				pt: "Pulso do Dragão",
				de: "Drachenpuls"
			},
			effect: {
				en: "Discard the top 3 cards of your deck.",
				fr: "Défaussez les 3 cartes du dessus de votre deck.",
				es: "Descarta las 3 primeras cartas de tu baraja.",
				it: "Scarta le prime tre carte del tuo mazzo.",
				pt: "Descarte os 3 cards de cima do seu baralho.",
				de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 286357,
		tcgplayer: 107230
	}
}

export default card
