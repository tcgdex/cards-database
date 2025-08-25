import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Pidgey",
		fr: "Roucool",
		es: "Pidgey",
		it: "Pidgey",
		pt: "Pidgey",
		de: "Taubsi"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		16,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck Off",
				fr: "Picpic Piqueur",
				es: "Picotear",
				it: "Sbeccata",
				pt: "Arrancar com Bico",
				de: "Lospicken"
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tool cards attached to your opponent's Active Pokémon.",
				fr: "Avant d'infliger des dégâts, défaussez toutes les cartes Outil Pokémon attachées au Pokémon Actif de votre adversaire.",
				es: "Antes de infligir daño, descarta todas las cartas de Herramienta Pokémon unidas al Pokémon Activo de tu rival.",
				it: "Prima di infliggere il danno, scarta tutte le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario.",
				pt: "Antes de causar danos, descarte todos os cards de Ferramenta Pokémon ligados ao Pokémon Ativo do seu oponente.",
				de: "Lege, bevor du Schaden zufügst, alle an das Aktive Pokémon deines Gegners angelegten Pokémon-Ausrüstungen auf den Ablagestapel deines Gegners."
			},
			damage: 10,

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

	retreat: 1,

	thirdParty: {
		cardmarket: 281558,
		tcgplayer: 91212
	}
}

export default card
