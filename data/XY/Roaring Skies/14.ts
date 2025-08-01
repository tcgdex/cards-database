import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Fletchinder",
		fr: "Braisillon",
		es: "Fletchinder",
		it: "Fletchinder",
		pt: "Fletchinder",
		de: "Dartignis"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		662,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Fletchling",
		fr: "Passerouge",
		es: "Fletchling",
		it: "Fletchling",
		pt: "Fletchling",
		de: "Dartiri"
	},

	stage: "Stage1",

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
			type: "Water",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 282682
	}
}

export default card
